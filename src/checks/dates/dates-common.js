import * as general from '../../utilities/general';
import convertToTwentyFourHourClock from './convertToISOTime';

function verifyOptions(checkOptions) {
  const optionKeys = Object.keys(checkOptions);
  if (
    optionKeys.indexOf('sourceLang') < 0 ||
    optionKeys.indexOf('targetLang') < 0 ||
    optionKeys.indexOf('dateFormats') < 0
  ) {
    return false;
  }

  const dateFormatsKeys = Object.keys(checkOptions.dateFormats);
  if (
    dateFormatsKeys.indexOf(checkOptions.sourceLang) < 0 ||
    dateFormatsKeys.indexOf(checkOptions.targetLang) < 0
  ) {
    return false;
  }

  return true;
}

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
  let dDate = date;
  let dMonth = month;
  let dHour = hour;
  if (dDate.length === 1) { dDate = `0${dDate}`; }
  if (dMonth.length === 1) { dMonth = `0${dMonth}`; }
  if (dHour.length === 1) { dHour = `0${dHour}`; }
  return m1 + dMonth + m2 + dDate + m3 + dHour + m4;
}

function ensureTwoDigitNumberNoTime(match, m1, month, m2, date, m3) {
  let dDate = date;
  let dMonth = month;
  if (dDate.length === 1) { dDate = `0${dDate}`; }
  if (dMonth.length === 1) { dMonth = `0${dMonth}`; }
  return m1 + dMonth + m2 + dDate + m3;
}

function monthConverter(element) {
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

function cleanStringsBeforeDateCheck(src, tgt, checkOptions) {
  let source = src;
  let target = tgt;

  // ///////////////////// SOURCE TEXT CLEANUP//////////////////////////////////////
  // replace all double-byte numbers with single byte versions
  source = general.replaceDoubleByteNums(source);
  // remove strings that should never be interpreted as numbers
  source = initialJPFilter(source);
  // parse all dates into the {2017-9-21} format
  // Still need to convert things into 2-digit format
  source = general.regexReplaceAllFromArray(checkOptions.dateFormats[checkOptions.sourceLang], source, 'gi');

  // //////////////////// TARGET TEXT CLEANUP ////////////////////////////////////
  // change all 11am times to 11:00am
  target = general.addMinutesToSimpleENTimes(target);
  // convert Jan. 21, 22 to: Jan. 21 Jan. 22
  target = cleanGetRichCommaDateLists(target);

  // perform the big scan to catch as many dates and times as possible
  target = general.regexReplaceAllFromArray(checkOptions.dateFormats[checkOptions.targetLang], target, 'gi');

  // convert any times that were caught to 24 hour format and remove am/pm
  target = convertToTwentyFourHourClock(target);

  // TO DO: Convert months and dates to two-digit format in this cleanup step
  return [source, target];
}

export {
  verifyOptions,
  initialJPFilter,
  cleanGetRichCommaDateLists,
  convertToTwoDigitDates,
  cleanStringsBeforeDateCheck,
};
