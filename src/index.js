/*YAKUBUN 1.0.0 https://github.com/garroadran/yakubun Created by Dan Liberatori. Free for use and modification (but notify the author please!)*/

import verify from './verifyOptions.js';
import getTests from './getTests.js';
import preprocess from './preprocess.js';
import { 
  regexComparer,
  regexReplaceAllFromArray,
  regexReturnAllMatches,
  compareArrays
} from './libs/lib-generaluse.js';


function scan(bilingualDoc, checkOptions, callback){
  // verify that all the options are OK
  checkOptions = verify(checkOptions);
  // run basic character conversions
  bilingualDoc = preprocess(bilingualDoc);
  // return the oAccumulator value after scan is complete
  return startScan(bilingualDoc, checkOptions, callback);
}

function startScan(bilingualDoc, checkOptions, callback)
{
  var oAccumulator = {
    segmentNumber: 0,
    tests: getTests(checkOptions)
  };

  // loop through all the segments in the bilingual Doc
  for(var property in bilingualDoc){
    if(bilingualDoc.hasOwnProperty(property))
    {
      oAccumulator.currentSegment = property;
      // run all the tests on the given segment, and send the results to be displayed
      var results = singleSegmentChecks(bilingualDoc[property]['source'],bilingualDoc[property]['target'], checkOptions, oAccumulator);
      oAccumulator = results[1];

      if(callback){
      callback(property, results[0]);
      }
    }
  }

  return oAccumulator;
}

function singleSegmentChecks(source, target, checkOptions, oAccumulator)
{
  var oResults = {}

  // run each of the functions in oAccumulator
  // store the results of that function in the oResults object
  // and keep any metadata they send back through the second parameter in oAccumulator
  for(var i =0; i<oAccumulator.tests.length; i++){
    var testName = oAccumulator.tests[i][0];
    var test = oAccumulator.tests[i][1];
    var res = test(source, target, checkOptions, oAccumulator);
    oResults[testName] = res[0];
    oAccumulator = res[1];
  }
  return [oResults, oAccumulator];
}

export { 
  scan,
  regexComparer,
  regexReplaceAllFromArray,
  regexReturnAllMatches,
  compareArrays
}