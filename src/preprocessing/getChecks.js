import * as checksLang from '../checks/checks-language';
import trackNumberedBullets from '../checks/numberedBullets';
import findDoubleSpaces from '../checks/doublespaces';
import findRepeatedWords from '../checks/repeatedwords';
import detectOxfordCommas from '../checks/oxfordcomma';
import quotePunctuation from '../checks/quote-punctuation';
import find from '../checks/bannedWords';
import ordinalNumbers from '../checks/ordinalNumbers';
import compareDates from '../checks/dates/comparedates';
import compareDatesTz from '../checks/dates/comparedates-tz';
import compareNumbers from '../checks/numbers/numbers';
import compareTimes from '../checks/time/time';

const standardChecks = [
  ['bannedWords', find],
  ['doubleSpaces', findDoubleSpaces],
  ['zenkakuCharacters', checksLang.findJPCharacters],
  ['quote-punct', quotePunctuation],
  ['repeatedWords', findRepeatedWords],
  ['ordinalNumbers', ordinalNumbers],
  ['bulletSpaces', checksLang.findBulletsWithNoSpaces],
  ['oxfordCommas', detectOxfordCommas],
  ['numberedBullets', trackNumberedBullets],
  ['tzDates', compareDatesTz],
  ['dates', compareDates],
  ['times', compareTimes],
  ['numbers', compareNumbers],
];

function buildArr(standard, custom) {
  const checks = [];

  // check to make sure the standard checks have not been disabled
  for (let i = 0; i < standardChecks.length; i += 1) {
    if (standard[standardChecks[i][0]] !== false) {
      checks.push(standardChecks[i]);
    }
  }

  // add in user-defined checks
  for (let i = 0; i < custom.length; i += 1) {
    if (typeof custom[i][0] !== 'string' || typeof custom[i][1] !== 'function') {
      throw new Error('Invalid custom check.');
    }

    checks.push(custom[i]);
  }

  return checks;
}

function getChecks(checkOptions) {
  const standard = checkOptions.checks || {};
  const custom = checkOptions.customChecks || {};

  if (standard.tzDates === true) {
    // disable regular dates check
    standard.dates = false;
  } else {
    // disable tzDates by default
    standard.tzDates = false;
  }

  return buildArr(standard, custom);
}

export default getChecks;
