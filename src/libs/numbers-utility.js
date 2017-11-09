function letterSubs(string)
{
  var numericalLetterReplacer = function (match, p1, p2){
      // parse the numerical portion as a number
      var mantissa = Number(p1);
      // if it cannot be parsed for whatever reason, replace the match with itself
      if(isNaN(mantissa)) {
          return match;
        } else {
            var factor = p2 == 'K' ? 1000 : 1000000;
            return mantissa * factor
        }
    }

    // include a negative lookahead to avoid things like 100KB or 20MB
    return string.replace(/([0-9]*?\.?[0-9])([KM])(?![a-zA-Z0-9])/g, numericalLetterReplacer)
}

function removeDelimiters(string, language)
{
  language = language.toLowerCase();
  if (language == 'ja' || language == 'en') {
    //TODO: Running the replacement twice is a bit of a hack. Improve this.
    return string.replace(/([0-9]+),([0-9]{3})/g, '$1$2').replace(/([0-9]+),([0-9]{3})/g, '$1$2');
  } else if (language == 'es') {
    return string.replace(/([0-9]+)\.([0-9]{3})/g, '$1$2').replace(/([0-9]+)\.([0-9]{3})/g, '$1$2');
  } else {
    return string.replace(/([0-9]+),([0-9]{3})/g, '$1$2').replace(/([0-9]+),([0-9]{3})/g, '$1$2');
  }
}

function subber(string, subsArray)
{
  /* subsArray should have the following structure:
  [
    [regex string, replacement],
    [regex string, replacement]
  ]
  */
  
  if (subsArray === undefined || subsArray === null){
      console.log('Error. subsArray is ' + subsArray);
      return string;
  }
  if(subsArray.constructor !== Array){
      console.log('Error. subsArray is not an Array.');
      return string;
  }
  for (var i = 0; i < subsArray.length; i++){
      var e = subsArray[i];
      string = string.replace(e[0],e[1]);
  }

  return string;
}

export {
    letterSubs,
    removeDelimiters,
    subber
}