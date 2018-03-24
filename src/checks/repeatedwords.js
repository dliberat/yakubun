import { CheckResult } from 'yakubun-utils';

// words that are allowed to repeat
const exceptions = ['tsum', 'bye', 'hee', 'heh', 'ha', 'woo', 'boo'];

function formatOutput(stringArr, oAccumulator) {
  const checkResult = new CheckResult('repeatedWords', false);

  if (stringArr.length > 0) {
    checkResult.hasError = true;
    checkResult.HTML = `Repeated words: ${stringArr.join(', ')}`;
    checkResult.plainText = `Repeated words: ${stringArr.join(', ')}`;
    checkResult.description = 'Did you mean to repeat these words?';
  }

  return [checkResult, oAccumulator];
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
