function regexComparer(source, target, sourceRegex, targetRegex, capturingGroups){
  // if we are looking for a captured group, then we need to set this to one
  // otherwise, we simply return the first match (which is the whole match)
  capturingGroups = capturingGroups ? 1 : 0;

  // perform the RegExp.exec to get the matches
  // .map discards all the metadata and only leaves the matches
  // .sort puts the arrays in order so they can be compared
  var sourceHits = regexReturnAllMatches(source, sourceRegex).map(function(x){ return x[capturingGroups]; }).sort();
  var targetHits = regexReturnAllMatches(target, targetRegex).map(function(x){ return x[capturingGroups]; }).sort();

  return [sourceHits, targetHits];
}

function regexReturnAllMatches(str, regex, accumulatorArr){
  //Returns an array of all the matches to the given regex.
  //If passed an initial array, it returns it with the new
  // matches pushed on at the end.
  var accumulatorArr = accumulatorArr || [];
  do  { var m = regex.exec(str);
        if (m) { accumulatorArr.push(m); }
      } while (m);
  return accumulatorArr;
}

function addMinutesToSimpleENTimes(target){
  return target.replace(/\s([1]?[0-9])([ap]m)|^([1]?[0-9])([ap]m)/g, ' $1$3:00$2$4');

}

function regexReplaceAllFromArray(formatChangesArr, string, parameters){

  parameters = parameters || 'gi';
  var stringb = string;
  
  // check that formatChangesArr really is an array
  if(formatChangesArr === undefined){
    console.log('Error. formatChangesArr is undefined.');
    return string;
  }
  
  if(formatChangesArr.constructor !== Array){
    console.log('Error. formatChangesArr is not an Array.');
    return string;
  }
  
  for(var i = 0; i < formatChangesArr.length; i++){
    var e = formatChangesArr[i];
    var re = new RegExp(e[0], parameters);
    string = string.replace(re, e[1]);
  }
  return string
}

function replaceDoubleByteNums(string){
  var numArr = [
    ['\uFF10','0'],
    ['\uFF11','1'],
    ['\uFF12','2'],
    ['\uFF13','3'],
    ['\uFF14','4'],
    ['\uFF15','5'],
    ['\uFF16','6'],
    ['\uFF17','7'],
    ['\uFF18','8'],
    ['\uFF19','9'],
    ['\u4E8C','2'],
    ['\u4E09','3'],
    ['\u56DB','4'],
    ['\u4E94','5'],
    ['\u516D','6'],
    ['\u4E03','7'],
    ['\u516B','8'],
    ['\u4E5D','9']
  ];

  return regexReplaceAllFromArray(numArr, string, 'gi');
}

function compareArrays(arr1, arr2) {
  // checks if two arrays are identical or not
    if (arr1.length != arr2.length) return false;
    for (var i = 0; i < arr2.length; i++) {
        if (Array.isArray(arr1[i])) { //To test values in nested arrays
            if (!compareArrays(arr1[i], arr2[i])) return false;
        }
        else if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}


function metalogger(string){

}

export { 
    regexComparer, 
    regexReturnAllMatches,
    addMinutesToSimpleENTimes,
    regexReplaceAllFromArray,
    replaceDoubleByteNums,
    compareArrays,
    metalogger
}
