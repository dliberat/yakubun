/*
Check ordinal numbers to ensure that they have the proper trailing letters
*/

import * as general from './lib-generaluse';

const oRules = {
  en: {
    1: 'st',
    2: 'nd',
    3: 'rd',
    general: 'th',
  },
};

function ordinalNumbers(source, target, checkOptions, oAccumulator) {
  // set EN as the default language
  if (!checkOptions) { checkOptions = {}; }
  if (!checkOptions.targetLang) { checkOptions.targetLang = 'en'; }

  // abort if there are no rules for the targetLang
  if (oRules.hasOwnProperty(checkOptions.targetLang)) {
    var rules = oRules[checkOptions.targetLang];
  } else {
    return [null, oAccumulator];
  }

  return runRegex(target, rules, oAccumulator);
}

function runRegex(target, rules, oAccumulator) {
  // regex to search for ordinal numbers
  const re = new RegExp('([0-9]+)([a-z][a-z]?)(?:\\W|$)', 'gi');

  const arr = general.regexReturnAllMatches(target, re);
  /* arr contains
    [0]: full match (1st, 2nd, etc.);
    [1]: numeral (1, 2, etc.)
    [2]: suffix (st, nd, etc.)
    */
  return compareWithRules(arr, rules, oAccumulator);
}

function compareWithRules(arr, rules, oAccumulator) {
  // assume no errors
  let flag = false;

  // loop through the results, check that they match the rules
  for (let i = 0; i < arr.length; i++) {
    const strNum = arr[i][1].toString();
    const num = strNum.substr(strNum.length - 1);
    // if there's a specific rule for that number
    if (rules[num]) {
      if (arr[i][2] != rules[num]) { flag = true; }
    } else {
      // if there's no specific rule, use the general rule
      if (arr[i][2] != rules.general) { flag = true; }
    }
  }

  return output(flag, oAccumulator);
}

function output(flag, oAccumulator) {
  const retval = flag ? 'Check ordinal numbers.' : null;

  return [retval, oAccumulator];
}

export default ordinalNumbers;
