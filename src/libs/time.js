import * as general from './lib-generaluse.js';

const moment = require('moment-timezone');

function compareTimes(source, target, checkOptions, oAccumulator) {
  // check to make sure oAccumulator is an object
  if (typeof (oAccumulator) === 'object' && oAccumulator !== null) {
    // use the clean strings, if they exist
    if (oAccumulator.hasOwnProperty('timeCheck_clean_source')) source = oAccumulator.timeCheck_clean_source;
    if (oAccumulator.hasOwnProperty('timeCheck_clean_target')) target = oAccumulator.timeCheck_clean_target;
  } else {
    // need to create this because this module pushes
    // clean strings to the accumulator
    oAccumulator = {};
  }

  // clean up the strings
  return clean(source, target, oAccumulator);
}

function clean(source, target, oAccumulator) {
  // replace all double-byte numbers with single byte versions
  // TODO: This is probably not necessary since it's done at the beginning
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

  // store clean strings in accumulator
  oAccumulator.timeCheck_clean_source = source;
  oAccumulator.timeCheck_clean_target = target;
  return extract(source, target, oAccumulator);
}

function extract(source, target, oAccumulator) {
  // extract times
  const sourceRegEx = new RegExp('[0-2]?[0-9][:\uFF1A][0-5][0-9]', 'g');
  const targetRegEx = new RegExp('[0-2]?[0-9]:[0-5][0-9]', 'gi');

  // returns an array consisting of two arrays
  // [ [matches in source] , [matches in target] ]
  // the final argument must be true if using capturing groups in the RegEx
  const comparison = general.regexComparer(source, target, sourceRegEx, targetRegEx, false);

  return momentConversion(comparison, oAccumulator);
}

function momentConversion(comparison, oAccumulator) {
  // loop through the returned regex matches, and create an array of moments
  const sourceMoments = parseTimeStringsIntoMomentArr(comparison[0]).sort(momentSort);
  const targetMoments = parseTimeStringsIntoMomentArr(comparison[1]).sort(momentSort);

  return hikaku(sourceMoments, targetMoments, oAccumulator);
}

function hikaku(sourceMoments, targetMoments, oAccumulator) {
  const compare = compareMomentTimes(sourceMoments, targetMoments);
  let retval = null;

  // compare times
  if (!compare) {
    retval = `Times: Found <span class="text-time">${timeDisplayFormatting(sourceMoments)
    }</span> in source and <span class="text-time">${timeDisplayFormatting(targetMoments)}</span> in target.`;
  }

  return [retval, oAccumulator];
}

/* UTILITY FUNCTIONS */
function convertTimesToISO(string) {
  string = string.toLowerCase();

  // add 0 to single-digit hours
  if (string.indexOf(':') === 1) { string = `0${string}`; }

  // remove 'am'
  string = string.replace(/\uFF1A/gi, ':');
  string = string.replace(/12(:00)?am/gi, '00:00');
  string = string.replace(/12(:00)?pm/gi, '12:00'); // need to do this otherwise 12pm turns into 24:00 and the date shifts over
  string = string.replace(/am/gi, '');

  // add 12 hours and remove pm
  if (string.indexOf('pm') > 0) {
    const hours = Number(string.slice(0, 2)) + 12;
    const minutes = string.slice(3, 5);
    string = hours.toString() + minutes;
  }
  return `19850520T${string.replace(':', '')}`;
}

function momentSort(a, b) {
  // This sort checks ONLY the times it does not take into account dates

  const getMins = function (mObject) {
    return mObject.minutes() + (mObject.hours() * 60);
  };

  // leave array unsorted if either of the elements is not a moment
  if (!moment.isMoment(a) || !moment.isMoment(b)) { return 0; }

  if (getMins(a) < getMins(b)) {
    return -1; // put a in front of b
  } else if (getMins(b) < getMins(a)) {
    return 1; // put b in front of a
  }
  return 0; // leave them in the same position relative to one another
}

function timeDisplayFormatting(momentArr) {
  const displayArray = [];

  if (momentArr.length === 0) {
    displayArray.push('nothing');
  } else {
    for (let i = 0; i < momentArr.length; i++) {
      displayArray.push(momentArr[i].format('H:mm'));
    }
  }
  return displayArray.join(', ');
}

function compareMomentTimes(arr1, arr2, comparison) {
  // if 'date' is passed as a third argument, compare dates
  // else, compare times
  const format = comparison == 'date' ? 'MMM.D' : 'H:mm';

  if (arr1.length != arr2.length) return false;
  for (let i = 0; i < arr2.length; i++) {
    if (arr1[i].format(format) !== arr2[i].format(format)) return false;
  }
  return true;
}

function parseTimeStringsIntoMomentArr(stringsArr) {
  const outArr = [];

  for (let i = 0; i < stringsArr.length; i++) {
    let e = stringsArr[i];
    const x = convertTimesToISO(e); // moment requires ISO 8601 strings
    e = moment(x);
    // check that e is a valid moment to avoid errors when comparing
    if (e.isValid()) {
      outArr.push(e);
    } else {
      console.log('Invalid moment.');
    }
  }

  return outArr;
}

/* EXPORTS */
export {
  compareTimes,
};
