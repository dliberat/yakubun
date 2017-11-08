import * as general from './lib-generaluse.js';
var moment = require('moment-timezone');

function compareDates(source, target, checkOptions, oAccumulator){
  
  if(!verifyOptions(checkOptions)) {
    oAccumulator.timeCheck_clean_source = source;
    oAccumulator.timeCheck_clean_target = target;
    general.metalogger('Invalid checkOptions. Could not compare dates');
    return [null, oAccumulator];
  };

  // source goes in [0], target goes in [1]
  var cleanStrings = cleanStringsBeforeDateCheck(source, target, checkOptions);
  oAccumulator.timeCheck_clean_source = cleanStrings[0];
  oAccumulator.timeCheck_clean_target = cleanStrings[1];

  // extract dates {2017-9-21} and {2017-9-21 12:00} and {2017-09-30 11:00am}
  var datesRegExp = new RegExp('{[0-9]{4}-[0-1]?[0-9]-[0-3]?[0-9]}|{[0-9]{4}-[0-1]?[0-9]-[0-3]?[0-9] [0-2]?[0-9]:[0-5][0-9][ap]?[m]?}','gi');
  var comparison = general.regexComparer(cleanStrings[0], cleanStrings[1], datesRegExp, datesRegExp, false);
  var compare = general.compareArrays(comparison[0], comparison[1]);

  // return if the comparison matches exactly, since no further checking is necessary
  if(compare) {
    return [null, oAccumulator];
  }

  // extract dates with 9/21 format and leave them in a side array
  datesRegExp = new RegExp('[0-1]?[0-9]\/[0-3]?[0-9]','gi');
  var potentialSlashDates = general.regexComparer(cleanStrings[0], cleanStrings[1], datesRegExp, datesRegExp, false);

  // Turn all dates and times into two-digits so as to be ISO compliant
  comparison = convertToTwoDigitDates(comparison);

  // convert to sorted moment array
  var momentArr = convertToMomentArr(comparison);
  var compare = general.compareArrays(momentArr[0], momentArr[1]);

  // compare moment arrays. If they don't match, search in the side array
  if(!compare)
  {
    var res = removeMatchedDates(momentArr, potentialSlashDates[0], potentialSlashDates[1]);
    var retval = null;

    // remove any dates that were identified in the sideArr
    if(res){
      oAccumulator.timeCheck_clean_source = removeSideArrStrings(res[2], oAccumulator.timeCheck_clean_source);
      oAccumulator.timeCheck_clean_target = removeSideArrStrings(res[3], oAccumulator.timeCheck_clean_target);
    }

    retval = formatForOutput(res, oAccumulator, null, null);
  }

  return [retval, oAccumulator];
}

function compareDatesTz(source, target, checkOptions, oAccumulator){
  
  if(!verifyOptions(checkOptions)) {
    oAccumulator.timeCheck_clean_source = source;
    oAccumulator.timeCheck_clean_target = target;
    general.metalogger('Invalid checkOptions. Could not compare dates');
    return [null, oAccumulator];
  };

  var retval = null;

  // check whether time zones have been provided
  var sourceTZ = checkOptions.sourceTimeZone || 'Asia/Tokyo';
  var targetTZ = checkOptions.targetTimeZone || 'Asia/Tokyo';

  // source goes in [0], target goes in [1]
  var cleanStrings = cleanStringsBeforeDateCheck(source, target, checkOptions);
  oAccumulator.timeCheck_clean_source = cleanStrings[0];
  oAccumulator.timeCheck_clean_target = cleanStrings[1];

  // extract dates in only this format {2017-9-21 12:00}
  var datesRegExp = new RegExp('{[0-9]{4}-[0-1]?[0-9]-[0-3]?[0-9] [0-2]?[0-9]:[0-5][0-9]}','gi');
  var comparison = general.regexComparer(cleanStrings[0], cleanStrings[1], datesRegExp, datesRegExp, false);

  // turn all dates and times into two-digits so as to be ISO compliant
   comparison = convertToTwoDigitDates(comparison);

  // convert to sorted moment array
  var momentArr = convertToMomentArr(comparison, sourceTZ, targetTZ);

  // loop through momentArray[0], which is an array of the JP moments
  // and check if a matching date exists in momentArray[1] which is
  // an array of the target language dates

  for (var i = momentArr[0].length -1; i >= 0; i--) {
    for (var j = 0; j < momentArr[1].length; j++) {
      if(momentArr[0][i].isSame(momentArr[1][j])){
        // remove the moments from the arrays
        momentArr[0].splice(i,1);
        momentArr[1].splice(j,1);
        break;
      }
    }
  }

  // momentArr should now only contain the dates that have no matches
  retval = formatForOutput(momentArr, oAccumulator, sourceTZ, targetTZ);

  return [retval, oAccumulator];

}


