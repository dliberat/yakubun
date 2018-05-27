/* eslint no-console: off, no-param-reassign: off */
import defaultDateFormats from '../dateformats';

function vBannedWords(wordList) {
  if (wordList === undefined) {
    wordList = {};
  } else if (typeof wordList !== 'object' ||
    Array.isArray(wordList) || wordList === null) {
    throw new Error('Invalid banned words list. Must be an object');
  }

  const keys = Object.keys(wordList);

  if (keys.indexOf('CaseSensitive') < 0) {
    wordList.CaseSensitive = [];
  }
  if (keys.indexOf('CaseInsensitive') < 0) {
    wordList.CaseInsensitive = [];
  }

  return wordList;
}

function vDateFormats(dateFormats, sourceLang, targetLang) {
  // return default settings if user does not pass in an object
  if (typeof dateFormats !== 'object' || Array.isArray(dateFormats) || dateFormats === null) {
    console.warn('No valid date formats detected. Reverting to default.');
    return defaultDateFormats;
  }

  // if the object does not contain formats for the source or target
  // languages, this could cause an error. So create empty objects.
  if (!dateFormats[sourceLang]) {
    dateFormats[sourceLang] = {};
  } else if (!Array.isArray(dateFormats[sourceLang])) {
    throw new Error(`${sourceLang} date format object must contain an array.`);
  }

  if (!dateFormats[targetLang]) {
    dateFormats[targetLang] = {};
  } else if (!Array.isArray(dateFormats[targetLang])) {
    throw new Error(`${targetLang} date format object must contain an array.`, 'verifyOptions');
  }

  return dateFormats;
}

function vLang(lang, defaultValue) {
  // revert to default if user does not declare a language
  if (typeof lang === 'undefined') {
    return defaultValue;
  } else if (typeof lang !== 'string') {
    return defaultValue;
  } else if (lang.length !== 2) {
    throw new Error('Invalid language code. Must use 2-letter lowercase ISO codes', 'verifyOptions');
  }
  return lang;
}

function verify(options) {
  // verify that checkOptions exists and is an object
  // if not, return a default set of options
  if (typeof options !== 'object') {
    console.warn('Invalid checkOptions. Using default options instead.');
    const defaultOptions = {
      sourceLang: 'ja',
      targetLang: 'en',
      dateFormats: defaultDateFormats,
      bannedWordsList: {},
      customChecks: [],
    };

    return defaultOptions;
  }

  // verify these keys by default, since they're critical for basic checks
  options.sourceLang = vLang(options.sourceLang, 'ja');
  options.targetLang = vLang(options.targetLang, 'en');
  options.bannedWordsList = vBannedWords(options.bannedWordsList);
  options.dateFormats = vDateFormats(options.dateFormats, options.sourceLang, options.targetLang);

  return options;
}

export default verify;
