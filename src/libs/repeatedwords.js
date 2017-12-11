// words that are allowed to repeat
const exceptions = ['tsum', 'bye', 'hee', 'heh', 'ha', 'woo', 'boo'];

function formatOutput(stringArr, oAccumulator) {
  let retval = null;
  // the array will come back empty if no words were found
  if (stringArr.length > 0) { retval = `Repeated words: ${stringArr.join(', ')}`; }
  return [retval, oAccumulator];
}

function findRepeatedWords(source, target, checkOptions, oAccumulator) {
  const targ = target.toLowerCase();

  // split into an array, then filter only if there are multiple consecutive elements
  const stringArr = targ.split(' ')
    .filter((element, index, arr) =>
      element === arr[index - 1] && element !== '' && exceptions.indexOf(element) === -1);

  return formatOutput(stringArr, oAccumulator);
}

export default findRepeatedWords;