/* ------------------- PRIVATE METHODS ---------------*/
// DATES CHECK
function cleanStringsBeforeDateCheck(source, target, checkOptions){

  /////////////////////// SOURCE TEXT CLEANUP//////////////////////////////////////
  // replace all double-byte numbers with single byte versions
  source = general.replaceDoubleByteNums(source);
  // remove strings that should never be interpreted as numbers
  source = initialJPFilter(source);
  // parse all dates into the {2017-9-21} format
  // Still need to convert things into 2-digit format
  source = general.regexReplaceAllFromArray(checkOptions.dateFormats[checkOptions.sourceLang], source, 'gi');

  ////////////////////// TARGET TEXT CLEANUP ////////////////////////////////////
  // change all 11am times to 11:00am
  target = general.addMinutesToSimpleENTimes(target);
  // convert Jan. 21, 22 to: Jan. 21 Jan. 22
  target = cleanGetRichCommaDateLists(target);

  // perform the big scan to catch as many dates and times as possible
  target = general.regexReplaceAllFromArray(checkOptions.dateFormats[checkOptions.targetLang], target, 'gi');

  // convert any times that were caught to 24 hour format and remove am/pm
  target = convertToISOTime(target);

  // TO DO: Convert months and dates to two-digit format in this cleanup step

  return [source, target];
}

/*
Remove words from the JP that have kanji in them that would normally be
mistaken for numbers, or that should never be translated as numbers.
*/
function initialJPFilter(string){
  var arr = [
      ['([0-9]?[0-9])[\\u65E5\\u6642\\u5206][\\u9593\\u76EE]',' $1 '],  // 3日目 or ４日間 or 3時間 or 25分間
      ['([0-9]+)\\u65E5\\u9023\\u7D9A',' $1 '],                         // 6日連続
      ['[0-9]\\u65E5([0-9]+)\\u56DE', ' $1 '],                          // 1日１回
      ['\\u4E09\\u89D2', ' '],                                          // 三角
      ['\\u4E07\\u7AEF', ' '],                                          // 万端
      ['\\u4E07\\u80FD', ' ']
  ]

  return general.regexReplaceAllFromArray(arr, string, 'gi');
}

function cleanGetRichCommaDateLists (string){
  // the negative lookahead avoids error in things like Oct. 20, 2017
  var formatChanges = [
    ['([JFMASON][aepuco][nbrynlgptvc]\\. )([0-3]?[0-9]), ([0-3]?[0-9]), ([0-3]?[0-9]), ([0-3]?[0-9])(?!\\d)', '$1$2 $1$3 $1$4 $1$5'],
    ['([JFMASON][aepuco][nbrynlgptvc]\\. )([0-3]?[0-9]), ([0-3]?[0-9]), ([0-3]?[0-9])(?!\\d)', '$1$2 $1$3 $1$4'],
    ['([JFMASON][aepuco][nbrynlgptvc]\\. )([0-3]?[0-9]), ([0-3]?[0-9])(?!\\d)', '$1$2 $1$3']
  ]
  return general.regexReplaceAllFromArray(formatChanges, string, 'gi');
}

