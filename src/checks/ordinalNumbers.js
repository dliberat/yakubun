/*
Check ordinal numbers to ensure that they have the proper trailing letters
*/

import indicator from 'ordinal/indicator';
import { CheckResult, regexMatchesToArray } from 'yakubun-utils';

let accumulator;

function returnError(arr) {
  const checkResult = new CheckResult('ordinal-numbers');
  checkResult.hasError = true;
  checkResult.HTML = `Check ordinal numbers: ${arr.join(', ')}`;
  checkResult.plainText = `Check ordinal numbers: ${arr.join(', ')}`;
  checkResult.description = 'Verify spelling of numbers such as "1st", "2nd" and "3rd."';
  return [checkResult, accumulator];
}

function returnNull() {
  const checkResult = new CheckResult('ordinal-numbers');
  return [checkResult, accumulator];
}

function hasBadSuffix(arr) {
  // don't flag AM and PM
  if (arr[2].toLowerCase() === 'am' || arr[2].toLowerCase() === 'pm') {
    return false;
  }

  const correctSuffix = indicator(arr[1]);
  if (correctSuffix !== arr[2].trim()) {
    return true;
  }

  return false;
}

function compareWithRules(arr) {
  const suspiciousNumbers = [];

  arr.forEach((subArr) => {
    if (hasBadSuffix(subArr)) {
      suspiciousNumbers.push(subArr[0].trim());
    }
  });

  if (suspiciousNumbers.length > 0) {
    return returnError(suspiciousNumbers);
  }

  return returnNull();
}

function runRegex(target) {
  // regex to search for ordinal numbers
  const re = new RegExp('([0-9]+)([a-z][a-z])(?:\\W|$)', 'gi');

  const arr = regexMatchesToArray(target, re);
  /* each arr contains
    [0]: full match (1st, 2nd, etc.);
    [1]: numeral (1, 2, etc.)
    [2]: suffix (st, nd, etc.)
    */

  if (arr.length > 0) {
    return compareWithRules(arr);
  }

  return returnNull();
}

function ordinalNumbers(source, target, checkOptions = {}, oAccumulator) {
  accumulator = oAccumulator;

  if (checkOptions.targetLang !== 'en') {
    accumulator.log('Ordinal number checks are only supported for English.');
    return returnNull();
  }

  return runRegex(target);
}

export default ordinalNumbers;
