import * as general from './lib-generaluse.js';
import { removeDelimiters, letterSubs, subber } from './numbers-utility.js';

function compareNumbers(source, target, checkOptions, oAccumulator) {
  // check to make sure oAccumulator is an object
  if (typeof (oAccumulator) === 'object' && oAccumulator !== null) {
    // use the clean strings, if they exist,
    // since timeCheck accounts for slash dates
    if (oAccumulator.hasOwnProperty('timeCheck_clean_source')) source = oAccumulator.timeCheck_clean_source;
    if (oAccumulator.hasOwnProperty('timeCheck_clean_target')) target = oAccumulator.timeCheck_clean_target;
  }

  // check to make sure checkOptions is valid
  if (typeof (checkOptions) === 'object' && checkOptions !== null) {
    if (!checkOptions.hasOwnProperty('sourceLang')) checkOptions.sourceLang = 'ja';
    if (!checkOptions.hasOwnProperty('targetLang')) checkOptions.targetLang = 'en';
  } else {
    checkOptions = { sourceLang: 'ja', targetLang: 'en' };
  }

  return replaceNumbers(source, target, checkOptions, oAccumulator);
}

function replaceNumbers(source, target, checkOptions, oAccumulator) {
  source = general.replaceDoubleByteNums(source);
  target = general.replaceDoubleByteNums(target);

  return removeDates(source, target, checkOptions, oAccumulator);
}

function removeDates(source, target, checkOptions, oAccumulator) {
  // Remove dates and times in the format
  // {2017-9-21 12:30} or {2017-09-21} or {15:34}
  // TO DO: Ensure that checks-datetime always exports dates
  // in two digit-form so that the first ? can be removed
  // from this regex
  source = source.replace(/{[0-9]{4}-[0-1]?[0-9].+}|{[0-2][0-9]:[0-5][0-9]}/gi, ' ');
  target = target.replace(/{[0-9]{4}-[0-1]?[0-9].+}|{[0-2][0-9]:[0-5][0-9]}/gi, ' ');

  return clean(source, target, checkOptions, oAccumulator);
}

function clean(source, target, checkOptions, oAccumulator) {
  // remove commas from numbers such as 10,000
  source = removeDelimiters(source, checkOptions.sourceLang);
  target = removeDelimiters(target, checkOptions.targetLang);

  // common lexical substitutions
  source = commonSubs(source, checkOptions.sourceLang);
  target = commonSubs(target, checkOptions.targetLang);

  // replace K with 1000, M with 1,000,000
  if (checkOptions.numericalLetters) target = letterSubs(target);

  return customSubs(source, target, checkOptions, oAccumulator);
}

function commonSubs(string, language) {
  language = language.toLowerCase();

  const oSubstitutions = {
    ja: [
      ['POP2', 'POP'],
      ['\u30C8\u30EA\u30D7\u30EB', ' 3 '], //　トリプル
      ['\u30C0\u30D6\u30EB', ' 2 '], // ダブル
      ['\u5343', '000 '], // 千
      ['(\\d+)\\.(\\d)\u4E07', '$1$2000 '], // 1.3万
      ['\u4E07', '0000 '], // 万 TODO: Add in (?:[0-9])
      ['(\\d+)\\.(\\d)\u5104', '$1$20000000 '], // 億
      ['(\\d)\u5104', '$100000000 '], // 億
      ['1\u3064\u76EE', ''], // 1つ目
      ['\u2460', '1 '], // ①
      ['\u2461', '2 '],
      ['\u2462', '3 '],
      ['\u2463', '4 '],
      ['\u2464', '5 '],
      ['\u2465', '6 '],
      ['\u7B2C\u4E00', '1 '], // 第一
      ['\u7B2C\u4E8C', '2 '],
      ['\u7B2C\u4E09', '3 '],
      ['\u7B2C\u56DB', '4 '],
      ['\u7B2C\u4E94', '5 '],
      ['[1]?[0-9]\u6708', 'month'],
      ['\u5343\u8F09\u4E00\u9047', ''],
    ],
    en: [
      ['POP\\s?2', 'POP'],
      ['doubl', ' 2 '],
      ['second\\s', ' 2 '],
      ['twice', ' 2 '],
      ['third', ' 3 '],
      ['tripl', ' 3 '],
      ['quadrupl', ' 4 '],
      ['quintupl', ' 5 '],
      ['thousand', ' 000 '],
      ['(\\d+)\\.(\\d)\\smillion', '$1$200000'],
      ['(\\d+)\\smillion', ' $1000000 '],
      ['(\\d+)\\.(\\d)\\sbillion', '$1$200000000'],
      ['(\\d+)\\sbillion', ' $1000000000 '],
    ],
    es: [
      ['doble', ' 2 '],
      ['triple', ' 3 '],
      ['(\\d+),(\\d)\\smillones', '$1$200000'],
      ['(\\d+)\\smillon', ' $1000000 '],
    ],
  };

  if (oSubstitutions[language]) {
    return general.regexReplaceAllFromArray(oSubstitutions[language], string, 'gi');
  }
  return string;
}

function customSubs(source, target, checkOptions, oAccumulator) {
  // additional replacements provided in checkOptions
  if (checkOptions.numIgnoreSource) source = subber(source, checkOptions.numIgnoreSource);
  if (checkOptions.numIgnoreTarget) target = subber(target, checkOptions.numIgnoreTarget);

  return extract(source, target, oAccumulator);
}

function extract(source, target, oAccumulator) {
  // compare the cleaned strings based on the following regex
  const re = new RegExp('[0-9]+', 'gi');
  const comparison = general.regexComparer(source, target, re, re);
  return oncePerAdjustments(comparison, target, oAccumulator);
}

function oncePerAdjustments(comparison, target, oAccumulator) {
  // allow for a single 'once' or 'per' to replace a single '1' if missing from the target
  const reducer = function (a, b) {
    if (b == '1') {
      return a + 1;
    }
    return a;
  };

  if (target === undefined) {
    return compareAndFormat(comparison, oAccumulator);
  }

  // count 1s in source array
  const s = comparison[0].reduce(reducer, 0);
  // count 1s in target array
  let t = comparison[1].reduce(reducer, 0);

  if (s > t && target.indexOf('once') > 0) {
    comparison[1].push('1');
    comparison[1].sort();
    t++;
  }

  if (s > t && target.indexOf(' per ') > 0) {
    comparison[1].push('1');
    comparison[1].sort();
    t++;
  }

  return compareAndFormat(comparison, oAccumulator);
}

function compareAndFormat(comparison, oAccumulator) {
  let retval = null;
  const compare = general.compareArrays(comparison[0], comparison[1]);

  if (!compare) {
    if (comparison[0].length == 0) comparison[0] = ['nothing'];
    if (comparison[1].length == 0) comparison[1] = ['nothing'];

    retval = `Found <span class="text-warning">${comparison[0].join(', ')
    }</span> in source and <span class="text-warning">${comparison[1].join(', ')}</span> in target.`;
  }

  return [retval, oAccumulator];
}

export {
  compareNumbers,
};
