/**
 * Number comparison module.
 * @module numbers
 */

import commaNumber from 'comma-number';
import {
  CheckResult,
  regexComparer,
  replaceAllFromArray,
  compareArrays,
} from 'yakubun-utils';
import replaceKanjiNums from '../../utilities/replaceKanjiNums';
import { removeDelimiters, letterSubs, subber, oncePerAdjustReduce } from './numbers-utility';
import oSubstitutions from './num-words';

function commonSubs(string, lang) {
  const language = lang.toLowerCase();

  if (oSubstitutions[language]) {
    return replaceAllFromArray(oSubstitutions[language], string, 'gi');
  }
  return string;
}

function prettifyNumArray(arr) {
  if (arr.length === 0) {
    return ['nothing'];
  }
  return arr.map(element => commaNumber(element));
}

function compareAndFormat(comparison, oAccumulator) {
  const checkResult = new CheckResult('numbers');
  let [src, tgt] = comparison;
  const arraysAreEqual = compareArrays(src, tgt);

  if (!arraysAreEqual) {
    src = prettifyNumArray(src);
    tgt = prettifyNumArray(tgt);

    checkResult.hasError = true;
    checkResult.HTML = `Found <span class="text-warning">${src.join(', ')
    }</span> in source and <span class="text-warning">${tgt.join(', ')}</span> in target.`;
    checkResult.plainText = `Found ${src.join(', ')} in source and ${tgt.join(', ')} in target.`;
    checkResult.description = 'Numbers in source should be present in target and vice versa.';
  }

  return [checkResult, oAccumulator];
}

function oncePerAdjustments(comparison, target, oAccumulator) {
  // allow for a single 'once' or 'per' to replace a single '1' if missing from the target

  if (target === undefined) {
    return compareAndFormat(comparison, oAccumulator);
  }

  // count 1s in source array
  const s = comparison[0].reduce(oncePerAdjustReduce, 0);
  // count 1s in target array
  let t = comparison[1].reduce(oncePerAdjustReduce, 0);

  if (s > t && target.indexOf('once') > 0) {
    comparison[1].push('1');
    comparison[1].sort();
    t += 1;
  }

  if (s > t && target.indexOf(' per ') > 0) {
    comparison[1].push('1');
    comparison[1].sort();
    t += 1;
  }

  return compareAndFormat(comparison, oAccumulator);
}

function extract(source, target, oAccumulator) {
  // compare the cleaned strings based on the following regex
  const re = new RegExp('[0-9]+', 'gi');
  const comparison = regexComparer(source, target, re, re);
  return oncePerAdjustments(comparison, target, oAccumulator);
}

function customSubs(source, target, checkOptions, oAccumulator) {
  let src = source;
  let tgt = target;
  // additional replacements provided in checkOptions
  if (checkOptions.numIgnoreSource) src = subber(src, checkOptions.numIgnoreSource);
  if (checkOptions.numIgnoreTarget) tgt = subber(tgt, checkOptions.numIgnoreTarget);

  return extract(src, tgt, oAccumulator);
}

function clean(source, target, checkOptions, oAccumulator) {
  // remove commas from numbers such as 10,000
  let src = removeDelimiters(source, checkOptions.sourceLang);
  let tgt = removeDelimiters(target, checkOptions.targetLang);

  // common lexical substitutions
  src = commonSubs(src, checkOptions.sourceLang);
  tgt = commonSubs(tgt, checkOptions.targetLang);

  // replace K with 1000, M with 1,000,000
  if (checkOptions.numericalLetters) tgt = letterSubs(tgt);

  return customSubs(src, tgt, checkOptions, oAccumulator);
}

function removeDates(source, target, checkOptions, oAccumulator) {
  // Remove dates and times in the format
  // {2017-9-21 12:30} or {2017-09-21} or {15:34}
  // TO DO: Ensure that checks-datetime always exports dates
  // in two digit-form so that the first ? can be removed
  // from this regex
  const src = source.replace(/{[0-9]{4}-[0-1]?[0-9].+}|{[0-2][0-9]:[0-5][0-9]}/gi, ' ');
  const tgt = target.replace(/{[0-9]{4}-[0-1]?[0-9].+}|{[0-2][0-9]:[0-5][0-9]}/gi, ' ');

  return clean(src, tgt, checkOptions, oAccumulator);
}

function replaceNumbers(source, target, checkOptions, oAccumulator) {
  const src = replaceKanjiNums(source);
  const tgt = replaceKanjiNums(target);

  return removeDates(src, tgt, checkOptions, oAccumulator);
}

function compareNumbers(source, target, options, oAccumulator) {
  let src = source;
  let tgt = target;
  let checkOptions = options;


  // check to make sure oAccumulator is an object
  if (typeof (oAccumulator) === 'object' && oAccumulator !== null) {
    // use the clean strings, if they exist,
    // since timeCheck accounts for slash dates
    if (oAccumulator.timeCheck_clean_source) src = oAccumulator.timeCheck_clean_source;
    if (oAccumulator.timeCheck_clean_target) tgt = oAccumulator.timeCheck_clean_target;
  }

  // check to make sure checkOptions is valid
  if (typeof (checkOptions) === 'object' && checkOptions !== null) {
    if (!checkOptions.sourceLang) checkOptions.sourceLang = 'ja';
    if (!checkOptions.targetLang) checkOptions.targetLang = 'en';
  } else {
    checkOptions = { sourceLang: 'ja', targetLang: 'en' };
  }

  // now start the check
  return replaceNumbers(src, tgt, checkOptions, oAccumulator);
}

export default compareNumbers;

