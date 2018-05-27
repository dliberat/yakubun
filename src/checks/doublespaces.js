/**
 * Contains a check for double spaces in the target text.
 * @module doublespaces
 */

import { CheckResult } from 'yakubun-utils';

function generateResult(test, acc) {
  const checkResult = new CheckResult('double-spaces');
  if (test) {
    checkResult.hasError = true;
    checkResult.description = 'Avoid double spaces, even after a period.';
    checkResult.HTML = 'Check for double spaces.';
    checkResult.plainText = 'Check for double spaces.';
  }
  return [checkResult, acc];
}

function findDoubleSpaces(source, target, checkOptions, oAccumulator) {
  const reg = new RegExp(' {2}', 'g');
  const test = reg.test(target);

  return generateResult(test, oAccumulator);
}

export default findDoubleSpaces;
