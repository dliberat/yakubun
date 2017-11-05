```
 ____  ____       __               __                         
|_  _||_  _|     [  |  _          [  |                        
  \ \  / / ,--.   | | / ] __   _   | |.--.   __   _   _ .--.  
   \ \/ / `'_\ :  | '' < [  | | |  | '/'`\ \[  | | | [ `.-. | 
   _|  |_ // | |, | |`\ \ | \_/ |, |  \__/ | | \_/ |, | | | | 
  |______|\'-;__/[__|  \_]'.__.'_/[__;.__.'  '.__.'_/[___||__]
```


About
=====

Yakubun is a Javascript library designed to help Japanese translators check their work. 
It takes a document comprised of source language and target language segments and runs a series of tests on each segment, then notifies the user which segments have failed which tests.

Usage
-----

[Download](http://www.danliberatori.com) the minified library and include it in the browser.

```
<script type="text/javascript" src="yakubun.js"></script>
```

Or import it in Node.js.

```
const yakubun = include('yakubun.js')
```

### Public functions

1. Use the `yakubun.scan(bilingualDoc, checkOptions, callback)` function to run scans on a bilingual document. The results for each segment are passed along to the callback function you provide.
2. Use the `yakubun.regexComparer()`, `yakubun.regexReplaceAllFromArray()`, `yakubun.regexReturnAllMatches()`, and `yakubun.compareArrays()` to create your own custom functions to run on each segment.

### Public variables

None at the moment.

Bilingual Document
==================

The bilingual document is where it all begins. Your source text and translation should be split into translation segments and formatted as a Javascript object as follows:

```
bilingualDoc = {
 0: {
  source: "日本語",
  target: "English"
 },
 1: {
  source: "私は犬が好きだ。",
  target: "I like dogs."
 },
 2: {
  source: "私は犬２匹を飼っています。",
  target: "I have 2 dogs."
 }
}
```

checkOptions
============

`checkOptions` is the name of the configuration object required for Yakubun to be able to process your translation. It can take a number of optional key/value pairs that you can use to customize Yakubun's behavior so that it correctly interprets your source and target texts.

### Keys

|Key                                   |Optional    |Type        |Description           |
|--------------------------------------|------------|------------|----------------------|
|`sourceLang` `targetLang`             |_(Optional)_|_string_    |Source and target languages in ISO 639-1 format (e.g., en, ja, es). Japanese is the default and only officially supported source language. English is the default target language, but some minor support for Spanish is also included in the library.|
|`dateFormats`                         |_(Optional)_|_object_    |An object containing regular expressions used to parse dates in your text. If not included, will default to a set of provided regexes. An empty object `{}` can be passed if wanting to remove the defaults.|
|`numIgnoreSource` `numIgnoreTarget`   |_(Optional)_|_array_     |An array of strings or regular expressions that should be ignored when performing a cross-check for numbers. |
|`bannedWordsList`                     |_(Optional)_|_object_    |An object containing regular expressions that should be avoided in the translated text.|
|`sourceTimeZone` `targetTimeZone`     |_(Optional)_|_string_    |Time zones for use when comparing dates and times across time zones. Defaults to "Asia/Tokyo". Yakubun includes the [Moment Timezone](https://momentjs.com/timezone/) library for this kind of check. |
|`numericalLetters`                    |_(Optional)_|_boolean_   |A boolean value used to turn on or off the ability of the number check function to read numbers with Ks and Ms after them as thousands and millions respectively. If set to `true`, 8K in the target text would be counted as 8000, and 1M would be counted as 1,000,000. Defaults to `false`.|
|`requireOxfordComma`                  |_(Optional)_|_boolean_   |A boolean value used to indicate whether your target text should use the Oxford comma or not. Defaults to `true`, meaning that the following text would be flagged: "I like dogs, lions and tigers." If set to `false`, the following text would be flagged: "I like dogs, lions, and tigers."|
|`customBullets`                       |_(Optional)_|_string_    |A string of characters to be included when checking for spaces after bullet points.|
|`customTests`                         |_(Optional)_|_array_     |An array of functions to be called as additional tests after the standard tests are complete. Each custom test is called as `customTest(source, target, checkOptions, oAccumulator)`.|
|`tests`                               |_(Optional)_|_object_    |Used to disable the standard tests.|


Tests
=====

Yakubun comes equipped with a few standard tests. Some check only the target text, others perform crosschecks between the soruce and target. In order to disable one of the standard tests, or to enable the time zone dates check if you wish to use it, you can pass the relevant key with a value of `false` in the `tests` object within `checkOptions`. Custom tests can be added via the `customTests` key in the `checkOptions` object passed to the `scan` function.

1. Banned words

   If a list of banned words is included in the `checkOptions`, Yakubun checks to make sure none of them are included in the target text.
```
bannedWordsList = {
 "CaseInsensitive": ['best','not','use'],
 "CaseSensitive": ['These','woRds']
}
```
2. Double spaces

   Checks to make sure that no double spaces have remained in the target text.

3. Zenkaku characters

   Checks for the presence of the following full-width characters: （,）,：,！, and a full-width space. Additional full-width characters can be specified in `bannedWordsList` if necessary.

4. Repeated words

   Checks for for repeated words in the target text. Includes exceptions for "bye", "hee", "heh", "ha", "woo", and "boo".

5. Bullet spaces

   When using a bullet point to start a segment (or after a newline denoted by "\n"), it checks to make sure that a space exists between the bullet point and whatever text follows it. Recognized bullet points are dashes (-), katakana middle dots (・), black squares (■), and black down-pointing triangles (▼).

6. Oxford commas

   If `requireOxfordComma` is set to true (or left to its default), Yakubun will try to ensure that comma-separated lists of items ending in an "and", "or", or "and/or" include an Oxford comma. If `requireOxfordComma` is set to false, it will do the opposite.

7. Numbered bullets

   By default, Yakubun expects that bulleted (unordered) lists will have a space between the bullet and the following text.
   
   ```
   - This is acceptable
   ■ so is this
   ▼ And so is this
   ・ as is this.
   ```
   
   However
   
   ```
   -This is not
   ■neither is this
   ▼Or this
   ・and certainly not this.
   ```
   
   Additional bullets can be specified via the `customBullets` key in `checkOptions`. Possible bullets should be listed in a single string with no separation. Bullets that occupy more than a single unicode character point will not work. The string will be passed to a regex function, so any special regex characters need to be escaped.

   ```
   checkOptions = {
       customBullets: '>\*'
   }
   ```
   
8. Time zone dates

9. Dates

10. Times

11. Numbers