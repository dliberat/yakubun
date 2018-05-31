/**
  * @module runChecks
  * @description
  * This module iterates over the segments in the bilingualDoc, and executes each
  * of the checks for every segment. It is expected that the checkOptions that
  * are passed to this module are structurally valid, as the checks themselves
  * are not guaranteed to behave properly or to raise informative error messages
  * otherwise.
  *
  * Some checks may emit log messages in case of errors, or simply to provide
  * information about the behavior of the check itself. These are fed to the
  * accumulator object.
 */

import getChecks from './preprocessing/getChecks';

/**
 * Run a battery of checks on a single segment.
 * The list of checks to run is retrieved from <tt>oAccumulator.checks</tt>.
 * @param source {string} - Source text
 * @param target {string} - Target text
 * @param checkOptions {object} - Config
 * @param oAccumulator {object} - Accumulates data over iterations
 * @returns An array of two elements. The first is an object
 * that contains the results of each of the checks. The second
 * is the updated state of the accumulator object.
 * @private
 */
function singleSegmentChecks(source, target, checkOptions, oAccumulator) {
  let accumulator = oAccumulator;
  const oResults = {};

  // run each of the functions in oAccumulator.checks
  // store the results of that function in the oResults object
  // and keep any metadata they send back through the second parameter (b);
  accumulator.checks.forEach((check) => {
    const [checkName, checkFunc] = check;
    const [res, acc] = checkFunc(source, target, checkOptions, accumulator);
    oResults[checkName] = res;
    accumulator = acc;
  });

  return [oResults, accumulator];
}

/**
 * Iterate over the keys in the bilingual document and execute all
 * the check functions against each segment. Accumulate and return the
 * results of all the checks.
 * @param {Object} bilingualDoc - Object containing translation segments
 * @param {Object} checkOptions - Object containing configuration options
 * @return {Object} Object containing the results of all checks for each segment,
 * plus a record of the logs that were generated during the checks.
 *
 * @alias module:runChecks
 *
 * @example
 * const bilingualDoc = {
 *   0: {
 *     source: '犬',
 *     target: 'dog'
 *   },
 *   1: {
 *     source: '1月2日',
 *     target: 'January 3'
 *   }
 * }
 *
 * // Using the default options is not recommended, as it will result in only
 * // a few checks being able to perform any real work. At the bare minimum,
 * // you should try to pass in a dateFormats object in with your options so
 * // that the dates and numbers checks can work efficiently without raising
 * // too many false positives.
 * const options = {}
 *
 * const results = startScan(bilingualDoc, options);
 * console.log(results);
 *
 * @example
 * // returned value
 * {
 *  0: {
 *    bannedwords: { hasError: false, HTML: '', plainText: '' },
 *    oxfordComma: { hasError: false, HTML: '', plainText: '' },
 *    dates: { hasError: false, HTML: '', plainText: '' },
 *    ...
 *   },
 *  1: {
 *    bannedwords: { hasError: false, HTML: '', plainText: '' },
 *    oxfordComma: { hasError: false, HTML: '', plainText: '' },
 *    dates: { hasError: true, HTML: 'Found <span class="error">Jan 2</span> in source and ...' },
 *    ...
 *  }
 * }
 */
function startScan(bilingualDoc, checkOptions) {
  const oAccumulator = {
    currentSegment: 0,
    checks: getChecks(checkOptions),
    totalSegmentsChecked: 0,
  };

  const output = {};

  // iterate over all the segments in the bilingualDoc
  // call singleSegmentChecks on each segment
  const segments = Object.keys(bilingualDoc);

  segments.forEach((segment) => {
    // track which segment we are currently on
    oAccumulator.currentSegment = segment;
    oAccumulator.totalSegmentsChecked += 1;

    const [res] = singleSegmentChecks(
      bilingualDoc[segment].source,
      bilingualDoc[segment].target,
      checkOptions,
      oAccumulator,
    );

    output[segment] = res;
  });

  return output;
}

export default startScan;
