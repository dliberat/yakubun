import * as general from './lib-generaluse';

function scanForBannedWords(str, wordsArr, caseSensitive = false, accumulatorArr) {
  // takes an array of banned words and returns an array
  // of which of those were found in the string provided

  // set to global match and non-case senstive matching by default
  if (!wordsArr || wordsArr.constructor !== Array) { return accumulatorArr; }
  const patternParameters = caseSensitive ? 'g' : 'gi';

  // if an array was provided, add the identified words to that array
  let foundArr = accumulatorArr || [];

  // loop through the banned words, and add them to foundArr
  for (let i = 0; i < wordsArr.length; i += 1) {
    const elem = wordsArr[i];
    const re = new RegExp(elem, patternParameters);
    foundArr = general.regexReturnAllMatches(str, re, foundArr);
  }

  return foundArr;
}

function find(source, target, checkOptions, oAccumulator) {
  let bannedWordsObj;
  let retval = null;
  
  if (checkOptions.hasOwnProperty('bannedWordsList')) {
    bannedWordsObj = checkOptions.bannedWordsList;
  }
  if (!bannedWordsObj) { return [null, oAccumulator]; }

  let outputArray = scanForBannedWords(target, bannedWordsObj.CaseInsensitive, false);
  outputArray = scanForBannedWords(target, bannedWordsObj.CaseSensitive, true, outputArray);

  if (outputArray.length > 0) {
    retval = `Suspicious terminology: <span class="text-warning">${outputArray.join(', ')}</span>`;
  }

  return [retval, oAccumulator];
}

export {
  find,
};
