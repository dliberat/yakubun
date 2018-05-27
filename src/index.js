/* YAKUBUN 0.1.0 https://github.com/garroadran/yakubun Created by Dan Liberatori. Free for use and modification (but notify the author please!) */

import verify from './preprocessing/verifyOptions';
import preprocess from './preprocessing/preprocess';
import runChecks from './runChecks';

/**
 * The primary entry point for the library. Verifies that the
 * configuration options are usable, then preprocesses the bilingualDoc
 * to ensure that the text is readable by all the standard checks.
 * @param {*} bilingualDoc - Object with integer keys, each containing
 * an object that has `source` and `target` keys.
 * @param {*} checkOptions - Configuration object
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
