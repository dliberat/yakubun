function quotePunctuation(source, target, checkOptions, oAccumulator) {
  let retval = null;
  let searchTerm = '".';
  let caution = 'Periods should precede quotation marks.';

  // style is american by default
  if (checkOptions.quotationMarks === 'UK') {
    searchTerm = '."';
    caution = 'Quotation marks should precede periods.';
  }

  const test = target.indexOf(searchTerm);

  if (test > -1) {
    retval = caution;
  }

  return [retval, oAccumulator];
}

export default quotePunctuation;
