import * as general from './lib-generaluse';
import { removeDelimiters, letterSubs, subber, oncePerAdjustReduce } from './numbers-utility';

const oSubstitutions = {
  ja: [
    ['POP2', 'POP'],
    ['\u30C8\u30EA\u30D7\u30EB', ' 3 '], // トリプル
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

function commonSubs(string, lang) {
  const language = lang.toLowerCase();

  if (oSubstitutions[language]) {
    return general.regexReplaceAllFromArray(oSubstitutions[language], string, 'gi');
  }
  return string;
}

function compareAndFormat(comparison, oAccumulator) {
  let retval = null;
  let [src, tgt] = comparison;
  const compare = general.compareArrays(src, tgt);

  if (!compare) {
    if (src.length === 0) src = ['nothing'];
    if (tgt.length === 0) tgt = ['nothing'];

    retval = `Found <span class="text-warning">${src.join(', ')
    }</span> in source and <span class="text-warning">${tgt.join(', ')}</span> in target.`;
  }

  return [retval, oAccumulator];
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
  const comparison = general.regexComparer(source, target, re, re);
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
  const src = general.replaceDoubleByteNums(source);
  const tgt = general.replaceDoubleByteNums(target);

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

