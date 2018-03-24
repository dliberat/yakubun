import moment from 'moment-timezone';
import { CheckResult } from 'yakubun-utils';
import { metalogger } from '../../utilities/general';

/*
Takes an array with the following arguments
0: Array of dates found in source with no match in target
1: Array of dates found in target with no match in source
2: (optional) Array of slash dates that were parsed in the source
3: (optional) Array of slash dates that were parsed in the target
*/
function formatForOutput(arr, oAccumulator, sourceTZ, targetTZ) {
  // if the array elements are still moments, change them to readable formats
  let format = 'MMM. D';
  if (sourceTZ !== targetTZ) {
    format += ' HH:MM z';
  }

  for (let j = 0; j < 2; j += 1) {
    for (let i = 0; i < arr[j].length; i += 1) {
      if (moment.isMoment(arr[j][i])) {
        arr[j][i] = arr[j][i].format(format);
      }
    }
  }

  const inSourceNoMatch = `Source dates w/o match in target: <span class="text-date">${arr[0].join(', ')}</span>`;
  const inTargetNoMatch = `Target dates w/o match in source: <span class="text-date">${arr[1].join(', ')}</span>`;
  let slashParsedInSource = '';
  let slashParsedInTarget = '';

  if (arr.length > 3) {
    if (arr[3].length > 0) { slashParsedInTarget = arr[3].join(', '); }
  }

  if (arr.length > 2) {
    if (arr[2].length > 0) { slashParsedInSource = arr[2].join(', '); }

    if (slashParsedInTarget !== '' || slashParsedInSource !== '') {
      metalogger(`Found & parsed slash dates: ${slashParsedInTarget} ${slashParsedInSource} at segment ${Number(oAccumulator.currentSegment) + 1}`);
    }
  }

  // create the output string
  let output;
  if (arr[0].length > 0 && arr[1].length > 0) {
    output = `${inSourceNoMatch}<br>${inTargetNoMatch}`;
  } else if (arr[0].length > 0 && arr[1].length === 0) {
    output = inSourceNoMatch;
  } else if (arr[0].length === 0 && arr[1].length > 0) {
    output = inTargetNoMatch;
  } else {
    output = null;
  }

  const checkResult = new CheckResult('dates');
  checkResult.hasError = output !== null;
  checkResult.HTML = output;

  if (output) {
    checkResult.plainText = output.replace(/<(?:.|\n)*?>/gm, '');
  } else {
    checkResult.plainText = output;
  }

  /* This does not yet include info on whether any dates were
  detected or not! That info needs to be filled in by the
  main module before sthe result gets sent back to the calling function */
  return checkResult;
}

export default formatForOutput;
