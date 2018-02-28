/** Module
 * Pass in either american or UK style. Detect periods either
 * before or after quotation marks as appropriate, and flag errors.
 */
import CheckResult from '../utilities/CheckResult';

let acc;
let searchTerm;
let searchTermComma;
let caution;

function generateResult(foundError) {
  const checkResult = new CheckResult('quote-punctuation');

  if (foundError) {
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
    searchTermComma = ',"';
    caution = 'Quotation marks should precede periods.';
  } else {
    searchTerm = '".';
    searchTermComma = '",';
    caution = 'Periods should precede quotation marks.';
  }
}

function quotePunctuation(source, target, checkOptions = {}, oAccumulator) {
  acc = oAccumulator;

  // style defaults to American
  setStyle(checkOptions.quotationMarks);

  const period = target.indexOf(searchTerm);
  const comma = target.indexOf(searchTermComma);

  return generateResult(period > -1 || comma > -1);
}

export default quotePunctuation;
