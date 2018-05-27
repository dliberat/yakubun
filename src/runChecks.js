import getChecks from './preprocessing/getChecks';

function logger(msg) {
  if (this.logs.indexOf(msg) < 0) this.logs.push(msg);
}

/**
 * Run a battery of checks on a single segment.
 * The list of checks to run is retrieved from `oAccumulator.checks`.
 * @param source {string} - Source text
 * @param target {string} - Target text
 * @param checkOptions {object} - Config
 * @param oAccumulator {object} - Accumulates data over iterations
 * @returns An array of two elements. The first is an object
 * that contains the results of each of the checks. The second
 * is the updated state of the accumulator object.
 */
function singleSegmentChecks(source, target, checkOptions, oAccumulator) {
  let accumulator = oAccumulator;
  const oResults = {};

  // run each of the functions in oAccumulator.checks
  // store the results of that function in the oResults object
  // and keep any metadata they send back through the second parameter (b);
  accumulator.checks.forEach((check) => {
    const [checkName, checkFunc] = check;
    const [res, acc] = checkFunc(source, target, checkOptions, accumulator);
    oResults[checkName] = res;
    accumulator = acc;
  });

  return [oResults, accumulator];
}

function startScan(bilingualDoc, checkOptions) {
  let oAccumulator = {
    currentSegment: 0,
    log: logger.bind(this),
    logs: [],
    checks: getChecks(checkOptions),
    totalSegmentsChecked: 0,
  };

  const output = {};

  // iterate over all the segments in the bilingualDoc
  // call singleSegmentChecks on each segment
  const segments = Object.keys(bilingualDoc);

  segments.forEach((segment) => {
    // track which segment we are currently on
    oAccumulator.currentSegment = segment;
    oAccumulator.totalSegmentsChecked += 1;

    const [res, acc] = singleSegmentChecks(
      bilingualDoc[segment].source,
      bilingualDoc[segment].target,
      checkOptions,
      oAccumulator,
    );

    // use the accumulator to carry over data between segments
    oAccumulator = acc;

    output[segment] = res;
  });

  output.logs = oAccumulator.logs;

  return output;
}

export default startScan;
