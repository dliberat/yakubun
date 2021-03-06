/**
 * Contains the check function for tracking numbers such as
 * 1)
 * 2)
 * 3)
 * etc. If a number appears out of order, this check will raise a warning.
 * @module numberedBullets
 */

import { CheckResult, regexMatchesToArray } from 'yakubun-utils';

/**
 * Verifies whether the contents of an array are in sequential order.
 * @param {Number[]|string[]} arr - Array of numbers to check
 */
function checkSequentialArray(arr) {
  if (arr.length < 2) { return true; }

  // returns FALSE if the array is not sequentially numbered (1,2,3,4)
  for (let i = 1; i < arr.length; i += 1) {
    const a = Number(arr[i - 1]);
    const b = Number(arr[i]) - 1;
    if (a !== b) { return false; }
  }

  return true;
}

function trackNumberedBullets(source, target, checkOptions, oAccumulator) {
  const retval = new CheckResult('numbered-bullets');
  retval.HTML = 'Suspected error in numbered list (# sequence or punctuation).';
  retval.plainText = 'Suspected error in numbered list (# sequence or punctuation).';

  const periodArr = [];
  const bracketArr = [];

  // ensure that an object exists to keep track of the bullets
  if (!oAccumulator.trackNumberedBullets) {
    oAccumulator.trackNumberedBullets = { period: [], bracket: [] };
  }

  for (let i = 0; i < oAccumulator.trackNumberedBullets.period.length; i += 1) {
    periodArr.push(oAccumulator.trackNumberedBullets.period[i]);
  }
  for (let i = 0; i < oAccumulator.trackNumberedBullets.bracket.length; i += 1) {
    bracketArr.push(oAccumulator.trackNumberedBullets.bracket[i]);
  }

  // search for numbered bullet points
  const re = new RegExp('^(\\d)[.)]\\s|[^\\w]\\s(\\d)[.)]\\s', 'gm');
  const matchArr = regexMatchesToArray(target, re);
  // if there are no matches, return right away
  if (matchArr.length === 0) { return [retval, oAccumulator]; }

  let num;
  // else loop through the results and sort them into the appropriate arrays
  for (let i = 0; i < matchArr.length; i += 1) {
    num = matchArr[i][1] || matchArr[i][2];
    if (matchArr[i][0].indexOf(')') > -1) {
      oAccumulator.trackNumberedBullets.bracket.push(num);
    } else if (matchArr[i][0].indexOf('.') > -1) {
      oAccumulator.trackNumberedBullets.period.push(num);
    }
  }
  // search for errors. Returns FALSE if there is an error in the numerical sequence
  const ret1 = checkSequentialArray(oAccumulator.trackNumberedBullets.period);
  const ret2 = checkSequentialArray(oAccumulator.trackNumberedBullets.bracket);
  const numIsOne = num === 1 || num === '1';

  if (ret1 === false || ret2 === false) {
    retval.hasError = true;
    // if an error was detected, reset the relevant Accumulator array so that it
    // doesn't flag every single segment.
    if (ret1 === false) {
      // reset the retval if the list is 3 or more items long and
      // the match is a 1, since we most likely just started a new list.
      if (oAccumulator.trackNumberedBullets.period.length > 2 && numIsOne) {
        retval.hasError = false;
      }
      oAccumulator.trackNumberedBullets.period = [];
    } else {
      if (oAccumulator.trackNumberedBullets.bracket.length > 2 && numIsOne) {
        retval.hasError = false;
      }
      oAccumulator.trackNumberedBullets.bracket = [];
    }
  }
  return [retval, oAccumulator];
}

export default trackNumberedBullets;
