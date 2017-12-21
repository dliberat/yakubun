import * as checksLang from './libs/checks-language';
import findDoubleSpaces from './libs/doublespaces';
import findRepeatedWords from './libs/repeatedwords';
import detectOxfordCommas from './libs/oxfordcomma';
import quotePunctuation from './libs/quote-punctuation';
import find from './libs/bannedWords';
import ordinalNumbers from './libs/ordinalNumbers';
import compareDates from './libs/dates/comparedates';
import compareDatesTz from './libs/dates/comparedates-tz';
import compareNumbers from './libs/numbers';
import compareTimes from './libs/time';

const standardTests = [
  ['bannedWords', find],
  ['doubleSpaces', findDoubleSpaces],
  ['zenkakuCharacters', checksLang.findJPCharacters],
  ['quote-punct', quotePunctuation],
  ['repeatedWords', findRepeatedWords],
  ['ordinalNumbers', ordinalNumbers],
  ['bulletSpaces', checksLang.findBulletsWithNoSpaces],
  ['oxfordCommas', detectOxfordCommas],
  ['numberedBullets', checksLang.trackNumberedBullets],
  ['tzDates', compareDatesTz],
  ['dates', compareDates],
  ['times', compareTimes],
  ['numbers', compareNumbers],
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
