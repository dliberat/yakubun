import { metalogger } from './libs/lib-generaluse.js';
import defaultDateFormats from './dateformats.js';

function verify (checkOptions){
    
    // verify that checkOptions exists and is an object
    // if not, return a default set of options
    if(typeof checkOptions !== 'object'){
        var defaultOptions = {
            sourceLang: 'ja',
            targetLang: 'en',
            dateFormats: defaultDateFormats,
            bannedWordsList: {},
            customTests: []
            }
        
        return defaultOptions;
    }

    // verify these keys by default, since they're critical for basic tests
    checkOptions.sourceLang = vLang(checkOptions.sourceLang, 'ja');
    checkOptions.targetLang = vLang(checkOptions.targetLang, 'en')
    checkOptions.dateFormats = vDateFormats(checkOptions.dateFormats, checkOptions.sourceLang, checkOptions.targetLang);
    checkOptions.bannedWordsList = vBannedWords(checkOptions.bannedWordsList);
    
    // verify these keys if they have been included
    //
    
    return checkOptions;
}

function vLang(lang, def){
    // revert to default if user does not declare a language
    if(typeof lang === 'undefined'){
        return def;
    } else if (typeof lang !== 'string'){
        return def;
    } else if (lang.length !== 2){
        metalogger('Invalid language code. Source and target languages must be in ISO 639-1 format. Reverting to default.');
        return def;
    }
    return lang;
}

function vDateFormats(dateFormats, sourceLang, targetLang){
    
    // return default settings if user does not pass in an object
    if(typeof dateFormats !== 'object' || Array.isArray(dateFormats) || dateFormats === null){
        metalogger('No valid date formats detected. Reverting to default.');
        return defaultDateFormats;
    }
    
    // if the object does not contain formats for the source or target
    // languages, this could cause an error. So create empty objects.
    if(!dateFormats[sourceLang]){
        dateFormats[sourceLang] = {};
    } else if(!Array.isArray(dateFormats[sourceLang])){
        metalogger('ERROR: ' + sourceLang + ' date format object must contain an array.');
        dateFormats[sourceLang] = {};
    }
    
    if(!dateFormats[targetLang]){
        dateFormats[targetLang] = {};
    } else if(!Array.isArray(dateFormats[targetLang])){
        metalogger('ERROR: ' + targetLang +' date format object must contain an array.');
        dateFormats[targetLang] = {};
    }
    
    return dateFormats;
}

function vBannedWords(wordList){
    if(typeof wordList !== 'object' || Array.isArray(wordList) || wordList === null){
        metalogger('No valid banned words list detected. Reverting to blank list.');
        return {};
    }
    
    if(!wordList.hasOwnProperty('CaseSensitive')){
        wordList.CaseSensitive = [];
    }
    if(!wordList.hasOwnProperty('CaseInsensitive')){
        wordList.CaseInsensitive = [];
    }
    
    return wordList;
}

export default verify;