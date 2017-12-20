import moment from 'moment-timezone';
import * as general from '../lib-generaluse';

/**
 * Remove words from the JP that have kanji in them that would normally be
 * mistaken for numbers, or that should never be translated as numbers.
*/
function initialJPFilter(string) {
  const arr = [
    ['([0-9]?[0-9])[\\u65E5\\u6642\\u5206][\\u9593\\u76EE]', ' $1 '], // 3日目 or ４日間 or 3時間 or 25分間
    ['([0-9]+)\\u65E5\\u9023\\u7D9A', ' $1 '], // 6日連続
    ['[0-9]\\u65E5([0-9]+)\\u56DE', ' $1 '], // 1日１回
    ['\\u4E09\\u89D2', ' '], // 三角
    ['\\u4E07\\u7AEF', ' '], // 万端
    ['\\u4E07\\u80FD', ' '],
  ];

  return general.regexReplaceAllFromArray(arr, string, 'gi');
}

function ensureTwoDigitNumber(match, m1, month, m2, date, m3, hour, m4) {
  if (date.length === 1) { date = `0${date}`; }
  if (month.length === 1) { month = `0${month}`; }
  if (hour.length === 1) { hour = `0${hour}`; }
  return m1 + month + m2 + date + m3 + hour + m4;
}

function ensureTwoDigitNumberNoTime(match, m1, month, m2, date, m3) {
  if (date.length === 1) { date = `0${date}`; }
  if (month.length === 1) { month = `0${month}`; }
  return m1 + month + m2 + date + m3;
}

function monthConverter(element, index) {
  if (element.length > 12) {
    return element.replace(/({[0-9]{4}-)([0-1]?[0-9])(-)([0-3]?[0-9])( )([0-2]?[0-9])(:[0-5][0-9].*)/, ensureTwoDigitNumber);
  }
    return element.replace(/({[0-9]{4}-)([0-1]?[0-9])(-)([0-3]?[0-9])(.*)/, ensureTwoDigitNumberNoTime);
}

function convertToTwoDigitDates(comparison) {
  comparison[0] = comparison[0].map(monthConverter);
  comparison[1] = comparison[1].map(monthConverter);
  return comparison;
}

function cleanGetRichCommaDateLists(string) {
  // the negative lookahead avoids error in things like Oct. 20, 2017
  const formatChanges = [
    ['([JFMASON][aepuco][nbrynlgptvc]\\. )([0-3]?[0-9]), ([0-3]?[0-9]), ([0-3]?[0-9]), ([0-3]?[0-9])(?!\\d)', '$1$2 $1$3 $1$4 $1$5'],
    ['([JFMASON][aepuco][nbrynlgptvc]\\. )([0-3]?[0-9]), ([0-3]?[0-9]), ([0-3]?[0-9])(?!\\d)', '$1$2 $1$3 $1$4'],
    ['([JFMASON][aepuco][nbrynlgptvc]\\. )([0-3]?[0-9]), ([0-3]?[0-9])(?!\\d)', '$1$2 $1$3'],
  ];
  return general.regexReplaceAllFromArray(formatChanges, string, 'gi');
}

function momentDateSort(a, b) {
  // leave elements unsorted if they are not moments
  if (!moment.isMoment(a) || !moment.isMoment(b)) {
    return 0;
  }

  // sort the moments
  if (a.isBefore(b)) {
    return -1;
  } else if (b.isBefore(a)) {
    return 1;
  }

  // if anything went wrong, leave elements unsorted
  return 0;
}

export {
    initialJPFilter,
    cleanGetRichCommaDateLists,
    convertToTwoDigitDates,
    momentDateSort,
}