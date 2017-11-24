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
];

function getTests(checkOptions){

    var standard = checkOptions.tests || {};
    var custom = checkOptions.customTests || {};
    
    if(standard.tzDates === true){
        // disable regular dates check
        standard.dates = false;
    } else {
        // disable tzDates by default
        standard.tzDates = false;
    }

    return buildArr(standard, custom);
}

function buildArr(standard, custom){
    
    var tests = []
 
    // check to make sure the standard tests have not been disabled
    for(var i = 0; i < standardTests.length; i++){
        if(standard[standardTests[i][0]] !== false){
            tests.push(standardTests[i]);
            }
        }
  
    // add in user-defined tests
    for(var i = 0; i < custom.length; i++){
        if(typeof custom[i][0] == 'string' &&
        typeof custom[i][1] == 'function') tests.push(custom[i]);
    }
    
    return tests;   
}

export default getTests;