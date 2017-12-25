function metalogger() {

}

function compareArrays(arr1, arr2) {
  // checks if two arrays are identical or not
  // does not perform proper deep equality checks (objects are not treated as equal);
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr2.length; i += 1) {
    if (Array.isArray(arr1[i])) { // To test values in nested arrays
      if (!compareArrays(arr1[i], arr2[i])) return false;
    } else if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}


/** Returns an array of all the matches to the given regex.
 * If passed an initial array, it returns it with the new
 * matches tacked on at the end
 */
function regexReturnAllMatches(str, regex, accumulatorArr = []) {
  let m;

  do {
    m = regex.exec(str);
    if (m) { accumulatorArr.push(m); }
  } while (m);
  return accumulatorArr;
}

function regexComparer(
  source,
  target,
  sourceRegex,
  targetRegex,
  groupsExist,
) {
  // if we are looking for a captured group, then we need to set this to one
  // otherwise, we simply return the first match (which is the whole match)
  const capturingGroups = groupsExist ? 1 : 0;

  // perform the RegExp.exec to get the matches
  // .map discards all the metadata and only leaves the matches
  // .sort puts the arrays in order so they can be compared
  const sourceHits = regexReturnAllMatches(source, sourceRegex)
    .map(x => x[capturingGroups]).sort();
  const targetHits = regexReturnAllMatches(target, targetRegex)
    .map(x => x[capturingGroups]).sort();

  const equiv = compareArrays(sourceHits, targetHits);
  return [sourceHits, targetHits, equiv];
}

function addMinutesToSimpleENTimes(target) {
  return target.replace(/\s([1]?[0-9])([ap]m)|^([1]?[0-9])([ap]m)/g, ' $1$3:00$2$4');
}

function regexReplaceAllFromArray(formatChangesArr, str, parameters = 'gi') {
  let string = str;

  // check that formatChangesArr really is an array
  if (formatChangesArr === undefined) {
    metalogger('Error. formatChangesArr is undefined.');
    return string;
  }

  if (formatChangesArr.constructor !== Array) {
    metalogger('Error. formatChangesArr is not an Array.');
    return string;
  }

  formatChangesArr.forEach((e) => {
    const re = new RegExp(e[0], parameters);
    string = string.replace(re, e[1]);
  });

  return string;
}

function replaceDoubleByteNums(string) {
  const numArr = [
    ['\u5341\u4E00', '11'],
    ['\u5341\u4E8C', '12'],
    ['\u5341\u4E09', '13'],
    ['\u5341\u56DB', '14'],
    ['\u5341\u4E94', '15'],
    ['\u5341\u516D', '16'],
    ['\u5341\u4E03', '17'],
    ['\u5341\u516B', '18'],
    ['\u5341\u4E5D', '19'],
    ['\u4E8C\u5341', '20'],
    ['\uFF10', '0'],
    ['\uFF11', '1'],
    ['\uFF12', '2'],
    ['\uFF13', '3'],
    ['\uFF14', '4'],
    ['\uFF15', '5'],
    ['\uFF16', '6'],
    ['\uFF17', '7'],
    ['\uFF18', '8'],
    ['\uFF19', '9'],
    ['\u4E8C', '2'],
    ['\u4E09', '3'],
    ['\u56DB', '4'],
    ['\u4E94', '5'],
    ['\u516D', '6'],
    ['\u4E03', '7'],
    ['\u516B', '8'],
    ['\u4E5D', '9'],
  ];

  return regexReplaceAllFromArray(numArr, string, 'gi');
}

export {
  regexComparer,
  regexReturnAllMatches,
  addMinutesToSimpleENTimes,
  regexReplaceAllFromArray,
  replaceDoubleByteNums,
  compareArrays,
  metalogger,
};
