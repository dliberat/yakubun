import getTests from './preprocessing/getTests';

function logger(msg) {
  if (this.logs.indexOf(msg) < 0) this.logs.push(msg);
}

/**
 * Runs the battery of checks on a single segment
 * in the bilingual doc
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

  // run each of the functions in oAccumulator.tests
  // store the results of that function in the oResults object
  // and keep any metadata they send back through the second parameter (b);
  accumulator.tests.forEach((test) => {
    const [testName, testFunc] = test;
    const [res, acc] = testFunc(source, target, checkOptions, accumulator);
    oResults[testName] = res;
    accumulator = acc;
  });

  return [oResults, accumulator];
}

function startScan(bilingualDoc, checkOptions) {
  let oAccumulator = {
    currentSegment: 0,
    log: logger.bind(this),
    logs: [],
    tests: getTests(checkOptions),
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
