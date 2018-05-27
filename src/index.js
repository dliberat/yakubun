/* YAKUBUN 0.1.0 https://github.com/garroadran/yakubun Created by Dan Liberatori. Free for use and modification (but notify the author please!) */

/**
 * A segment of source and translated target text.
 * @typedef {Object} Segment
 * @property {string} source - Source text
 * @property {string} target - Target text
 */

/**
 * A document containing a source text and its translation.
 * @typedef {Object} bilingualDoc
 * @property {Segment} 0 - Translation segment
 * @example
 * {
 * 0: {
 *  source: "日本語",
 *  target: "English"
 * },
 * 1: {
 *  source: "私は犬が好きだ。",
 *  target: "I like dogs."
 * },
 * 2: {
 *  source: "私は犬２匹を飼っています。",
 *  target: "I have 2 dogs."
 * }
 *}
 */

/**
 * A configuration object. All properties are optional.
 * @typedef {Object} checkOptions
 * @property {string} [sourceLang='ja'] - ISO language code for the source language
 * @property {string} [targetLang='en'] - ISO language code for the target language
 * @property {Object} dateFormats - Object containing regular expressions match and replacement
 * patterns to convert all dates in the text to the format {YYYY-MM-DD HH:MM}
 * @property {string[]} [numIgnoreSource=[]] - An array of patterns to ignore in the source text
 * when performing a cross check for numbers.
 * @property {string[]} [numIgnoreTarget=[]] - An array of patterns to ignore in the target text
 * when performing a cross check for numbers.
 * @property {Object} [bannedWordsList] - An object containing patterns to search for and flag
 * during checks. The object should have properties for both case sensitive and case
 * insensitive searches.
 * @property {string} [sourceTimeZone] - Time zone identifier for moment-timezone.
 * @property {string} [targetTimeZone] - Time zone identifier for moment-timezone.
 * @property {boolean} [numericalLetters=false] - Instructs the numbers check to read Arabic
 * numerals followed by uppercase "K"s or "M"s as thousands and millions respectively.
 * If set to <tt>true</tt>, 8K in the target text would be counted as 8000, and 1.5M would be
 * counted as 1,500,000.
 * @property {boolean} [requireOxfordComma=true] - Instructs the Oxford comma to either throw
 * a flag when an Oxford comma appears to be missing (if set to <tt>true</tt>), or to throw
 * a flag when an Oxford comma appears to have been detected (if set to <tt>false</tt>).
 */

import verify from './preprocessing/verifyOptions';
import preprocess from './preprocessing/preprocess';
import runChecks from './runChecks';

/**
 * The primary entry point for the library. Verifies that the
 * configuration options are usable, then preprocesses the bilingualDoc
 * to ensure that the text is readable by all the standard checks.
 * @param {bilingualDoc} bilingualDoc - Object with integer keys, each containing
 * an object that has `source` and `target` keys.
 * @param {checkOptions} checkOptions - Configuration object
 * @param {function} callback - This feature is deprecated and will be
 * removed in a future release. The callback function is executed after
 * every check, and receives the CheckResult object from that check.
 */
function scan(bilingualDoc, checkOptions, callback) {
  const cleanCheckOptions = verify(checkOptions);
  const cleanBilingualDoc = preprocess(bilingualDoc);

  return runChecks(cleanBilingualDoc, cleanCheckOptions, callback);
}

module.exports = {
  scan,
};
