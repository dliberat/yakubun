import moment from 'moment-timezone';

/**
 * Callback function for sorting an array of moments.
 * @param {moment} a - Moment object
 * @param {moment} b - Moment object
 * @returns {Number} -1 if a should be in front of b. 1 if b should
 * be in front of a. 0 if the elements should remain unchanged or if
 * they are not moment objects.
 */
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

/**
 * Callback function to map date strings in bracket format to moment objects.
 * @param {string} e - Date in bracket format
 * @param {string} tz - Time zone identifier
 * @returns {moment} A moment object created with the date and timezone provided
 */
function converter(e, tz) {
  const element = e.slice(1, e.length - 1);
  if (tz) return moment.tz(element, tz);
  return moment(element);
}

/**
 * Take an array of arrays, each containing times in ISO format, and map the
 * entire thing into a sorted array of moment objects.
 * @param {string[][]} comparison - Array containing arrays of dates in bracket format.
 * @param {string} tzs - Time zone for source dates.
 * @param {string} tzt - Time zone for target dates.
 * @example
 * // Example date in ISO format: {2018-01-31 00:00}
 */
function convertToMomentArr(comparison, tzs, tzt) {
  const newArr = [];
  const sourceConverter = e => converter(e, tzs);
  const targetConverter = e => converter(e, tzt);

  newArr[0] = comparison[0].map(sourceConverter).sort(momentDateSort);
  newArr[1] = comparison[1].map(targetConverter).sort(momentDateSort);
  return newArr;
}

export default convertToMomentArr;
