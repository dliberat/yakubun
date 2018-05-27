/**
 * @module dateformats
 * @description
 * A collection of regular expressions designed to capture some of the most common
 * text formats for writing dates in both Japanese and English. These are used as
 * default values only, and it is highly recommended that clients provide their own
 * lists of date formats in the check options object. When a valid date formats object
 * is provided in <tt>checkOptions.dateFormats</tt>, the defaults in this module are not used.
 */


const now = new Date();

/**
 * The current year. Used to assign a year where none is provided in the translation text.
 * It is assumed that in most cases, if the text omits the year, it will be referring
 * to the current year. Even in cases where this assumption does not hold, so long
 * as both the source and target texts are consistent about including or excluding a
 * year, translation errors should be detected accurately.
 * @ignore
 */
const thisYear = now.getFullYear();

/**
 * The current month. Used to assign a month where none is provided in the translation text.
 * It is assumed that in most cases, if the text omits the month, it will be referring
 * to the current month.
 * @ignore
 */
const thisMonth = now.getMonth() + 1;

/**
 * Strings for use with RegExp constructors, along with replacement patterns to go
 * with each match pattern. Each of the match patterns is executed in sequence (ie. the
 * function does not short-circuit once a match has been found), therefore careful
 * sequencing of the patterns is important.
 *
 * These are intended as simple defaults, and ideally clients should provide their own
 * lists with patterns that reflect the date formats they see on a regular basis.
 */
