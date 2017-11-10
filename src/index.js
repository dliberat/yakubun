import * as checks_lang from './libs/checks-language.js';
import * as checksDateTime from './libs/checks-datetime.js';
import * as checks_numbers from './libs/numbers.js';
import { compareTimes } from './libs/time.js';

import verify from './verifyOptions.js';
import { preprocess } from './preprocess.js';
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

function getTests(checkOptions){
  var standardTests = [
    ['bannedWords', checks_lang.findBannedWords],
    ['doubleSpaces', checks_lang.findDoubleSpaces],
    ['zenkakuCharacters', checks_lang.findJPCharacters],
    ['repeatedWords', checks_lang.findRepeatedWords],
    ['bulletSpaces', checks_lang.findBulletsWithNoSpaces],
    ['oxfordCommas', checks_lang.detectOxfordCommas],
    ['numberedBullets', checks_lang.trackNumberedBullets],
    ['tzDates', checksDateTime.compareDatesTz],
    ['dates',checksDateTime.compareDates],
    ['times', compareTimes],
    ['numbers', checks_numbers.compareNumbers]
  ]

  var tests = []

  // check to make sure the standard tests have not been disabled
  if(checkOptions.hasOwnProperty('tests')){
    for(var i = 0; i < standardTests.length; i++){
      if(checkOptions.tests[standardTests[i][0]] !== false){
        tests.push(standardTests[i]);
      }
    }
  }
  
  // add in user-defined tests
  if(checkOptions.hasOwnProperty('customTests')){
    var customTests = checkOptions.customTests || [];
    for(var i = 0; i < customTests.length; i++){
      tests.push(customTests[i]);
    }
  }
  
  return tests;
}



export { 
  scan,
  regexComparer,
  regexReplaceAllFromArray,
  regexReturnAllMatches,
  compareArrays
}