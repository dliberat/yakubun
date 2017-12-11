import * as checksLang from './libs/checks-language';
import * as checksBannedWords from './libs/bannedWords';
import ordinalNumbers from './libs/ordinalNumbers';
import * as checksDateTime from './libs/checks-datetime';
import * as checksNumbers from './libs/numbers';
import { compareTimes } from './libs/time';

const standardTests = [
  ['bannedWords', checksBannedWords.find],
  ['doubleSpaces', checksLang.findDoubleSpaces],
  ['zenkakuCharacters', checksLang.findJPCharacters],
  ['repeatedWords', checksLang.findRepeatedWords],
  ['ordinalNumbers', ordinalNumbers],
  ['bulletSpaces', checksLang.findBulletsWithNoSpaces],
  ['oxfordCommas', checksLang.detectOxfordCommas],
  ['numberedBullets', checksLang.trackNumberedBullets],
  ['tzDates', checksDateTime.compareDatesTz],
  ['dates', checksDateTime.compareDates],
  ['times', compareTimes],
  ['numbers', checksNumbers.compareNumbers],
];

function buildArr(standard, custom) {
  const tests = [];

  // check to make sure the standard tests have not been disabled
  for (let i = 0; i < standardTests.length; i += 1) {
    if (standard[standardTests[i][0]] !== false) {
      tests.push(standardTests[i]);
    }
  }

  // add in user-defined tests
  for (let i = 0; i < custom.length; i += 1) {
    if (typeof custom[i][0] === 'string' &&
        typeof custom[i][1] === 'function') tests.push(custom[i]);
  }

  return tests;
}

function getTests(checkOptions) {
  const standard = checkOptions.tests || {};
  const custom = checkOptions.customTests || {};

  if (standard.tzDates === true) {
    // disable regular dates check
    standard.dates = false;
  } else {
    // disable tzDates by default
    standard.tzDates = false;
  }

  return buildArr(standard, custom);
}

export default getTests;
