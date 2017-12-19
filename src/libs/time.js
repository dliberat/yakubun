import * as general from './lib-generaluse';
import convertTimesToISO from '../utilities/convertTimesToISO';

const moment = require('moment-timezone');
let oAccumulator;
let source;
let target;

function compareTimes(src, tgt, checkOptions, acc) {
  
  source = src;
  target = tgt;
  oAccumulator = acc;
  
  // check to make sure oAccumulator is an object
  if (typeof (oAccumulator) === 'object' && oAccumulator !== null) {
    // use the clean strings, if they exist
    const keys = Object.keys(oAccumulator);
    if (keys.indexOf('timeCheck_clean_source') > -1) source = oAccumulator.timeCheck_clean_source;
    if (keys.indexOf('timeCheck_clean_target') > -1) target = oAccumulator.timeCheck_clean_target;
  } else {
    // need to create this because this module pushes
    // clean strings to the accumulator
    oAccumulator = {};
  }

  // clean up the strings
  return clean(source, target, oAccumulator);
}

function clean() {
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

function extract() {
  // extract times
  const sourceRegEx = new RegExp('[0-2]?[0-9][:\uFF1A][0-5][0-9]', 'g');
  const targetRegEx = new RegExp('[0-2]?[0-9]:[0-5][0-9]', 'gi');

  // returns an array consisting of two arrays
  // [ [matches in source] , [matches in target] ]
  // the final argument must be true if using capturing groups in the RegEx
  const comparison = general.regexComparer(source, target, sourceRegEx, targetRegEx, false);

  return momentConversion(comparison);
}

function momentConversion(comparison) {
  // loop through the returned regex matches, and create an array of moments
  const sourceMoments = parseTimeStringsIntoMomentArr(comparison[0]).sort(momentSort);
  const targetMoments = parseTimeStringsIntoMomentArr(comparison[1]).sort(momentSort);

  return hikaku(sourceMoments, targetMoments);
}

function hikaku(sourceMoments, targetMoments) {
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
    momentArr.forEach((element) => {
      displayArray.push(element.format('H:mm'));
    });
  }
  return displayArray.join(', ');
}

/**
 * Compare two arrays of moments and determine whether or not
 * they are identical.
 * @param {array} arr1 - An array of moments
 * @param {array} arr2 - An array of moments
 * @param {string} comparison - If comparison === 'date', this function compares dates, not times.
 **/
function compareMomentTimes(arr1, arr2, comparison) {

  // if 'date' is passed as a third argument, compare dates
  // else, compare times
  const format = comparison === 'date' ? 'MMM.D' : 'H:mm';
  
  // assume the arrays match
  let arraysMatch = true;

  // if their lengths are different, return false
  if (arr1.length !== arr2.length) return false;
  
  // otherwise, compare each element
  arr2.forEach((element, index) => {
    if (arr1[index].format(format) !== element.format(format)) arraysMatch = false;
  });
  
  return arraysMatch;
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
      console.error('Invalid moment.');
    }
  }

  return outArr;
}

/* EXPORTS */
export {
  compareTimes,
};
