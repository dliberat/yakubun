/**
 * Date comparison module, including timezone conversions.
 * @module comparedates-tz
 */

import { CheckResult, regexComparer } from 'yakubun-utils';
import * as dates from './dates-common';
import convertToMomentArr from './convertToMomentArr';
import formatForOutput from './formatForOutput';

function compareDatesTz(source, target, checkOptions, oAccumulator) {
  if (!dates.verifyOptions(checkOptions)) {
    oAccumulator.timeCheck_clean_source = source;
    oAccumulator.timeCheck_clean_target = target;
    const retval = new CheckResult('dates-tz');
    retval.HTML = 'Could not check dates';
    retval.plainText = retval.HTML;
    return [retval, oAccumulator];
  }

  // check whether time zones have been provided
  const sourceTZ = checkOptions.sourceTimeZone || 'Asia/Tokyo';
  const targetTZ = checkOptions.targetTimeZone || 'Asia/Tokyo';

  const [cleanSource, cleanTarget] = dates
    .cleanStringsBeforeDateCheck(source, target, checkOptions);
  oAccumulator.timeCheck_clean_source = cleanSource;
  oAccumulator.timeCheck_clean_target = cleanTarget;

  // extract dates in only this format {2017-9-21 12:00}
  const datesRegExp = new RegExp('{[0-9]{4}-[0-1]?[0-9]-[0-3]?[0-9] [0-2]?[0-9]:[0-5][0-9]}', 'gi');
  let comparison = regexComparer(cleanSource, cleanTarget, datesRegExp, datesRegExp, false);

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
  const retval = formatForOutput(momentArr, oAccumulator, sourceTZ, targetTZ);

  retval.checkName = 'dates-tz';
  retval.hasTargetDate = datesRegExp.test(cleanTarget);

  return [retval, oAccumulator];
}

export default compareDatesTz;
