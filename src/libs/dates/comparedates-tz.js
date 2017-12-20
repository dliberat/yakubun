import moment from 'moment-timezone';
import * as general from '../lib-generaluse';
import * as dates from './dates-common';

/** convert 12 hour clocks to 24 hour clocks
 *
 */
function twentyFourHours(match, hour, minutes, meridian) {
  let hr = Number(hour);
  const min = Number(minutes);
  const mer = meridian.toLowerCase();

  if (hr === 12 && mer === 'am') {
    hr = 0;
  }
  if (hr < 12 && mer === 'pm') {
    hr += 12;
  }
  let sHr = hr.toString();
  let sMin = min.toString();
  if (hr < 10) { sHr = `0${sHr}`; }
  if (min < 10) { sMin = `0${sMin}`; }

  return `${sHr}:${sMin}`;
}

function convertToISOTime(string) {
  return string.replace(/([0-2]?[0-9]):([0-5][0-9])([ap]m)/gi, twentyFourHours);
}

function cleanStringsBeforeDateCheck(src, tgt, checkOptions) {
  let source = src;
  let target = tgt;

  // ///////////////////// SOURCE TEXT CLEANUP//////////////////////////////////////
  // replace all double-byte numbers with single byte versions
  source = general.replaceDoubleByteNums(source);
  // remove strings that should never be interpreted as numbers
  source = dates.initialJPFilter(source);
  // parse all dates into the {2017-9-21} format
  // Still need to convert things into 2-digit format
  source = general.regexReplaceAllFromArray(checkOptions.dateFormats[checkOptions.sourceLang], source, 'gi');

  // //////////////////// TARGET TEXT CLEANUP ////////////////////////////////////
  // change all 11am times to 11:00am
  target = general.addMinutesToSimpleENTimes(target);
  // convert Jan. 21, 22 to: Jan. 21 Jan. 22
  target = dates.cleanGetRichCommaDateLists(target);

  // perform the big scan to catch as many dates and times as possible
  target = general.regexReplaceAllFromArray(checkOptions.dateFormats[checkOptions.targetLang], target, 'gi');

  // convert any times that were caught to 24 hour format and remove am/pm
  target = convertToISOTime(target);

  // TO DO: Convert months and dates to two-digit format in this cleanup step
  return [source, target];
}

function convertToMomentArr(comparison, sourceTz, targetTz) {
  const newArr = [];

  const sourceConverter = function sourceConverter(e) {
    const element = e.slice(1, e.length - 1);
    if (sourceTz) {
      return moment.tz(element, sourceTz);
    }
    return moment(element);
  };
  const targetConverter = function targetConverter(e) {
    const element = e.slice(1, e.length - 1);
    if (targetTz) {
      return moment.tz(element, targetTz);
    }
    return moment(element);
  };

  newArr[0] = comparison[0].map(sourceConverter).sort(dates.momentDateSort);
  newArr[1] = comparison[1].map(targetConverter).sort(dates.momentDateSort);
  return newArr;
}

