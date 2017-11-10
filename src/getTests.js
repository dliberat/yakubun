import * as checks_lang from './libs/checks-language.js';
import * as checksDateTime from './libs/checks-datetime.js';
import * as checks_numbers from './libs/numbers.js';
import { compareTimes } from './libs/time.js';

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

function getTests(checkOptions){
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

export default getTests;