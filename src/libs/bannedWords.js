import * as general from './lib-generaluse';

/**
 * Creates a string to return as an output
 * @param {string[]} outputArray - The array of words detected
 */
function outputString(outputArray) {
  let retval = null;

  if (outputArray.length > 0) {
    retval = `Suspicious terminology: <span class="text-warning">${outputArray.join(', ')}</span>`;
  }

  return retval;
}


/**
 * Takes an array of strings and returns an array
 * of which of those were found in the string provided
 * @param {string} str - The string in which to look for the words
 * @param {string[]} wordsArr - The array of regexes to search for
 * @param {boolean} caseSensitive - Case sensitivity
 * @param {string[]} accumulatorArr - The array onto which to push the words detected
 */
function scanForBannedWords(str, wordsArr, caseSensitive = false, accumulatorArr = []) {
  const patternParameters = caseSensitive ? 'g' : 'gi';

  // set to global match and non-case senstive matching by default
  if (!wordsArr || wordsArr.constructor !== Array) { return accumulatorArr; }

  // if an array was provided, add the identified words to that array
  let foundArr = accumulatorArr;

  // loop through the banned words, and add them to foundArr
  wordsArr.forEach((element) => {
    const re = new RegExp(element, patternParameters);
    foundArr = general.regexReturnAllMatches(str, re, foundArr);
  });

  return foundArr;
}

/**
 * Search for banned words provided in the
 * checkOptions.bannedWords object
 * @param {string} source - Source text
 * @param {string} target - Target text
 * @param {object} checkOptions - Options object
 * @param {object} checkOptions.bannedWordsList - List of regex strings
 * @param {object} oAccumulator - Carries over data between segments
 */
function find(source, target, checkOptions, oAccumulator) {
  let bannedWordsObj;

  if (checkOptions.bannedWordsList) {
    bannedWordsObj = checkOptions.bannedWordsList;
  }
  if (!bannedWordsObj) { return [null, oAccumulator]; }

  let outputArray = scanForBannedWords(target, bannedWordsObj.CaseInsensitive, false);
  outputArray = scanForBannedWords(target, bannedWordsObj.CaseSensitive, true, outputArray);

  return [outputString(outputArray), oAccumulator];
}

export default find;
