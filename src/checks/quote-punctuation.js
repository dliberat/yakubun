/** Module
 * Pass in either american or UK style. Detect periods either
 * before or after quotation marks as appropriate, and flag errors.
 */
import CheckResult from '../utilities/CheckResult';

let acc;
let searchTerm;
let caution;

function generateResult(test) {
  const checkResult = new CheckResult('quote-punctuation');

  if (test > -1) {
    checkResult.hasError = true;
    checkResult.description = caution;
    checkResult.HTML = caution;
    checkResult.plainText = caution;
  }

  return [checkResult, acc];
}

function setStyle(location = 'US') {
  if (location === 'UK') {
    searchTerm = '."';
    caution = 'Quotation marks should precede periods.';
  } else {
    searchTerm = '".';
    caution = 'Periods should precede quotation marks.';
  }
}

function quotePunctuation(source, target, checkOptions = {}, oAccumulator) {
  acc = oAccumulator;

  // style defaults to American
  setStyle(checkOptions.quotationMarks);

  const test = target.indexOf(searchTerm);

  return generateResult(test);
}

export default quotePunctuation;
