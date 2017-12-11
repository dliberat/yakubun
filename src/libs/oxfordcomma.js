function formatOutput(test, msg, oAccumulator) {
  // if the regex returned true, send the message
  let retval = null;
  if (test) retval = msg;
  return [retval, oAccumulator];
}

function getMessage(required) {
  if (required) {
    return 'Possibly missing an Oxford comma.';
  }
  return 'Oxford comma detected.';
}

function detectOxfordCommas(source, target, checkOptions, oAccumulator) {
  let re;
  let requireOxfordComma = true;

  // check settings
  if (checkOptions.requireOxfordComma === false) requireOxfordComma = false;

  if (requireOxfordComma) {
    re = new RegExp('([a-z]+)((?:,\\s[a-z]+)+)\\s+(and|or|and\\/or)\\s+([a-z]+)', 'gi');
  } else {
    re = new RegExp('([a-z]+)((?:,\\s[a-z]+)+),\\s+(and|or|and\\/or)\\s+([a-z]+)', 'gi');
  }

  const msg = getMessage(requireOxfordComma);
  const test = re.test(target);

  return formatOutput(test, msg, oAccumulator);
}

export default detectOxfordCommas;
