import * as general from '../lib-generaluse';
import * as dates from './dates-common';
import convertToMomentArr from './convertToMomentArr';
import formatForOutput from './formatForOutput';

function removeMatchedDates(momentArr, sideArr = [], sideArrTarget = []) {
  let slashFormat;

  const arrSource = []; // house all source dates that don't have matches in target
  const arrTarget = []; // all target dates w/ no match in source, or in side array
  const arrFoundInSideArr = [];
  const arrFoundInTargetSideArr = [];

  // convert the dates into a Sep. 21 format for readability
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

function removeSideArrStrings(sideArrStrings, cleanSource) {
  let cleanSourceString = cleanSource;
  // loop through the dates that were identified as being dates in the
  // side string
  for (let i = 0; i < sideArrStrings.length; i += 1) {
    // build a {2017-9-21} string
    const slash = sideArrStrings[i].indexOf('/');
    const replacer = `{2017-${sideArrStrings[i].slice(0, slash)}-${sideArrStrings[i].slice(slash + 1)}}`;

    // perform the replace
    cleanSourceString = cleanSourceString.replace(sideArrStrings[i], replacer);
  }
  return cleanSourceString;
}

function compareDates(source, target, checkOptions, accumulator) {
  const oAccumulator = accumulator;
  let retval = null;

  // ensure that all the necessary options are in place
  // always return clean strings, even if nothing has changed
  if (!dates.verifyOptions(checkOptions)) {
    oAccumulator.timeCheck_clean_source = source;
    oAccumulator.timeCheck_clean_target = target;
    general.metalogger('Invalid checkOptions. Could not compare dates');
    return [null, oAccumulator];
  }

  // source goes in [0], target goes in [1]
  const [cleanSource, cleanTarget] = dates
    .cleanStringsBeforeDateCheck(source, target, checkOptions);
  oAccumulator.timeCheck_clean_source = cleanSource;
  oAccumulator.timeCheck_clean_target = cleanTarget;

  // extract dates {2017-9-21} and {2017-9-21 12:00} and {2017-09-30 11:00am}
  let rString = '{[0-9]{4}-[0-1]?[0-9]-[0-3]?[0-9]}';
  rString += '|{[0-9]{4}-[0-1]?[0-9]-[0-3]?[0-9] [0-2]?[0-9]:[0-5][0-9][ap]?[m]?}';
  let datesRegExp = new RegExp(rString, 'gi');
  let comparison = general.regexComparer(cleanSource, cleanTarget, datesRegExp, datesRegExp, false);
  let compare = general.compareArrays(comparison[0], comparison[1]);

  // return if the comparison matches exactly, since no further checking is necessary
  if (compare) {
    return [null, oAccumulator];
  }

  // extract dates with 9/21 format and leave them in a side array
  datesRegExp = new RegExp('[0-1]?[0-9]/[0-3]?[0-9]', 'gi');
  const potentialSlashDates = general
    .regexComparer(cleanSource, cleanTarget, datesRegExp, datesRegExp, false);

  // Turn all dates and times into two-digits so as to be ISO compliant
  comparison = dates.convertToTwoDigitDates(comparison);

  // convert to sorted moment array
  const momentArr = convertToMomentArr(comparison);
  compare = general.compareArrays(momentArr[0], momentArr[1]);

  // compare moment arrays. If they don't match, search in the side array
  if (!compare) {
    const res = removeMatchedDates(momentArr, potentialSlashDates[0], potentialSlashDates[1]);

    // remove any dates that were identified in the sideArr
    if (res) {
      oAccumulator
        .timeCheck_clean_source = removeSideArrStrings(res[2], oAccumulator.timeCheck_clean_source);
      oAccumulator
        .timeCheck_clean_target = removeSideArrStrings(res[3], oAccumulator.timeCheck_clean_target);
    }

    retval = formatForOutput(res, oAccumulator, null, null);
  }

  return [retval, oAccumulator];
}

export default compareDates;
