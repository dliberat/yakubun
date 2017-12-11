function numericalLetterReplacer(match, p1, p2) {
  // parse the numerical portion as a number
  const mantissa = Number(p1);

  // if it cannot be parsed for whatever reason, replace the match with itself
  if (Number.isNaN(mantissa)) {
    return match;
  }

  // multiply by the appropriate number. K for 1000, M for 1000000
  const factor = p2 === 'K' ? 1000 : 1000000;
  return mantissa * factor;
}

function letterSubs(string) {
  // include a negative lookahead to avoid things like 100KB or 20MB
  return string.replace(/([0-9]*?\.?[0-9])([KM])(?![a-zA-Z0-9])/g, numericalLetterReplacer);
}

function removeDelimiters(string, lang) {
  const language = lang.toLowerCase();
  if (language === 'ja' || language === 'en') {
    // TODO: Running the replacement twice is a bit of a hack. Improve this.
    return string.replace(/([0-9]+),([0-9]{3})/g, '$1$2').replace(/([0-9]+),([0-9]{3})/g, '$1$2');
  } else if (language === 'es') {
    return string.replace(/([0-9]+)\.([0-9]{3})/g, '$1$2').replace(/([0-9]+)\.([0-9]{3})/g, '$1$2');
  }
  return string.replace(/([0-9]+),([0-9]{3})/g, '$1$2').replace(/([0-9]+),([0-9]{3})/g, '$1$2');
}

function subber(str, subsArray) {
  /* subsArray should have the following structure:
  [
    [regex string, replacement],
    [regex string, replacement]
  ]
  */
  let string = str;

  try {
    subsArray.forEach((element) => {
      string = string.replace(element[0], element[1]);
    });
  } catch (err) {
    // log this error somehow?
  }

  return string;
}

function oncePerAdjustReduce(a, b) {
  if (b === '1') return a + 1;
  return a;
}

export {
  letterSubs,
  removeDelimiters,
  subber,
  oncePerAdjustReduce,
};
