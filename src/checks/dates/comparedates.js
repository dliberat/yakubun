/**
 * Date comparison module, without timezone conversions.
 * @module comparedates
 */

import { regexComparer } from 'yakubun-utils';
import ResultFactory from './ResultFactory';
import * as dates from './dates-common';
import convertToMomentArr from './convertToMomentArr';

const RF = new ResultFactory('dates');

function removeMatchedDates(momentArr, sideArr, sideArrTarget) {
  let slashFormat;

  const arrSource = []; // house all source dates that don't have matches in target
  const arrTarget = []; // all target dates w/ no match in source, or in side array

  // Slash dates that were found as slash strings, and confirmed to be dates
  const arrFoundInSideArr = [];
  const arrFoundInTargetSideArr = [];

  // convert the dates for readability
  const outFormatSourceArr = momentArr[0].map(x => x.format('MMM. D'));
  const outFormatTargetArr = momentArr[1].map(x => x.format('MMM. D'));

  // if a date is present in source but not in target, push it to arrsource
  for (let i = 0; i < outFormatSourceArr.length; i += 1) {
    const e = outFormatSourceArr[i];
    if (!outFormatTargetArr.includes(e)) {
      slashFormat = `${momentArr[0][i].format('M')}/${momentArr[0][i].format('D')}`;

      if (!sideArrTarget.includes(slashFormat)) {
        arrSource.push(e);
      } else {
        arrFoundInTargetSideArr.push(slashFormat);
      }
    }
  }

  // if a date is present in target but not in source,
  // check if it exists in sideArr, then push to arrTarget
  for (let i = 0; i < outFormatTargetArr.length; i += 1) {
    const e = outFormatTargetArr[i];
    if (!outFormatSourceArr.includes(e)) {
      slashFormat = `${momentArr[1][i].format('M')}/${momentArr[1][i].format('D')}`;
      if (!sideArr.includes(slashFormat)) {
        arrTarget.push(e);
      } else {
        arrFoundInSideArr.push(slashFormat);
      }
    }
  }

  return [arrSource, arrTarget, arrFoundInSideArr, arrFoundInTargetSideArr];
}

/**
 * Takes an array of slash dates and performs the appropriate replacements
 * to clean the source or target text.
 * @param {string[]} slashDates - Array of strings containing slash dates.
 * @param {string} text - Source or target text with all dates rendered
 * in the {2018-2-14} format.
 * @returns {string} A new clean text, with the slash dates also converted into
 * the {2018-2-14} format.
 * @private
 * @example
 * const cleanString = removeSideArrStrings(['2/11'], 'Log in on 2/11!');
 * console.log(cleanString);
 * // 'Log in on {2018-2-11}!'
 */
function replaceSlashDates(slashDates, text) {
  if (slashDates.length === 0) return text;

  const [slashDate, ...rest] = slashDates;
  const slash = slashDate.indexOf('/');
  const replacer = `{2018-${slashDate.slice(0, slash)}-${slashDate.slice(slash + 1)}}`;
  return replaceSlashDates(rest, text.replace(slashDate, replacer));
}

/**
 * Extracts dates in a specified format from two strings, and compares the results.
 * The dates must appear in the form {XXXX-XX-XX} or {XXXX-XX-XX HH:MM}. Months can be
 * single- or double-digits.
 * @param {string} cleanSource - Segment text with natural text dates converted into bracket format.
 * @param {string} cleanTarget - Segment text with natural text dates converted into bracket format.
 * @returns {*} The 0th element in the array is the regex matches from the source text.
 * The 1st element in the array is the regex matches from the target text.
 * The 2nd element in the array is a boolean indicating whether the two arrays are identical or not.
 */
function extractDates(cleanSource, cleanTarget) {
  const s = '{[0-9]{4}-[0-1]?[0-9]-[0-3]?[0-9]}|{[0-9]{4}-[0-1]?[0-9]-[0-3]?[0-9] [0-2]?[0-9]:[0-5][0-9][ap]?[m]?}';
  const re = new RegExp(s, 'gi');
  return regexComparer(cleanSource, cleanTarget, re, re, false);
}

/**
 * This function MUST modify the .timeCheck_clean_source and .timeCheck_clean_target properties,
 * of the accumulator object, because the time check function depends on them. At a bare
 * minimum, these properties must contain the original source and target text from the segment
 * being scanned.
 * If any dates were identified in the text, the function should convert them into a bracketed
 * format (e.g., {2018-7-30} or {2019-1-14 11:34}) and the text that it provides to the
 * accumulator should use this bracketed format in place of the original strings.
 * @param {string} source - Source text
 * @param {string} target - Target text
 * @param {*} options - CheckOptions object
 * @param {*} oAccumulator - Accumulator object
 */
function compareDates(source, target, options, oAccumulator) {
  /* Idiot check. Modifies accumulator. */
  if (!dates.verifyOptions(options)) return RF.invalid(source, target, oAccumulator);

  /* Clean the strings. i.e. Change dates into the {2017-9-21} format.
  This uses the date regexes provided in the options object. */
  const [cleanSource, cleanTarget] = dates
    .cleanStringsBeforeDateCheck(source, target, options);
  oAccumulator.timeCheck_clean_source = cleanSource;
  oAccumulator.timeCheck_clean_target = cleanTarget;

  // extract dates {2017-9-21} and {2017-9-21 12:00} and {2017-09-30 11:00am}
  let comparison = extractDates(cleanSource, cleanTarget);

  // return if the comparison matches exactly, since no further checking is necessary
  if (comparison[2]) return RF.ok(comparison[0], comparison[1]);

  // Turn all dates and times into two-digits so as to be ISO compliant
  comparison = dates.convertToTwoDigitDates(comparison);

  // convert to sorted moment array
  const momentArr = convertToMomentArr(comparison);

  // Extract strings that look like 9/21, because they might represent dates.
  const datesRegExp = new RegExp('[0-1]?[0-9]/[0-3]?[0-9]', 'gi');
  const potentialSlashDates = regexComparer(
    cleanSource,
    cleanTarget,
    datesRegExp,
    datesRegExp,
    false,
  );

  const res = removeMatchedDates(momentArr, potentialSlashDates[0], potentialSlashDates[1]);

  // remove any strings of the format '4/15' that were identified as actually representing dates
  oAccumulator
    .timeCheck_clean_source = replaceSlashDates(res[2], oAccumulator.timeCheck_clean_source);
  oAccumulator
    .timeCheck_clean_target = replaceSlashDates(res[3], oAccumulator.timeCheck_clean_target);

  return RF.decide(res, oAccumulator, momentArr[0].slice(), momentArr[1].slice());
}

export default compareDates;
