/* YAKUBUN 1.1.0 https://github.com/garroadran/yakubun Created by Dan Liberatori. Free for use and modification (but notify the author please!) */

import verify from './verifyOptions';
import getTests from './getTests';
import preprocess from './preprocess';
import {
  regexComparer,
  regexReplaceAllFromArray,
  regexReturnAllMatches,
  compareArrays,
} from './utilities/general';

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
  };

  // iterate over all the segments in the bilingualDoc
  // call singleSegmentChecks on each segment
  const segments = Object.keys(bilingualDoc);
  segments.forEach((segment) => {
    // track which segment we are currently on
    oAccumulator.currentSegment = segment;

    const [res, acc] = singleSegmentChecks(
      bilingualDoc[segment].source,
      bilingualDoc[segment].target,
      checkOptions,
      oAccumulator,
    );

    // use the accumulator to carry over data between segments
    oAccumulator = acc;

    /* TO DO:
       Results should be stored in an object that keeps track
       of the errors that were found. That way, it should be possible
       to implement an 'ignore error' function by keeping track of
       the results of the previous scan. If an identical result
       exists that has an 'ignore' flag, then it can be ignored.
    */

    if (callback) {
      callback(segment, res);
    }
  });

  return oAccumulator;
}

function scan(bilingualDoc, checkOptions, callback) {
  // verify that all the options are OK
  const cleanCheckOptions = verify(checkOptions);
  // run basic character conversions
  const cleanBilingualDoc = preprocess(bilingualDoc);
  // return the oAccumulator value after scan is complete
  return startScan(cleanBilingualDoc, cleanCheckOptions, callback);
}

export {
  scan,
  regexComparer,
  regexReplaceAllFromArray,
  regexReturnAllMatches,
  compareArrays,
};
