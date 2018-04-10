/* YAKUBUN 0.1.0 https://github.com/garroadran/yakubun Created by Dan Liberatori. Free for use and modification (but notify the author please!) */

import verify from './preprocessing/verifyOptions';
import preprocess from './preprocessing/preprocess';
import runChecks from './runChecks';

function scan(bilingualDoc, checkOptions, callback) {
  const cleanCheckOptions = verify(checkOptions);
  const cleanBilingualDoc = preprocess(bilingualDoc);

  return runChecks(cleanBilingualDoc, cleanCheckOptions, callback);
}

module.exports = {
  scan,
};
