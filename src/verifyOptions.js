import { metalogger } from './libs/lib-generaluse';
import defaultDateFormats from './dateformats';

function vBannedWords(list) {
  let wordList = list;
  if (typeof wordList !== 'object' || Array.isArray(wordList) || wordList === null) {
    metalogger('No valid banned words list detected. Reverting to blank list.');
    wordList = {};
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
    metalogger('No valid date formats detected. Reverting to default.');
    return defaultDateFormats;
  }

  // if the object does not contain formats for the source or target
  // languages, this could cause an error. So create empty objects.
  if (!dateFormats[sourceLang]) {
    dateFormats[sourceLang] = {};
  } else if (!Array.isArray(dateFormats[sourceLang])) {
    metalogger(`ERROR: ${sourceLang} date format object must contain an array.`);
    dateFormats[sourceLang] = {};
  }

  if (!dateFormats[targetLang]) {
    dateFormats[targetLang] = {};
  } else if (!Array.isArray(dateFormats[targetLang])) {
    metalogger(`ERROR: ${targetLang} date format object must contain an array.`);
    dateFormats[targetLang] = {};
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
    metalogger('Invalid language code. Source and target languages must be in ISO 639-1 format. Reverting to default.');
    return defaultValue;
  }
  return lang;
}

function verify(options) {
  // verify that checkOptions exists and is an object
  // if not, return a default set of options
  if (typeof options !== 'object') {
    metalogger('Invalid checkOptions. Using default options instead.');
    const defaultOptions = {
      sourceLang: 'ja',
      targetLang: 'en',
      dateFormats: defaultDateFormats,
      bannedWordsList: {},
      customTests: [],
    };

    return defaultOptions;
  }

  // verify these keys by default, since they're critical for basic tests
  options.sourceLang = vLang(options.sourceLang, 'ja');
  options.targetLang = vLang(options.targetLang, 'en');
  options.bannedWordsList = vBannedWords(options.bannedWordsList);
  options.dateFormats = vDateFormats(options.dateFormats, options.sourceLang, options.targetLang);

  // verify these keys if they have been included
  //

  return options;
}

export default verify;