function convertToTwoDigitDates (comparison){
  
  var digitAdder = function(match, m1, month, m2, date, m3, hour, m4){
    if(date.length == 1){ date = '0' + date; }
    if(month.length == 1){ month = '0' + month; }
    if(hour.length == 1){ hour = '0' + hour; }
    return m1 + month + m2 + date + m3 + hour + m4;
  }

  var digitAdderNoTime = function(match, m1, month, m2, date, m3){
    if(date.length == 1){ date = '0' + date; }
    if(month.length == 1){ month = '0' + month; }
    return m1 + month + m2 + date + m3;
  }

  var monthConverter = function(element, index){
    // var re;
    if(element.length>12){
      return element.replace(/({[0-9]{4}-)([0-1]?[0-9])(-)([0-3]?[0-9])( )([0-2]?[0-9])(:[0-5][0-9].*)/, digitAdder);
    } else {
      return element.replace(/({[0-9]{4}-)([0-1]?[0-9])(-)([0-3]?[0-9])(.*)/, digitAdderNoTime);
    }
  }

  comparison[0] = comparison[0].map(monthConverter);
  comparison[1] = comparison[1].map(monthConverter);
  return comparison;
}

function convertToMomentArr (comparison, sourceTz, targetTz){
  var newArr = [];
  var momentDateSort = function(a,b){
    if(!moment.isMoment(a) || !moment.isMoment(b)){ return 0; }

    if(a.isBefore(b)){
        return -1;
      } else if(b.isBefore(a)){
        return 1;
      } else {
        return 0;
      }
  }
  var sourceConverter = function(element){
    element = element.slice(1,element.length-1);
    if(sourceTz) {
      //console.log(moment.tz(element, sourceTz).format());
      return moment.tz(element, sourceTz);
    } else {
      return moment(element);
    }
  }
  var targetConverter = function(element){
    element = element.slice(1,element.length-1);
    if(targetTz) {
      //console.log(moment.tz(element, targetTz).format());
      return moment.tz(element, targetTz);
    } else {
      return moment(element);
    }
  }

  newArr[0] = comparison[0].map(sourceConverter).sort(momentDateSort);
  newArr[1] = comparison[1].map(targetConverter).sort(momentDateSort);
  return newArr;
}

function removeMatchedDates (momentArr, sideArr, sideArrTarget){

  sideArr = sideArr || []; sideArrTarget = sideArrTarget || [];
  var arrSource = []; // house all source dates that don't have matches in target
  var arrTarget = []; // all target dates w/ no match in source, or in side array
  var arrFoundInSideArr = [];
  var arrFoundInTargetSideArr = [];

  // convert the dates into a Sep. 21 format for readability
  var outFormatSourceArr;
  var outFormatTargetArr;
  outFormatSourceArr = momentArr[0].map(function(x){ return x.format('MMM. D'); });
  outFormatTargetArr = momentArr[1].map(function(x){ return x.format('MMM. D'); });

  // if a date is present in source but not in target, push it to arrsource
  for (var i = 0; i < outFormatSourceArr.length; i++){
    var e = outFormatSourceArr[i];
      if(!outFormatTargetArr.includes(e)) {
        var slashFormat = momentArr[0][i].format('M') + '/' + momentArr[0][i].format('D');
        
        if(!sideArrTarget.includes(slashFormat)){
          arrSource.push(e);
        } else {
          arrFoundInTargetSideArr.push(slashFormat);
        }
      }
  }

  // if a date is present in target but not in source,
  // check if it exists in sideArr, then push to arrTarget
  for (var i = 0; i < outFormatTargetArr.length; i++){
    var e = outFormatTargetArr[i];
    if(!outFormatSourceArr.includes(e)) {
      var slashFormat = momentArr[1][i].format('M') + '/' + momentArr[1][i].format('D');
      if(!sideArr.includes(slashFormat)) {
        arrTarget.push(e);
      } else {
        arrFoundInSideArr.push(slashFormat);
      }
    }
  }
  

  return [arrSource, arrTarget, arrFoundInSideArr, arrFoundInTargetSideArr];
}

function removeSideArrStrings (sideArrStrings, clean_source_string){

  // loop through the dates that were identified as being dates in the
  // side string
  for(var i=0;i<sideArrStrings.length; i++){
    // build a {2017-9-21} string
    var slash = sideArrStrings[i].indexOf('/');
    var replacer = '{2017-' + sideArrStrings[i].slice(0,slash) + '-' + sideArrStrings[i].slice(slash + 1)+ '}';

    // perform the replace
    clean_source_string = clean_source_string.replace(sideArrStrings[i],replacer);
  }
  return clean_source_string;
}

function convertToISOTime(string){
  
    var twentyFourHours = function(match, hr, min, mer){
        hr = Number(hr);
        min = Number(min);
        mer = mer.toLowerCase();

        if(hr == 12 && mer == 'am'){
          hr = 0;
        }
        if(hr < 12 && mer == 'pm'){
          hr = hr + 12;
        }
        var sHr = hr.toString();
        var sMin = min.toString();
        if(hr < 10) { sHr = '0' + sHr; }
        if(min < 10) { sMin = '0' + sMin; }

        return sHr + ':' + sMin;
      }
    var newString = string.replace(/([0-2]?[0-9]):([0-5][0-9])([ap]m)/gi, twentyFourHours);
    return newString;
}

/*
Takes an array with the following arguments
0: Array of dates found in source with no match in target
1: Array of dates found in target with no match in source
2: (optional) Array of slash dates that were parsed in the source
3: (optional) Array of slash dates that were parsed in the target
*/
function formatForOutput (arr, oAccumulator, sourceTZ, targetTZ){
  // if the array elements are still moments, change them to readable formats
  var format = 'MMM. D';
  if(sourceTZ != targetTZ)
  {
    format += ' HH:MM z';
  }

  for (var j = 0; j < 2; j++){
    for (var i = 0; i < arr[j].length; i++) {
      if(moment.isMoment(arr[j][i]))
      {
        arr[j][i] = arr[j][i].format(format);
      }
    }
  }

  var inSourceNoMatch = 'Source dates w/o match in target: <span class="text-date">' + arr[0].join(', ') + '</span>';
  var inTargetNoMatch = 'Target dates w/o match in source: <span class="text-date">' + arr[1].join(', ') + '</span>';
  var slashParsedInSource = '';
  var slashParsedInTarget = '';

  if(arr.length > 3){ 
    if(arr[3].length >0){ slashParsedInTarget = arr[3].join(', '); }
  }
  
  if(arr.length > 2){
    if(arr[2].length > 0){ slashParsedInSource = arr[2].join(', '); }
    
    if(slashParsedInTarget !== '' || slashParsedInSource !== ''){
    general.metalogger('Found & parsed slash dates: ' + slashParsedInTarget + ' ' + slashParsedInSource + ' at segment ' + (Number(oAccumulator.currentSegment) + 1));
    }
  }

  // create the output string
  var output;
  if(arr[0].length > 0 && arr[1].length > 0)
  {
    output = inSourceNoMatch + '<br>' + inTargetNoMatch;
  }
  else if (arr[0].length > 0 && arr[1].length == 0)
  {
    output = inSourceNoMatch;
  }
  else if (arr[0].length == 0 && arr[1].length > 0)
  {
    output = inTargetNoMatch;
  } else {
    output = null;
  }

  return output;
}

// TIME CHECK
function cleanStringsBeforeTimeCheck (source, target, checkOptions){
  
  // replace all double-byte numbers with single byte versions
  source = general.replaceDoubleByteNums(source);
  
  // replace kanji times with standard numerical times
  source = source.replace(/([0-2]?[0-9])\u6642([0-5][0-9])\u5206/g, '$1:$2');
  source = source.replace(/([0-2]?[0-9])\u6642\u534A/g, '$1:30');
  source = source.replace(/([0-2]?[0-9])\u6642/g, '$1:00');

  // times that are followed by a closing brace
  // have already been parsed by the datescheck
  // find all other times, and put them in braces
  source = source.replace(/([0-2]?[0-9])[:\uFF1A]([0-5][0-9])(?!})/g, '{$1:$2}');
  target = target.replace(/([0-2]?[0-9]:[0-5][0-9])(?!})/gi, '{$1}');

  return [source, target]
}

