import * as general from './lib-generaluse.js';

function findDoubleSpaces(source, target, checkOptions, oAccumulator) {
  let retval = null;
  const reg = new RegExp(' {2}', 'g');
  if (reg.test(target)) {
    retval = 'Check for double spaces.';
  }

  return [retval, oAccumulator];
}

function findJPCharacters(source, target, checkOptions, oAccumulator) {
  // finds double-byte brackets, colons, or spaces.
  const jpChars = [
    '\uFF08', // （
    '\uFF09', // ）
    '\uFF1A', // ：
    '\uFF01', // !
    '\u3000', // space
  ];

  const foundChars = [];

  for (let i = 0; i < jpChars.length; i++) {
    if (target.indexOf(jpChars[i]) > -1) {
      jpChars[i] === '\u3000' ? foundChars.push('[Space]') : foundChars.push(jpChars[i]);
    }
  }

  let retval = null;

  if (foundChars.length > 0) { retval = `Double-byte characters: <span class="text-alert">${foundChars.join(' ')}</span>`; }

  return [retval, oAccumulator];
}

function findRepeatedWords(source, target, checkOptions, oAccumulator) {
  const exceptions = ['tsum', 'bye', 'hee', 'heh', 'ha', 'woo', 'boo']; // words that are allowed to repeat

  target = target.toLowerCase();

  // split into an array and filter only if there are multiple consecutive elements
  const stringArr = target.split(' ').filter((element, index, arr) => element == arr[index - 1] && element !== '' && exceptions.indexOf(element) == -1);

  let retval = null;
  if (stringArr.length > 0) { retval = `Repeated words: ${stringArr.join(', ')}`; }

  return [retval, oAccumulator];
}

function findBulletsWithNoSpaces(source, target, checkOptions, oAccumulator) {
  let retval = null;
  let reg;

  if (checkOptions.customBullets) {
    const bullets = checkOptions.customBullets;
    reg = new RegExp(`^[${bullets}][a-zA-Z0-9\\(]|\\\\n[${bullets}][a-zA-Z0-9\\(]`, 'gm');
    if (reg.test(target)) {
      retval = 'Make sure there are spaces after bullet points.';
    }
  }


  reg = new RegExp('^[-\\u25A0\\u25BC\\u30FB][a-zA-Z0-9\\(]|\\\\n[-\\u25A0\\u25BC\\u30FB][a-zA-Z0-9\\(]', 'gm');
  if (reg.test(target)) {
    retval = 'Make sure there are spaces after bullet points.';
  }

  return [retval, oAccumulator];
}

function detectOxfordCommas(source, target, checkOptions, oAccumulator) {
  let retval = null;
  let re,
    msg,
    requireOxfordComma;

  if (checkOptions.requireOxfordComma === false) {
    requireOxfordComma = false;
  } else {
    requireOxfordComma = true;
  }

  if (requireOxfordComma) {
    re = new RegExp('([a-z]+)((?:,\\s[a-z]+)+)\\s+(and|or|and\\/or)\\s+([a-z]+)', 'gi');
    msg = 'Possibly missing an Oxford comma.';
  } else {
    re = new RegExp('([a-z]+)((?:,\\s[a-z]+)+),\\s+(and|or|and\\/or)\\s+([a-z]+)', 'gi');
    msg = 'Oxford comma detected.';
  }

  if (re.test(target)) { retval = msg; }
  return [retval, oAccumulator];
}

function trackNumberedBullets(source, target, checkOptions, oAccumulator) {
  const checkSequentialArray = function (arr) {
    if (arr.length < 2) { return true; }
    // returns FALSE if the array is not sequentially numbered (1,2,3,4)
    for (let i = 1; i < arr.length; i++) {
      const a = Number(arr[i - 1]);
      const b = Number(arr[i]) - 1;
      if (a !== b) { return false; }
    }
    return true;
  };

  // ensure that an object exists to keep track of the bullets
  if (!oAccumulator.trackNumberedBullets) {
    oAccumulator.trackNumberedBullets = { period: [], bracket: [] };
  }

  const periodArr = [];
  const bracketArr = [];

  for (var i = 0; i < oAccumulator.trackNumberedBullets.period.length; i++) {
    periodArr.push(oAccumulator.trackNumberedBullets.period[i]);
  }
  for (var i = 0; i < oAccumulator.trackNumberedBullets.bracket.length; i++) {
    bracketArr.push(oAccumulator.trackNumberedBullets.bracket[i]);
  }

  // search for numbered bullet points
  const re = new RegExp('^(\\d)[.)]\\s|[^\\w]\\s(\\d)[.)]\\s', 'gm');
  const matchArr = general.regexReturnAllMatches(target, re);
  // if there are no matches, return right away
  if (matchArr.length === 0) { return [null, oAccumulator]; }

  let num;
  // else loop through the results and sort them into the appropriate arrays
  for (var i = 0; i < matchArr.length; i++) {
    num = matchArr[i][1] || matchArr[i][2];
    if (matchArr[i][0].indexOf(')') > -1) {
      oAccumulator.trackNumberedBullets.bracket.push(num);
      general.metalogger(`Found a numbered bullet point at segment ${Number(oAccumulator.currentSegment) + 1}. [${num})]`);
    } else if (matchArr[i][0].indexOf('.') > -1) {
      oAccumulator.trackNumberedBullets.period.push(num);
      general.metalogger(`Found a numbered bullet point at segment ${Number(oAccumulator.currentSegment) + 1}. [${num}.]`);
    }
  }
  // search for errors. Returns FALSE if there is an error in the numerical sequence
  const ret1 = checkSequentialArray(oAccumulator.trackNumberedBullets.period);
  const ret2 = checkSequentialArray(oAccumulator.trackNumberedBullets.bracket);
  let retval = null;

  if (ret1 === false || ret2 === false) {
    retval = 'Suspected error in numbered list (# sequence or punctuation).';
    // if an error was detected, reset the relevant Accumulator array so that it
    // doesn't flag every single segment.
    if (ret1 === false) {
      // reset the retval to null if the list is 3 or more items long and
      // the match is a 1, since we most likely just started a new list.
      if (oAccumulator.trackNumberedBullets.period.length > 2 && num == 1) {
        retval = null;
      }
      oAccumulator.trackNumberedBullets.period = [];
    } else {
      if (oAccumulator.trackNumberedBullets.bracket.length > 2 && num == 1) {
        retval = null;
      }
      oAccumulator.trackNumberedBullets.bracket = [];
    }
  }
  return [retval, oAccumulator];
}

export {
  findDoubleSpaces,
  findJPCharacters,
  findRepeatedWords,
  findBulletsWithNoSpaces,
  detectOxfordCommas,
  trackNumberedBullets,
};
