/**
 * Module containing various language quality checks.
 * @module checks-language
 */

import { CheckResult } from 'yakubun-utils';

/** Find double byte brackets, colons, or exclamation marks
 * Additional JP characters should probably be added here
 */
function findJPCharacters(source, target, checkOptions, oAccumulator) {
  const jpChars = [
    '\uFF08', // （
    '\uFF09', // ）
    '\uFF1A', // ：
    '\uFF01', // !
    '\u3000', // space
    '\uFF0E', // ．
  ];

  const foundChars = [];

  for (let i = 0; i < jpChars.length; i += 1) {
    if (target.indexOf(jpChars[i]) > -1) {
      const x = jpChars[i] === '\u3000' ? '[Space]' : jpChars[i];
      foundChars.push(x);
    }
  }

  const checkResult = new CheckResult('jp-characters');

  if (foundChars.length > 0) {
    checkResult.hasError = true;
    checkResult.HTML = `Double-byte characters: <span class="text-alert">${foundChars.join(' ')}</span>`;
    checkResult.plainText = `Double-byte characters: ${foundChars.join(' ')}`;
    checkResult.description = 'Remove all double-byte brackets, exclamation marks, and spaces.';
  }

  return [checkResult, oAccumulator];
}

function findBulletsWithNoSpaces(source, target, checkOptions, oAccumulator) {
  let test = false;
  let reg;

  if (checkOptions.customBullets) {
    const bullets = checkOptions.customBullets;
    reg = new RegExp(`^[${bullets}][a-zA-Z0-9\\(]|\\\\n[${bullets}][a-zA-Z0-9\\(]`, 'gm');
    if (reg.test(target)) {
      test = true;
    }
  }

  reg = new RegExp('^[-\\u25A0\\u25BC\\u30FB][a-zA-Z0-9\\(]|\\\\n[-\\u25A0\\u25BC\\u30FB][a-zA-Z0-9\\(]', 'gm');
  if (reg.test(target)) {
    test = true;
  }

  const checkResult = new CheckResult('bullet-point-spaces');
  if (test) {
    checkResult.hasError = true;
    checkResult.HTML = 'Make sure there are spaces after bullet points.';
    checkResult.plainText = 'Make sure there are spaces after bullet points.';
    checkResult.description = 'Adding a space after bullets makes text look cleaner.';
  }
  return [checkResult, oAccumulator];
}

export {
  findJPCharacters,
  findBulletsWithNoSpaces,
};
