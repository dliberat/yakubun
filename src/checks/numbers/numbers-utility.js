/**
 * Utility functions for the numbers comparison module.
 * @module numbers-utility
 */

/**
  * Callback function for a RegExp `replace` method call.
  * Interprets the numeric value from a RegEx match with two capturing groups.
  * The first capturing group is a number, and the second is a capital letter,
  * either 'K' for thousands, or 'M' for millions.
  * @param {string} match - The matched substring.
  * @param {string} p1 - First capturing group from the match
  * @param {string} p2 - Second capturing group from the match
  * @return {Number} The matched number in full numerical form.
  * @private
  */
function numericalLetterReplacer(match, p1, p2) {
  // parse the numerical portion as a number
  const mantissa = Number(p1);

  // if it cannot be parsed for whatever reason, replace the match with itself
  if (Number.isNaN(mantissa)) {
    return match;
  }

  // multiply by the appropriate number. K for 1000, M for 1000000
  const factor = p2 === 'K' ? 1000 : 1000000;
  return mantissa * factor;
}

/**
 * Replace numbers of the form '10K' in a string with their full Arabic numeral equivalents.
 * @param {string} string
 * @returns {string} A new string with the short-form numerals replaced by Arabic numerals.
 * @example
 * letterSubs('10K');
 * // 10000
 * @example
 * letterSubs('He won $2.5M in the lottery.');
 * // 'He won $2500000 in the lottery.'
 * @private
 */
function letterSubs(string) {
  return string.replace(/([0-9]*?\.?[0-9])([KM])(?![a-zA-Z0-9])/g, numericalLetterReplacer);
}

function removeDelimiters(string, lang) {
  const language = lang.toLowerCase();
  if (language === 'ja' || language === 'en') {
    // TODO: Running the replacement twice is a bit of a hack. Improve this.
    return string.replace(/([0-9]+),([0-9]{3})/g, '$1$2').replace(/([0-9]+),([0-9]{3})/g, '$1$2');
  }
  if (language === 'es') {
    return string.replace(/([0-9]+)\.([0-9]{3})/g, '$1$2').replace(/([0-9]+)\.([0-9]{3})/g, '$1$2');
  }
  return string.replace(/([0-9]+),([0-9]{3})/g, '$1$2').replace(/([0-9]+),([0-9]{3})/g, '$1$2');
}

/**
 * Performs a series of text replacements on a given string.
 * @param {string} str
 * @param {*} subsArray - An array of arrays, each containing two elements.
 * The first element contains the pattern to match against (a `string` or a `RegExp`),
 * and the second contains the replacement to use if the match is found.
 * @returns {string} A new string with all the matches of the provided patterns
 * replaced by the provided  replacements.
 * @example
 * const subs = [
 *    ['dog', 'cat'],
 *    [/(\d) days/, '$1 weeks']
 *   ]
 *
 * subber("I've had a dog for 3 days", subs)
 * // "I've had a cat for 3 weeks"
 * @private
 */
function subber(str, subsArray) {
  let string = str;

  try {
    subsArray.forEach((element) => {
      string = string.replace(element[0], element[1]);
    });
  } catch (err) {
    // log this error somehow?
  }

  return string;
}

/**
 * Callback function for an `array.reduce` method.
 * Counts the total number of array elements that match the
 * string literal '1'.
 * @param {*} a - Accumulator for the reduced value. Should be initialized to 0.
 * @param {*} b - Current value being processed in the array.
 * @private
 */
function oncePerAdjustReduce(a, b) {
  if (b === '1') return a + 1;
  return a;
}

export {
  letterSubs,
  removeDelimiters,
  subber,
  oncePerAdjustReduce,
};