/*
Takes an array with the following arguments
0: Array of dates found in source with no match in target
1: Array of dates found in target with no match in source
2: (optional) Array of slash dates that were parsed in the source
3: (optional) Array of slash dates that were parsed in the target
*/
function formatForOutput(arr, oAccumulator, sourceTZ, targetTZ) {
  // if the array elements are still moments, change them to readable formats
  let format = 'MMM. D';
  if (sourceTZ !== targetTZ) {
    format += ' HH:MM z';
  }

  for (let j = 0; j < 2; j += 1) {
    for (let i = 0; i < arr[j].length; i += 1) {
      if (moment.isMoment(arr[j][i])) {
        arr[j][i] = arr[j][i].format(format);
      }
    }
  }

  const inSourceNoMatch = `Source dates w/o match in target: <span class="text-date">${arr[0].join(', ')}</span>`;
  const inTargetNoMatch = `Target dates w/o match in source: <span class="text-date">${arr[1].join(', ')}</span>`;
  let slashParsedInSource = '';
  let slashParsedInTarget = '';

  if (arr.length > 3) {
    if (arr[3].length > 0) { slashParsedInTarget = arr[3].join(', '); }
  }

  if (arr.length > 2) {
    if (arr[2].length > 0) { slashParsedInSource = arr[2].join(', '); }

    if (slashParsedInTarget !== '' || slashParsedInSource !== '') {
      general.metalogger(`Found & parsed slash dates: ${slashParsedInTarget} ${slashParsedInSource} at segment ${Number(oAccumulator.currentSegment) + 1}`);
    }
  }

  // create the output string
  let output;
  if (arr[0].length > 0 && arr[1].length > 0) {
    output = `${inSourceNoMatch}<br>${inTargetNoMatch}`;
  } else if (arr[0].length > 0 && arr[1].length === 0) {
    output = inSourceNoMatch;
  } else if (arr[0].length === 0 && arr[1].length > 0) {
    output = inTargetNoMatch;
  } else {
    output = null;
  }

  return output;
}

function verifyOptions(checkOptions) {
  const optionKeys = Object.keys(checkOptions);
  if (
    optionKeys.indexOf('sourceLang') < 0 ||
    optionKeys.indexOf('targetLang') < 0 ||
    optionKeys.indexOf('dateFormats') < 0
  ) {
    return false;
  }

  const dateFormatsKeys = Object.keys(checkOptions.dateFormats);
  if (
    dateFormatsKeys.indexOf(checkOptions.sourceLang) < 0 ||
    dateFormatsKeys.indexOf(checkOptions.targetLang) < 0
  ) {
    return false;
  }

  return true;
}

function compareDatesTz(source, target, checkOptions, oAccumulator) {
  if (!verifyOptions(checkOptions)) {
    oAccumulator.timeCheck_clean_source = source;
    oAccumulator.timeCheck_clean_target = target;
    general.metalogger('Invalid checkOptions. Could not compare dates');
    return [null, oAccumulator];
  }

  let retval = null;

  // check whether time zones have been provided
  const sourceTZ = checkOptions.sourceTimeZone || 'Asia/Tokyo';
  const targetTZ = checkOptions.targetTimeZone || 'Asia/Tokyo';

  // source goes in [0], target goes in [1]
  const [cleanSource, cleanTarget] = cleanStringsBeforeDateCheck(source, target, checkOptions);
  oAccumulator.timeCheck_clean_source = cleanSource;
  oAccumulator.timeCheck_clean_target = cleanTarget;

  // extract dates in only this format {2017-9-21 12:00}
  const datesRegExp = new RegExp('{[0-9]{4}-[0-1]?[0-9]-[0-3]?[0-9] [0-2]?[0-9]:[0-5][0-9]}', 'gi');
  let comparison = general.regexComparer(cleanSource, cleanTarget, datesRegExp, datesRegExp, false);

  // turn all dates and times into two-digits so as to be ISO compliant
  comparison = dates.convertToTwoDigitDates(comparison);

  // convert to sorted moment array
  const momentArr = convertToMomentArr(comparison, sourceTZ, targetTZ);

  // loop through momentArray[0], which is an array of the JP moments
  // and check if a matching date exists in momentArray[1] which is
  // an array of the target language dates

  for (let i = momentArr[0].length - 1; i >= 0; i -= 1) {
    for (let j = 0; j < momentArr[1].length; j += 1) {
      if (momentArr[0][i].isSame(momentArr[1][j])) {
        // remove the moments from the arrays
        momentArr[0].splice(i, 1);
        momentArr[1].splice(j, 1);
        break;
      }
    }
  }

  // momentArr should now only contain the dates that have no matches
  retval = formatForOutput(momentArr, oAccumulator, sourceTZ, targetTZ);

  return [retval, oAccumulator];
}

export default compareDatesTz;
