/** convert 12 hour clocks to 24 hour clocks
 *
 */
function twentyFourHours(match, hour, minutes, meridian = '') {
  let hr = Number(hour);
  const min = Number(minutes);
  const mer = meridian.toLowerCase();

  if (hr === 12 && mer === 'am') {
    hr = 0;
  }
  if (hr < 12 && mer === 'pm') {
    hr += 12;
  }

  let sHr = hr.toString();
  let sMin = min.toString();

  if (hr < 10) { sHr = `0${sHr}`; }
  if (min < 10) { sMin = `0${sMin}`; }

  return `${sHr}:${sMin}`;
}

/**
 * Converts times in the text from 12 hour format into 24 hour format,
 * accounting for "am/pm" immediately following the time display.
 * @param {string} string - Text containing times
 * @returns A new string with the times replaced
 */
function convertToTwentyFourHourClock(string) {
  return string.replace(/([0-2]?[0-9]):([0-5][0-9])([ap]m)?/gi, twentyFourHours);
}

export default convertToTwentyFourHourClock;
