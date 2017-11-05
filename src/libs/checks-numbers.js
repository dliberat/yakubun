import * as general from './lib-generaluse.js';

function compareNumbers(source, target, checkOptions, oAccumulator)
{
  /* remove all numbers that don't go into the check. Use the pre-cleaned
  strings from the time check, since they've alreadyaccounted for some 
  slash dates (e.g. 9/21) that are difficult to parse otherwise */
  var cleanStrings = cleanStringsBeforeNumberCheck(oAccumulator.timeCheck_clean_source, oAccumulator.timeCheck_clean_target, checkOptions);
  source = cleanStrings[0];
  target = cleanStrings[1];

  // compare the cleaned strings based on the following regex
  var re = new RegExp('[0-9]+','gi');
  var comparison = general.regexComparer(source, target, re, re);

  // allow for a single 'once' or 'per' to replace a single '1' if missing from the target
  comparison = oncePerAdjustments(comparison, target);

  var retval = null;
  if(!comparison[0].compare(comparison[1]))
  {
    if(comparison[0].length == 0){ comparison[0] = ['nothing']; }
    if(comparison[1].length == 0){ comparison[1] = ['nothing']; }

    retval = 'Found <span class="text-warning">' + comparison[0].join(', ') +
  '</span> in source and <span class="text-warning">' + comparison[1].join(', ') + '</span> in target.';
  }

  return [retval, oAccumulator, 'compareNumbers'];
}

function cleanStringsBeforeNumberCheck(source, target, checkOptions)
{
  // remove all dates and times from the strings
  // based on the date and time formats provided
  source = numchecks_removeDates(source);
  target = numchecks_removeDates(target);

  // remove commas from numbers such as 10,000
  source = numchecks_removeCommasFromNumbers(source, checkOptions.sourceLang);
  target = numchecks_removeCommasFromNumbers(target, checkOptions.targetLang);

  // common lexical substitutions
  source = numchecks_commonSubstitutions(source, checkOptions.sourceLang);
  target = numchecks_commonSubstitutions(target, checkOptions.targetLang);

  // replace K with 1000, M with 1,000,000
  if(checkOptions.numericalLetters)
  { target = numericalLetterSubstitutions(target); }

  // additional replacements provided in checkOptions
  if(checkOptions.numIgnoreSource)
  { source = customNumberSubs(source, checkOptions.numIgnoreSource); }
  if(checkOptions.numIgnoreTarget)
  { target = customNumberSubs(target, checkOptions.numIgnoreTarget); }

  return [source, target];
}

function numchecks_commonSubstitutions(string, language)
{
  language = language.toLowerCase();

  var oSubstitutions = {
    'ja': [
      ['POP2','POP'],
      ['\u30C8\u30EA\u30D7\u30EB',' 3 '], //　トリプル
      ['\u30C0\u30D6\u30EB',' 2 '], // ダブル
      ['\u5343','000 '], // 千
      ['(\\d+)\\.(\\d)\u4E07','$1$2000 '], // 1.3万
      ['\u4E07','0000 '], // 万 TODO: Add in (?:[0-9])
      ['(\\d+)\\.(\\d)\u5104', '$1$20000000 '], // 億
      ['(\\d)\u5104', '$100000000 '], // 億
      ['1\u3064\u76EE',''], // 1つ目
      ['\u2460','1 '], // ①
      ['\u2461','2 '],
      ['\u2462','3 '],
      ['\u2463','4 '],
      ['\u2464','5 '],
      ['\u2465','6 '],
      ['[1]?[0-9]\u6708','month']
    ],
    'en':[
      ['POP\\s?2', 'POP'],
      ['doubl',' 2 '],
      ['second\\s', ' 2 '],
      ['twice', ' 2 '],
      ['third',' 3 '],
      ['tripl',' 3 '],
      ['quadrupl',' 4 '],
      ['quintupl',' 5 '],
      ['thousand', ' 000 '],
      ['(\\d+)\\.(\\d)\\smillion', '$1$200000'],
      ['(\\d+)\\smillion',' $1000000 '],
      ['(\\d+)\\.(\\d)\\sbillion', '$1$200000000'],
      ['(\\d+)\\sbillion',' $1000000000 ']
    ],
    'es': [
      ['doble', ' 2 '],
      ['triple', ' 3 '],
      ['(\\d+),(\\d)\\smillones', '$1$200000'],
      ['(\\d+)\\smillon',' $1000000 ']
    ]
  }

  return general.regexReplaceAllFromArray(oSubstitutions[language], string, 'gi');

}

function customNumberSubs(string, subsArray)
{
  /* subsArray should have the following structure:
  [
    [regex string, replacement],
    [regex string, replacement]
  ]
  */
  
  if (subsArray === undefined || subsArray === null){
      console.log('Error. subsArray is ' + subsArray);
      return string;
  }
  if(subsArray.constructor !== Array){
      console.log('Error. subsArray is not an Array.');
      return string;
  }
  for (var i = 0; i < subsArray.length; i++){
      var e = subsArray[i];
      string = string.replace(e[0],e[1]);
  }

  return string;
}

function numchecks_removeCommasFromNumbers(string, language)
{
  language = language.toLowerCase();
  if (language == 'ja' || language == 'en') {
    return string.replace(/([0-9]+),([0-9])/g, '$1$2');
  } else if (language == 'es') {
    return string.replace(/([0-9]+)\.([0-9])/g, '$1$2');
  } else {
    return string.replace(/([0-9]+),([0-9])/g, '$1$2');
  }

}

function numchecks_removeDates(string)
{
  // Remove dates and times in the format
  // {2017-9-21 12:30} or {2017-09-21} or {15:34}
  // TO DO: Ensure that checks-datetime always exports dates
  // in two digit-form so that the first ? can be removed
  // from this regex
  return string.replace(/{[0-9]{4}-[0-1]?[0-9].+}|{[0-2][0-9]:[0-5][0-9]}/gi,' ');

}

function numericalLetterSubstitutions(string)
{
  var numericalLetterReplacer = function (match, p1, p2)
  {
    // parse the numerical portion as a number
    var mantissa = Number(p1);
    // if it cannot be parsed for whatever reason, replace the match with itself
    if(isNaN(mantissa)) {
      return match;
    } else {
      var factor = p2 == 'K' ? 1000 : 1000000;
      return mantissa * factor;
    }
  }

  return string.replace(/([0-9]*?\.?[0-9])([KM])\s/g,numericalLetterReplacer)
}

function oncePerAdjustments(arr, target)
{
  if (target === undefined) {
    return arr;
  }

  var reducer = function(a, b){
    if(b == '1') {
      return a + 1;
    } else {
      return a;
    }
  };
  // count 1s in source text
  var s = arr[0].reduce(reducer, 0);
  // count 1s in target text
  var t = arr[1].reduce(reducer, 0);

  if(s > t && target.indexOf('once') > 0){
    arr[1].push('1');
    arr[1].sort();
    return arr;
  }

  if(s > t && target.indexOf(' per ') > 0){
    arr[1].push('1');
    arr[1].sort();
    return arr;
  }

  return arr;
}

Array.prototype.compare = general.compareArrays;

export {
    compareNumbers
}