/**
 * @module preprocess
 * @description
 * Mutate a bilingualDoc object to allow for more accurate checks.
 */

/**
 * Subtract 0xfee0 from the character code for a single-character string
 * and return the corresponding character.
 * @callback replacer
 * @param {string} ch - A string of length 1
 * @returns {string} - A string of length 1
 * @private
 */
function replacer(ch) {
  return String.fromCharCode(ch.charCodeAt(0) - 0xfee0);
}

/**
 * Replace full-width characters in a string with half-width versions.
 * @todo Eliminate this needless function
 * @private
 * @param {string} string - The string to exectue the replacement on.
 */
function fullWidthToHalf(string) {
  return string.replace(/[\uff01-\uff5e]/g, replacer);
}

/**
 * Replace full-width characters in the source text with half-width characters.
 * @param {Object} doc - A bilingual document
 * @returns {Object} The same bilingual document, but with all full-width
 * alphanumerics and standard symbols converted to their half-width counterparts.
 * @alias module:preprocess
 */
function preprocess(doc) {
  const keys = Object.keys(doc);
  keys.forEach((element) => {
    doc[element].source = fullWidthToHalf(doc[element].source);
  });

  return doc;
}

export default preprocess;
