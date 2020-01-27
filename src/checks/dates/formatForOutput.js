import moment from 'moment-timezone';
import { CheckResult } from 'yakubun-utils';

/**
 * Callback function for an array .map method that, whenever it
 * encounters a moment object, it converts it into a string.
 * @param {*} element - Element in an array
 * @returns {*} The same element that was passed in, unless it was
 * a moment object, in which case its string representation is returned.
 */
function format(pattern) {
  return (element) => {
    if (moment.isMoment(element)) return element.format(pattern);
    return element;
  };
}

/*
Takes an array with the following arguments
0: Array of dates found in source with no match in target
1: Array of dates found in target with no match in source
2: (optional) Array of slash dates that were parsed in the source
3: (optional) Array of slash dates that were parsed in the target
*/
function formatForOutput(arr, oAccumulator, sourceTZ, targetTZ) {
  let f = 'MMM. D';
  if (sourceTZ !== targetTZ) f += ' HH:MM z';

  // Convert any moment objects to strings, so they can be used in the output string
  const noMatchSource = arr[0].map(format(f));
  const noMatchTarget = arr[1].map(format(f));

  const inSourceNoMatch = `Source dates w/o match in target: <span class="text-date">${noMatchSource.join(', ')}</span>`;
  const inTargetNoMatch = `Target dates w/o match in source: <span class="text-date">${noMatchTarget.join(', ')}</span>`;

  // create the output string
  let output;
  if (noMatchSource.length > 0 && noMatchTarget.length > 0) {
    output = `${inSourceNoMatch} <br>${inTargetNoMatch}`;
  } else if (noMatchSource.length > 0 && noMatchTarget.length === 0) {
    output = inSourceNoMatch;
  } else if (noMatchSource.length === 0 && noMatchTarget.length > 0) {
    output = inTargetNoMatch;
  } else {
    output = null;
  }

  const checkResult = new CheckResult('dates');
  checkResult.hasError = output !== null;
  checkResult.HTML = output;
  checkResult.sourceDates = checkResult.sourceDates.concat(arr[2] === undefined ? [] : arr[2]);
  checkResult.targetDates = checkResult.targetDates.concat(arr[3] === undefined ? [] : arr[3]);

  if (output) {
    checkResult.plainText = output.replace(/<(?:.|\n)*?>/gm, '');
  } else {
    checkResult.plainText = output;
  }

  /* This does not yet include info on whether any dates were
  detected or not! That info needs to be filled in by the
  main module before the result gets sent back to the calling function */
  return checkResult;
}

export default formatForOutput;
