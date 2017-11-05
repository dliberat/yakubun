import * as general from './lib-generaluse.js';

function findBannedWords(source, target, checkOptions, oAccumulator)
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

function scanForBannedWords(str, wordsArr, caseSensitive, accumulatorArr)
{
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

function findDoubleSpaces(source, target, checkOptions, oAccumulator)
{
  var retval = null;
  var reg = new RegExp('  ','g');
  if(reg.test(target)){
    retval = 'Check for double spaces.';
  }

  return [retval, oAccumulator]
}

function findJPCharacters(source, target, checkOptions, oAccumulator)
{
  // finds double-byte brackets, colons, or spaces.
  var jpChars = [
    '\uFF08', // （
    '\uFF09', // ）
    '\uFF1A', // ：
    '\uFF01', // !
    '\u3000' // space
  ];

  var foundChars = [];

  for(var i = 0; i<jpChars.length; i++)
  {
    if(target.indexOf(jpChars[i]) > -1) {
      jpChars[i] === '\u3000' ? foundChars.push('[Space]') : foundChars.push(jpChars[i]);
    }
  }

  var retval = null;

  if(foundChars.length >0)
  { retval = 'Double-byte characters: <span class="text-alert">' + foundChars.join(' ') + '</span>'; }

  return [retval, oAccumulator]
}

function findRepeatedWords(source, target, checkOptions, oAccumulator)
{
  var exceptions = ['tsum','bye','hee','heh','ha','woo','boo']; // words that are allowed to repeat

  target = target.toLowerCase();

  // split into an array and filter only if there are multiple consecutive elements
  var stringArr = target.split(' ').filter(function(element, index, arr){
    return element == arr[index - 1] && element !== '' && exceptions.indexOf(element) == -1;
  });

  var retval = null;
  if(stringArr.length > 0)
  { retval = 'Repeated words: ' + stringArr.join(', '); }

  return [retval, oAccumulator];
}

function findBulletsWithNoSpaces(source, target, checkOptions, oAccumulator){
  var retval = null;
  var reg;
  
  if(checkOptions.customBullets){
    var bullets = checkOptions.customBullets;
    reg = new RegExp('^[' + bullets + '][a-zA-Z0-9\\(]|\\\\n[' + bullets + '][a-zA-Z0-9\\(]','gm');
    if(reg.test(target)){
      retval = 'Make sure there are spaces after bullet points.'
    }
  }
  
  
  reg = new RegExp('^[-\\u25A0\\u25BC\\u30FB][a-zA-Z0-9\\(]|\\\\n[-\\u25A0\\u25BC\\u30FB][a-zA-Z0-9\\(]','gm');
  if(reg.test(target)){
    retval = 'Make sure there are spaces after bullet points.';
  }

  return [retval, oAccumulator];
}

function detectOxfordCommas(source, target, checkOptions, oAccumulator){
  var retval = null;
  var re, msg, requireOxfordComma;
  
  if(checkOptions.requireOxfordComma === false){
    requireOxfordComma = false;
  } else { 
    requireOxfordComma = true;
  }
  
  if(requireOxfordComma){
    re =  new RegExp('([a-z]+)((?:,\\s[a-z]+)+)\\s+(and|or|and\\/or)\\s+([a-z]+)', 'gi');
    msg = 'Possibly missing an Oxford comma.';
  } else {
    re =  new RegExp('([a-z]+)((?:,\\s[a-z]+)+),\\s+(and|or|and\\/or)\\s+([a-z]+)', 'gi');
    msg = 'Oxford comma detected.';
  }

  if(re.test(target))
  { retval = msg; }
   return [retval, oAccumulator];
}

function trackNumberedBullets(source, target, checkOptions, oAccumulator){

  var checkSequentialArray = function (arr){
    if (arr.length < 2) { return true; }
    // returns FALSE if the array is not sequentially numbered (1,2,3,4)
    for(var i=1; i<arr.length; i++){
      var a = Number(arr[i-1]);
      var b = Number(arr[i]) - 1;
      if(a !== b){ return false; }
      }
    return true;
  }

  // ensure that an object exists to keep track of the bullets
  if(!oAccumulator.trackNumberedBullets){
    oAccumulator.trackNumberedBullets = {period: [],bracket: []};
  }

  var periodArr = [];
  var bracketArr = [];
  
    for (var i = 0; i < oAccumulator.trackNumberedBullets.period.length; i++){
      periodArr.push(oAccumulator.trackNumberedBullets.period[i]);
    }
    for (var i = 0; i < oAccumulator.trackNumberedBullets.bracket.length; i++){
      bracketArr.push(oAccumulator.trackNumberedBullets.bracket[i]);
    }
  
  // search for numbered bullet points
  var re = new RegExp('^(\\d)[.)]\\s|[^\\w]\\s(\\d)[.)]\\s','gm');
  var matchArr = general.regexReturnAllMatches(target, re);
  // if there are no matches, return right away
  if(matchArr.length === 0) { return [null, oAccumulator]; }

    var num
  // else loop through the results and sort them into the appropriate arrays
  for(var i = 0; i < matchArr.length; i++){
    num = matchArr[i][1] || matchArr[i][2];
        if(matchArr[i][0].indexOf(')') > -1){
          oAccumulator.trackNumberedBullets.bracket.push(num);
          general.metalogger('Found a numbered bullet point at segment ' + (Number(oAccumulator.currentSegment) + 1) + '. [' + num + ')]');
        } else if (matchArr[i][0].indexOf('.') > -1){
          oAccumulator.trackNumberedBullets.period.push(num);
          general.metalogger('Found a numbered bullet point at segment ' + (Number(oAccumulator.currentSegment) + 1) + '. [' + num + '.]');
        }

  }
  // search for errors. Returns FALSE if there is an error in the numerical sequence
  var ret1 = checkSequentialArray(oAccumulator.trackNumberedBullets.period);
  var ret2 = checkSequentialArray(oAccumulator.trackNumberedBullets.bracket);
  var retval = null;

    if(ret1 === false || ret2 === false) {
    retval = 'Suspected error in numbered list (# sequence or punctuation).';
    // if an error was detected, reset the relevant Accumulator array so that it
    // doesn't flag every single segment.
    if(ret1 === false) {
      // reset the retval to null if the list is 3 or more items long and
      // the match is a 1, since we most likely just started a new list.
      if(oAccumulator.trackNumberedBullets.period.length > 2 && num == 1) { 
        retval = null;
      }
      oAccumulator.trackNumberedBullets.period = [];
      
    } else {
      if(oAccumulator.trackNumberedBullets.bracket.length >2 && num == 1) {
        retval = null;
      }
      oAccumulator.trackNumberedBullets.bracket = [];
    }
  }
  return [retval, oAccumulator];
}

export {
  findBannedWords,
  findDoubleSpaces,
  findJPCharacters,
  findRepeatedWords,
  findBulletsWithNoSpaces,
  detectOxfordCommas,
  trackNumberedBullets
}