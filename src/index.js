/* YAKUBUN 1.0.0 https://github.com/garroadran/yakubun Created by Dan Liberatori. Free for use and modification (but notify the author please!) */

import verify from './verifyOptions';
import getTests from './getTests';
import preprocess from './preprocess';

/**
 * Runs the battery of checks on a single segment
 * in the bilingual doc
 * @param source {string} - Source text
 * @param target {string} - Target text
 * @param checkOptions {object} - Config
 * @param oAccumulator {object} - Accumulates data over iterations
 * @returns An array of two elements. The first is an object
 * that contains the results of each of the checks. The second
 * is the updated state of the accumulator object.
 */
function singleSegmentChecks(source, target, checkOptions, oAccumulator) {
  let accumulator = oAccumulator;
  const oResults = {};

  // run each of the functions in oAccumulator.tests
  // store the results of that function in the oResults object
  // and keep any metadata they send back through the second parameter (b);
  accumulator.tests.forEach((test) => {
    const [testName, testFunc] = test;
    const [res, acc] = testFunc(source, target, checkOptions, accumulator);
    oResults[testName] = res;
    accumulator = acc;
  });

  return [oResults, accumulator];
}

function startScan(bilingualDoc, checkOptions, callback) {
  let oAccumulator = {
    currentSegment: 0,
    tests: getTests(checkOptions),
    totalSegmentsChecked: 0,
  };

  const segmentResults = {};

  // iterate over all the segments in the bilingualDoc
  // call singleSegmentChecks on each segment
  const segments = Object.keys(bilingualDoc);

  segments.forEach((segment) => {
    // track which segment we are currently on
    oAccumulator.currentSegment = segment;
    oAccumulator.totalSegmentsChecked += 1;

    const [res, acc] = singleSegmentChecks(
      bilingualDoc[segment].source,
      bilingualDoc[segment].target,
      checkOptions,
      oAccumulator,
    );

    // use the accumulator to carry over data between segments
    oAccumulator = acc;

    segmentResults[segment] = res;
    // legacy
    if (callback) {
      /* eslint-disable-next-line no-console */
      console.warn('Use of callbacks after individual tests has been deprecated.');
      callback(segment, res);
    }
  });

  return segmentResults;
}

function scan(bilingualDoc, checkOptions, callback) {
  // verify that all the options are OK
  const cleanCheckOptions = verify(checkOptions);
  // run basic character conversions
  const cleanBilingualDoc = preprocess(bilingualDoc);
  // return the oAccumulator value after scan is complete
  return startScan(cleanBilingualDoc, cleanCheckOptions, callback);
}

module.exports = scan;
