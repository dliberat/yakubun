import CheckResult from '../utilities/CheckResult';

// words that are allowed to repeat
const exceptions = ['tsum', 'bye', 'hee', 'heh', 'ha', 'woo', 'boo'];

function formatOutput(stringArr, oAccumulator) {
  const retval = new CheckResult('repeatedWords', false);

  if (stringArr.length > 0) {
    retval.hasError = true;
    retval.HTML = `Repeated words: ${stringArr.join(', ')}`;
    retval.plainText = `Repeated words: ${stringArr.join(', ')}`;
    retval.description = 'Did you mean to repeat these words?';
  }

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
