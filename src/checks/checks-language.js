import { CheckResult, regexMatchesToArray } from 'yakubun-utils';

/** Find double byte brackets, colons, or exclamation marks
 * Additional JP characters should probably be added here
 */
function findJPCharacters(source, target, checkOptions, oAccumulator) {
  const jpChars = [
    '\uFF08', // （
    '\uFF09', // ）
    '\uFF1A', // ：
    '\uFF01', // !
    '\u3000', // space
    '\uFF0E', // ．
  ];

  const foundChars = [];

  for (let i = 0; i < jpChars.length; i += 1) {
    if (target.indexOf(jpChars[i]) > -1) {
      const x = jpChars[i] === '\u3000' ? '[Space]' : jpChars[i];
      foundChars.push(x);
    }
  }

  const checkResult = new CheckResult('jp-characters');

  if (foundChars.length > 0) {
    checkResult.hasError = true;
    checkResult.HTML = `Double-byte characters: <span class="text-alert">${foundChars.join(' ')}</span>`;
    checkResult.plainText = `Double-byte characters: ${foundChars.join(' ')}`;
    checkResult.description = 'Remove all double-byte brackets, exclamation marks, and spaces.';
  }

  return [checkResult, oAccumulator];
}

function findBulletsWithNoSpaces(source, target, checkOptions, oAccumulator) {
  let test = false;
  let reg;

  if (checkOptions.customBullets) {
    const bullets = checkOptions.customBullets;
    reg = new RegExp(`^[${bullets}][a-zA-Z0-9\\(]|\\\\n[${bullets}][a-zA-Z0-9\\(]`, 'gm');
    if (reg.test(target)) {
      test = true;
    }
  }

  reg = new RegExp('^[-\\u25A0\\u25BC\\u30FB][a-zA-Z0-9\\(]|\\\\n[-\\u25A0\\u25BC\\u30FB][a-zA-Z0-9\\(]', 'gm');
  if (reg.test(target)) {
    test = true;
  }

  const checkResult = new CheckResult('bullet-point-spaces');
  if (test) {
    checkResult.hasError = true;
    checkResult.HTML = 'Make sure there are spaces after bullet points.';
    checkResult.plainText = 'Make sure there are spaces after bullet points.';
    checkResult.description = 'Adding a space after bullets makes text look cleaner.';
  }
  return [checkResult, oAccumulator];
}

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
  if (matchArr.length === 0) { return [null, oAccumulator]; }

  let num;
  // else loop through the results and sort them into the appropriate arrays
  for (let i = 0; i < matchArr.length; i += 1) {
    num = matchArr[i][1] || matchArr[i][2];
    if (matchArr[i][0].indexOf(')') > -1) {
      oAccumulator.trackNumberedBullets.bracket.push(num);
      // oAccumulator.log(`Found a numbered bullet point at segment ${Number(oAccumulator.currentSegment) + 1}. [${num})]`);
    } else if (matchArr[i][0].indexOf('.') > -1) {
      oAccumulator.trackNumberedBullets.period.push(num);
      // oAccumulator.log(`Found a numbered bullet point at segment ${Number(oAccumulator.currentSegment) + 1}. [${num}.]`);
    }
  }
  // search for errors. Returns FALSE if there is an error in the numerical sequence
  const ret1 = checkSequentialArray(oAccumulator.trackNumberedBullets.period);
  const ret2 = checkSequentialArray(oAccumulator.trackNumberedBullets.bracket);
  const numIsOne = num === 1 || num === '1';

  let retval = null;

  if (ret1 === false || ret2 === false) {
    retval = 'Suspected error in numbered list (# sequence or punctuation).';
    // if an error was detected, reset the relevant Accumulator array so that it
    // doesn't flag every single segment.
    if (ret1 === false) {
      // reset the retval to null if the list is 3 or more items long and
      // the match is a 1, since we most likely just started a new list.
      if (oAccumulator.trackNumberedBullets.period.length > 2 && numIsOne) {
        retval = null;
      }
      oAccumulator.trackNumberedBullets.period = [];
    } else {
      if (oAccumulator.trackNumberedBullets.bracket.length > 2 && numIsOne) {
        retval = null;
      }
      oAccumulator.trackNumberedBullets.bracket = [];
    }
  }
  return [retval, oAccumulator];
}

export {
  findJPCharacters,
  findBulletsWithNoSpaces,
  trackNumberedBullets,
};
