import * as general from './lib-generaluse.js';

function find(source, target, checkOptions, oAccumulator)
{
  if(checkOptions.hasOwnProperty('bannedWordsList')){
     var bannedWordsObj = checkOptions.bannedWordsList; 
  }
  if(!bannedWordsObj) { return [null, oAccumulator]; }

  var outputArray = scanForBannedWords(target, bannedWordsObj.CaseInsensitive, false);
  outputArray = scanForBannedWords(target, bannedWordsObj.CaseSensitive, true, outputArray);
  
  var retval = null;

  if(outputArray.length > 0)
  { retval = 'Suspicious terminology: <span class="text-warning">' + outputArray.join(', ') + '</span>'}

  return [retval, oAccumulator];
}

function scanForBannedWords(str, wordsArr, caseSensitive, accumulatorArr){
  // takes an array of banned words and returns an array
  // of which of those were found in the string provided

  // set to global match and non-case senstive matching by default
  if(!wordsArr || wordsArr.constructor != Array) { return accumulatorArr; }
  caseSensitive = caseSensitive || false;
  var patternParameters = caseSensitive ? 'g' : 'gi';

  // if an array was provided, add the identified words to that array
  var foundArr = accumulatorArr || [];

  // loop through the banned words, and add them to foundArr
  
  for(var i = 0; i < wordsArr.length; i++){
    var elem = wordsArr[i];
    var re = new RegExp(elem, patternParameters);
    foundArr = general.regexReturnAllMatches(str, re, foundArr);
  }

  return foundArr;
}

export {
  find
};