function parseTimeStringsIntoMomentArr (stringsArr){
  var outArr = [];
  
  for (var i = 0; i < stringsArr.length; i++){
    var e = stringsArr[i];
    var x = convertTimesToISO(e); // moment requires ISO 8601 strings
    e = moment(x);
    // check that e is a valid moment to avoid errors when comparing
    if(e.isValid())
    {
      outArr.push(e);
    } else {
      console.log('Invalid moment.');
    }
  }

  return outArr;
}

function convertTimesToISO (string){
  
  string = string.toLowerCase();

  // add 0 to single-digit hours
  if(string.indexOf(':') === 1)
  { string = '0' + string; }

  // remove 'am'
  string = string.replace(/\uFF1A/gi, ':');
  string = string.replace(/12(:00)?am/gi,'00:00');
  string = string.replace(/12(:00)?pm/gi,'12:00');   // need to do this otherwise 12pm turns into 24:00 and the date shifts over
  string = string.replace(/am/gi,'');

  // add 12 hours and remove pm
  if(string.indexOf('pm') > 0)
  {
    var hours = Number(string.slice(0,2)) + 12;
    var minutes = string.slice(3,5);
    string = hours.toString() + minutes;
  }
  return '19850520T' + string.replace(':','');
}

function momentSort (a,b){
  // This sort checks ONLY the times it does not take into account dates

  var getMins = function(mObject){
    return mObject.minutes() + (mObject.hours() * 60);
  }

  // leave array unsorted if either of the elements is not a moment
  if(!moment.isMoment(a) || !moment.isMoment(b)) { return 0; }

  if(getMins(a) < getMins(b)) {
    return -1; // put a in front of b
  } else if(getMins(b) < getMins(a)) {
    return 1; // put b in front of a
  } else {
    return 0; // leave them in the same position relative to one another
  }
}

function timeDisplayFormatting (momentArr){
   
  var displayArray = [];

  if(momentArr.length === 0){
    displayArray.push('nothing');
    
  } else {
    
    for(var i = 0; i < momentArr.length; i++){
      displayArray.push(momentArr[i].format('H:mm'));
    }
    
  }
  return displayArray.join(', ');
}

function verifyOptions(checkOptions){
  if(
    !checkOptions.hasOwnProperty('sourceLang') ||
    !checkOptions.hasOwnProperty('targetLang') ||
    !checkOptions.hasOwnProperty('dateFormats')
    ){
      return false;
    }
    
  if(
    !checkOptions.dateFormats.hasOwnProperty(checkOptions.sourceLang) ||
    !checkOptions.dateFormats.hasOwnProperty(checkOptions.targetLang)
    ){
      return false;
    }

  return true;
}

export {
 compareDates,
 compareDatesTz
}