const dateFormats = {
  ja: [
    ['([0-9]{4})\\u5E74([0-1]?[0-9])\\u6708([0-3]?[0-9])\\u65E5\\s?([0-2]?[0-9])[\\u6642\\uFF1A:]([0-5][0-9])', '{$1-$2-$3 $4:$5}'], // 2017年9月10日10時３０分
    ['([0-1]?[0-9])\\u6708([0-3]?[0-9])\\u65E5\\s?([0-2]?[0-9])[\\u6642\\uFF1A:]([0-5][0-9])', `{${thisYear}-$1-$2 $3:$4}`], // 9月10日10時３０分
    ['([0-1]?[0-9])\\u6708([0-3]?[0-9])\\u65E5\\s?([0-2]?[0-9])\\u6642', `{${thisYear}-$1-$2 $3:00}`], // 9月10日10時
    ['([0-1]?[0-9])\\u6708([0-3]?[0-9])\\u65E5\\s?\\u306E([0-2]?[0-9])\\u6642', `{${thisYear}-$1-$2 $3:00}`], // 9月10日の10時
    ['([0-9]{4})\\u5E74([0-1]?[0-9])\\u6708([0-3]?[0-9])\\u65E5', '{$1-$2-$3}'], // 2017年9月10日
    ['([0-2]?[0-9])[:\\uFF1A]([0-5][0-9]) ([0-1]?[0-9])\\/([0-3]?[0-9])', `{${thisYear}-$3-$4 $1:$2}`], // 21:59 09/10
    ['([0-1]?[0-9])\\/([0-3]?[0-9]).([0-2]?[0-9])[:\\uFF1A]([0-5][0-9])', `{${thisYear}-$1-$2 $3:$4}`], // 09/10 21:59
    ['([0-1]?[0-9])\\u6708([0-3]?[0-9])\\u65E5', `{${thisYear}-$1-$2}`], // 9月10日
    ['[0-2]?[0-9]:[0-5][0-9]\\s?[-–\\uFF5E]\\s?([0-1]?[0-9])\\/([0-3]?[0-9]) ([0-2]?[0-9]:[0-5][0-9])', `{${thisYear}-$1-$2 $3}`], // 11:00 - 10/29 23:59 (bubble calendar)
    ['([0-1]?[0-9])\\/([0-3]?[0-9])[（(][\\u65E5\\u6708火水木金土][）)]', `{${thisYear}-$1-$2}`], // 9/21（土）
    ['([0-1]?[0-9])\\/([0-3]?[0-9])[\\u304B\\u307E][\\u3089\\u3067]', `{${thisYear}-$1-$2}`], // 9/21から 9/31まで
    ['([0-3]?[0-9])\\u65E5', `{${thisYear}-${thisMonth}-$1}`], // 10日
  ],
  en: [
    ['([1]?[0-9]:[0-5][0-9][ap]m), Jan(?:uary)?\\.? ([0-3]?[0-9])', `{${thisYear}-1-$2 $1}`], // 12:30pm, Jan. 23
    ['([1]?[0-9]:[0-5][0-9][ap]m), Feb(?:ruary)?\\.? ([0-3]?[0-9])', `{${thisYear}-2-$2 $1}`],
    ['([1]?[0-9]:[0-5][0-9][ap]m), Mar(?:ch)?\\.? ([0-3]?[0-9])', `{${thisYear}-3-$2 $1}`],
    ['([1]?[0-9]:[0-5][0-9][ap]m), Apr(?:il)?\\.? ([0-3]?[0-9])', `{${thisYear}-4-$2 $1}`],
    ['([1]?[0-9]:[0-5][0-9][ap]m), May ([0-3]?[0-9])', `{${thisYear}-5-$2 $1}`],
    ['([1]?[0-9]:[0-5][0-9][ap]m), Jun(?:e)?\\.? ([0-3]?[0-9])', `{${thisYear}-6-$2 $1}`],
    ['([1]?[0-9]:[0-5][0-9][ap]m), Jul(?:y)?\\.? ([0-3]?[0-9])', `{${thisYear}-7-$2 $1}`],
    ['([1]?[0-9]:[0-5][0-9][ap]m), Aug(?:ust)?\\.? ([0-3]?[0-9])', `{${thisYear}-8-$2 $1}`],
    ['([1]?[0-9]:[0-5][0-9][ap]m), Sep(?:tember)?\\.? ([0-3]?[0-9])', `{${thisYear}-9-$2 $1}`],
    ['([1]?[0-9]:[0-5][0-9][ap]m), Oct(?:ober)?\\.? ([0-3]?[0-9])', `{${thisYear}-10-$2 $1}`],
    ['([1]?[0-9]:[0-5][0-9][ap]m), Nov(?:ember)?\\.? ([0-3]?[0-9])', `{${thisYear}-11-$2 $1}`],
    ['([1]?[0-9]:[0-5][0-9][ap]m), Dec(?:ember)?\\.? ([0-3]?[0-9])', `{${thisYear}-12-$2 $1}`],
    ['Jan(?:uary)?\\.? ([0-3]?[0-9])', `{${thisYear}-1-$1}`], // Jan. 15
    ['Feb(?:ruary)?\\.? ([0-3]?[0-9])', `{${thisYear}-2-$1}`],
    ['Mar(?:ch)?\\.? ([0-3]?[0-9])', `{${thisYear}-3-$1}`],
    ['Apr(?:il)?\\.? ([0-3]?[0-9])', `{${thisYear}-4-$1}`],
    ['May ([0-3]?[0-9])', `{${thisYear}-5-$1}`],
    ['Jun(?:e)?\\.? ([0-3]?[0-9])', `{${thisYear}-6-$1}`],
    ['Jul(?:y)?\\.? ([0-3]?[0-9])', `{${thisYear}-7-$1}`],
    ['Aug(?:ust)?\\.? ([0-3]?[0-9])', `{${thisYear}-8-$1}`],
    ['Sep(?:tember)?\\.? ([0-3]?[0-9])', `{${thisYear}-9-$1}`],
    ['Oct(?:ober)?\\.? ([0-3]?[0-9])', `{${thisYear}-10-$1}`],
    ['Nov(?:ember)?\\.? ([0-3]?[0-9])', `{${thisYear}-11-$1}`],
    ['Dec(?:ember)?\\.? ([0-3]?[0-9])', `{${thisYear}-12-$1}`],
    ['([0-1]?[0-9])\\/([0-3]?[0-9]),? ([0-2]?[0-9]:[0-5][0-9][AP]M)', `{${thisYear}-$1-$2 $3}`], // 11/5, 16:59AM
    ['([0-1]?[0-9])\\/([0-3]?[0-9]) ([0-2]?[0-9]:[0-5][0-9])', `{${thisYear}-$1-$2 $3}`], // 9/21 12:00
    ['([0-1]?[0-9])\\/([0-3]?[0-9]) \\(GMT\\+9\\)', `{${thisYear}-$1-$2}`], // 9/21 12:00
    ['[0-2]?[0-9]:[0-5][0-9] [-–—] [0-2]?[0-9]:[0-5][0-9] ([0-1]?[0-9])\\/([0-3]?[0-9])', `{${thisYear}-$1-$2}`], // 12:00 - 13:00 9/21
    ['([0-1]?[0-9])\\/([0-3]?[0-9]) [0-2]?[0-9]:[0-5][0-9] [-–—] [0-2]?[0-9]:[0-5][0-9]', `{${thisYear}-$1-$2}`], // 9/21 12:00 - 13:00
    ['([0-2]?[0-9]):([0-5][0-9][AP]M) ([0-1]?[0-9])\\/([0-3]?[0-9])', `{${thisYear}-$3-$4 $1:$2}`], // 6:59PM 09/10
    ['[0-2]?[0-9]:[0-5][0-9]\\s?[-–〜]\\s?([0-1]?[0-9])\\/([0-3]?[0-9]) ([0-2]?[0-9]:[0-5][0-9])', `{${thisYear}-$1-$2 $3}`], // 11:00 - 10/29 23:59
  ],
  es: [
    ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de ene', `{${thisYear}-1-$2 $1}`],
    ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de feb', `{${thisYear}-2-$2 $1}`],
    ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de mar', `{${thisYear}-3-$2 $1}`],
    ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de abr', `{${thisYear}-4-$2 $1}`],
    ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de may', `{${thisYear}-5-$2 $1}`],
    ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de jun', `{${thisYear}-6-$2 $1}`],
    ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de jul', `{${thisYear}-7-$2 $1}`],
    ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de ago', `{${thisYear}-8-$2 $1}`],
    ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de sep', `{${thisYear}-9-$2 $1}`],
    ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de oct', `{${thisYear}-10-$2 $1}`],
    ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de nov', `{${thisYear}-11-$2 $1}`],
    ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de dic', `{${thisYear}-12-$2 $1}`],
  ],
};

export default dateFormats;
