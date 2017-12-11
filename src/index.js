/* YAKUBUN 1.0.0 https://github.com/garroadran/yakubun Created by Dan Liberatori. Free for use and modification (but notify the author please!) */

import verify from './verifyOptions';
import getTests from './getTests';
import preprocess from './preprocess';
import {
  regexComparer,
  regexReplaceAllFromArray,
  regexReturnAllMatches,
  compareArrays,
} from './libs/lib-generaluse';

function singleSegmentChecks(source, target, checkOptions, oAccumulator) {
  const oResults = {};

  // run each of the functions in oAccumulator
  // store the results of that function in the oResults object
  // and keep any metadata they send back through the second parameter in oAccumulator
  for (let i = 0; i < oAccumulator.tests.length; i += 1) {
    const testName = oAccumulator.tests[i][0];
    const test = oAccumulator.tests[i][1];
    const res = test(source, target, checkOptions, oAccumulator);
    oResults[testName] = res[0];
    oAccumulator = res[1];
  }
  return [oResults, oAccumulator];
}

function startScan(bilingualDoc, checkOptions, callback) {
  let oAccumulator = {
    segmentNumber: 0,
    tests: getTests(checkOptions),
  };

  // loop through all the segments in the bilingual Doc
  for (const property in bilingualDoc) {
    if (bilingualDoc.hasOwnProperty(property)) {
      oAccumulator.currentSegment = property;
      // run all the tests on the given segment, and send the results to be displayed
      const results = singleSegmentChecks(
        bilingualDoc[property].source,
        bilingualDoc[property].target,
        checkOptions, oAccumulator);
      oAccumulator = results[1];

      if (callback) {
        callback(property, results[0]);
      }
    }
  }

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
