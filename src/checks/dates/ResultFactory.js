import { CheckResult } from 'yakubun-utils';
import formatForOutput from './formatForOutput';

/**
 * Collection of methods for generating different types of results.
 */
class ResultFactory {
  constructor(checkName = 'dates') {
    this.checkName = checkName;
  }
  /**
   * Generate a check result for use when the config that was passed
   * to the dates check was invalid.
   * Modifies the accumulator object, to ensure that the dates check
   * ALWAYS includes a value in the timeCheck_clean_source key.
   * @param {string} source - Source text
   * @param {string} target - Target text
   * @param {*} acc - Accumulator object
   */
  invalid(source, target, acc) {
    const result = new CheckResult(this.checkName);
    acc.timeCheck_clean_source = source;
    acc.timeCheck_clean_target = target;
    result.HTML = 'Could not check dates';
    result.plainText = result.HTML;
    return [result];
  }

  /**
   * Generate a check result for the case where there were no errors detected.
   * @param {string[]} sourceDates - Array of strings of dates found in source
   * @param {string[]} targetDates - Array of strings of dates found in target
   */
  ok(sourceDates, targetDates) {
    const result = new CheckResult(this.checkName);
    result.hasError = false;
    result.sourceDates = result.sourceDates.concat(sourceDates);
    result.targetDates = result.targetDates.concat(targetDates);
    return [result];
  }

  /**
   * Determine which kind of result is required (error or no error).
   * The formatForOutput function will need to be cleaned up and merged into this class.
   * The checkResult return value needs to include what days were detected in the text
   * in the sourceDates and targetDates properties. This is currently done in two parts!
   * The formatForOutput function adds in the dates that were found from "slash" strings
   * (i.e., strings in the text that look like "1/2" but have been determined to represent
   * dates as opposed to fractions), and then the decide function completes the process
   * by adding in any dates that were found in the original passes with the regex tests.
   * @param {*} res - Array of arrays indicating where different dates were identified.
   * @param {*} acc - Accumulator object
   * @param {string} sTz - Source time zone
   * @param {string} tTz - Target time zone
   * @param {Moment} sMoments - Moments identified in source text
   * @param {Moment} tMoments - Moments identified in target text
   */
  decide(res, acc, sMoments, tMoments, sTz = null, tTz = null) {
    const result = formatForOutput(res, acc, sTz, tTz);
    result.checkName = this.checkName;
    result.sourceDates = result.sourceDates.concat(sMoments);
    result.targetDates = result.targetDates.concat(tMoments);
    return [result];
  }
}

export default ResultFactory;
