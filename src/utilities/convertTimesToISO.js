/**
 * Receive a time in a string representation
 * and convert it into an ISO format.
 * This function assigns the date May 20 1985
 * to the ISO string
 *
 * @param {string} str - A time in 12 or 24 hour clock format (eg. 11:59am)
 * */
function convertTimesToISO(str) {
  let string = str.toLowerCase();

  // add 0 to single-digit hours
  if (string.indexOf(':') === 1) { string = `0${string}`; }

  // remove 'am'
  string = string.replace(/\uFF1A/gi, ':');
  string = string.replace(/12(:00)?am/gi, '00:00');
  string = string.replace(/12(:00)?pm/gi, '12:00'); // need to do this otherwise 12pm turns into 24:00 and the date shifts over
  string = string.replace(/am/gi, '');

  // add 12 hours and remove pm
  if (string.indexOf('pm') > 0) {
    const hours = Number(string.slice(0, 2)) + 12;
    const minutes = string.slice(3, 5);
    string = hours.toString() + minutes;
  }
  return `19850520T${string.replace(':', '')}`;
}

export default convertTimesToISO;
