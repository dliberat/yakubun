function findDoubleSpaces(source, target, checkOptions, oAccumulator) {
  let retval = null;
  const reg = new RegExp(' {2}', 'g');
  if (reg.test(target)) {
    retval = 'Check for double spaces.';
  }

  return [retval, oAccumulator];
}

export default findDoubleSpaces;
