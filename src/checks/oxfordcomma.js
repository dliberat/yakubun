import { CheckResult } from 'yakubun-utils';

let acc;
let msg;
let description;

function formatOutput(test) {
  const checkResult = new CheckResult('oxford-comma');
  if (test) {
    checkResult.hasError = true;
    checkResult.HTML = msg;
    checkResult.plainText = msg;
    checkResult.description = description;
  }
  return [checkResult, acc];
}

function setMessage(required) {
  if (required) {
    msg = 'Possibly missing an Oxford comma.';
    description = 'Comma-separated lists ending in "and" or "or" require a comma before the "and" or "or."';
  }

  msg = 'Oxford comma detected.';
  description = 'Comma-separated lists ending in "and" or "or" should not have a comma before the "and" or "or."';
}

function detectOxfordCommas(source, target, checkOptions = {}, oAccumulator = {}) {
  let re;
  let requireOxfordComma = true;

  acc = oAccumulator;

  // check settings
  if (checkOptions.requireOxfordComma === false) requireOxfordComma = false;

  if (requireOxfordComma) {
    re = new RegExp('([a-z]+)((?:,\\s[a-z]+)+)\\s+(and|or|and\\/or)\\s+([a-z]+)', 'gi');
  } else {
    re = new RegExp('([a-z]+)((?:,\\s[a-z]+)+),\\s+(and|or|and\\/or)\\s+([a-z]+)', 'gi');
  }

  setMessage(requireOxfordComma);
  const test = re.test(target);

  return formatOutput(test);
}

export default detectOxfordCommas;
