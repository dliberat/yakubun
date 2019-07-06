# YAKUBUN
[![Build Status](https://travis-ci.org/garroadran/yakubun.svg?branch=master)](https://travis-ci.org/garroadran/yakubun)
[![Coverage Status](https://coveralls.io/repos/github/garroadran/yakubun/badge.svg?branch=master)](https://coveralls.io/github/garroadran/yakubun?branch=master)

## Overview

Yakubun is a Javascript library designed to help Japanese translators check their work.
It takes a document comprised of source language and target language segments and runs a series of checks on each segment, then notifies the user which segments have failed which checks.

### Installation

Download the minified library and include it in the browser.

```
<script type="text/javascript" src="yakubun.js"></script>
```

Alternatively, install the npm package and import it into your project.

```
npm install yakubun
```

```
   import yakubun from 'yakubun';
```

### Live Demo

You can play around with an implementation of Yakubun that interacts with the Google Sheets API at http://danliberatori.com/projects/yakubun


### Usage

Use the `yakubun.scan(bilingualDoc, checkOptions)` function to run scans on a bilingual document. The results for each segment are passed along to the callback function you provide.

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
|`customChecks`                         |_(Optional)_|_array_     |An array of functions to be called as additional checks after the standard checks are complete. Each custom check is called as `customCheck(source, target, checkOptions, oAccumulator)`.|
|`checks`                               |_(Optional)_|_object_    |Used to disable the standard checks.|


Standard checks
==============

Yakubun comes equipped with a few standard checks. Some check only the target text, others perform crosschecks between the source and target. In order to disable one of the standard checks, or to enable the time zone dates check if you wish to use it, you can pass the relevant key with a value of `false` in the `checks` object within `checkOptions`. Custom checks can be added via the `customChecks` key in `checkOptions`.

1. Banned words (`bannedWords`)

   If a list of banned words is included in the `checkOptions`, Yakubun checks to make sure none of them are included in the target text.
```
bannedWordsList = {
 "CaseInsensitive": ['best','not','use'],
 "CaseSensitive": ['These','woRds']
}
```
2. Double spaces (`doubleSpaces`)

   Checks to make sure that no double spaces have remained in the target text.

3. Zenkaku characters (`zenkakuCharacters`)

   Checks for the presence of the following full-width characters: （,）,：,！, full-width full stops (．), and a full-width space. Additional full-width characters can be specified in `bannedWordsList` if necessary.

4. Repeated words (`repeatedWords`)

   Checks for for repeated words in the target text. Includes exceptions for "bye", "hee", "heh", "ha", "woo", and "boo".

5. Ordinal numbers (`ordinalNumbers`)

   This check currently only works with English as the target language. It looks for Arabic numerals followed by one or two letters (e.g., 1st, 2nd, 3rd) and expects that they follow the standard spelling, such that things like 1nd, 4rd, 251nd will be flagged.

6. Bullet spaces (`bulletSpaces`)

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

7. Oxford commas

   If `requireOxfordComma` is set to true (or left to its default), Yakubun will try to ensure that comma-separated lists of items ending in an "and", "or", or "and/or" include an Oxford comma. If `requireOxfordComma` is set to false, it will do the opposite.

8. Numbered bullets

   Yakubun scans your target segments for instances of Arabic numerals followed by either a period or a closing bracket, indicating an ordered list.

   ```
   Groceries
   1) Apples
   2) Bananas
   3) Milk
   5) Cheese
   ```

   If Yakubun encounters an unexpected number in the sequence (such as the 5 in the example above), it will flag it as a potential error.

   Since Yakubun treats bracket sequences and period sequences separately, it should not flag lists with sublists inside of them, but it will flag lists with inconsistent punctuation.

   ```
   1) Groceries
      1. Apples
      2. Bananas
   2) Emails to write
      1. Bob
      2. Jenna
      3. Timmy
   // function returns NULL (no error detected)

   Favorite captains
   1. Picard
   2. Kirk
   3) Sisko
   4. Janeway
   // function returns 'Suspected error in numbered list (# sequence or punctuation).'
   ```

9. Time zone dates

   This is the least-tested module in the library. It extracts dates and times from your source and target texts based on a series of regular expressions that you pass in the `checkOptions` object. Fundamentally, it works in the same way as the regular dates check, except it requires that all dates in the `{2018-3-21 14:00}` format include times. Dates without times will not be parsed by this check. You can also pass information about which time zone your target text is in (defaults to America/Los_Angeles), and then Yakubun uses the Moment Timezone library to check whether or not the source text date (in the source text time zone, usually Asia/Tokyo) is equivalent to the target date in the target time zone.

10. Dates

   The `compareDates` (and `compareDatesTz`) function sends your source and target texts through a variety of filters to convert any dates that appear in your text into the following format {YYYY-MM-DD HH:MM}. If no time information is available, `compareDates` works equally well with {YYYY-MM-DD}, although `compareDatesTz` does not.
   The first filter converts any double-byte numbers such as １,２, or ３ into their single-byte equivalents, 1, 2, and 3.
   The second filter runs a series of regular expression searches on the target text for Japanese text that could be misinterpreted as dates, such as ４日連続. In these cases, the filter preserves the number, but discards the 日 character to ensure that the text in question is not caught by a later filter.
   A third filter ensures that all target language times include minutes, such that 2pm becomes 2:00pm, and 11am becomes 11:00am.
   Next, `compareDates` uses a series of regular expressions passed in the `checkOptions.dateFormats` object to convert dates into the {YYYY-MM-DD HH:MM} or {YYYY-MM-DD} format.
   `checkOptions.dateFormats` should contain an array for source and target languages:

   ```
   {
      'ja': [],

      'en': []
   }
   ```

   And each array should contain arrays that tell `compareDates` what to search for, and how to perform the replacement.

   ```
   {
      'ja': [
        ['([0-9]{4})\\u5E74([0-1]?[0-9])\\u6708([0-3]?[0-9])\\u65E5\\s?([0-2]?[0-9])[\\u6642\\uFF1A:]([0-5][0-9])', '{$1-$2-$3 $4:$5}'], // 2017年9月10日10時３０分
        ['([0-1]?[0-9])\\u6708([0-3]?[0-9])\\u65E5\\s?([0-2]?[0-9])[\\u6642\\uFF1A:]([0-5][0-9])', '{' + thisYear + '-$1-$2 $3:$4}'] // 9月10日10時３０分
      ],

      'en': [
        ['([1]?[0-9]:[0-5][0-9][ap]m), Jan(?:uary)?\\.? ([0-3]?[0-9])', '{' + thisYear + '-1-$2 $1}'], // 12:30pm, Jan. 23
        ['([1]?[0-9]:[0-5][0-9][ap]m), Feb(?:ruary)?\\.? ([0-3]?[0-9])', '{' + thisYear + '-2-$2 $1}']
      ]
   }
   ```

   Note the use of the `thisYear` variable. You must carefully consider how to fill in missing data so as to minimize the amount of false positives that translators will see.

   Finally, a fourth filter searches for times with am or pm behind them and attempts to convert these to 24 hour clock format.

   `compareDates` now scans the resulting "clean" strings for substrings in the format {YYYY-MM-DD HH:MM} or {YYYY-MM-DD} and uses the matches to create an array of Moments. Before comparing the source and target arrays though, it also performs an additional scan for substrings in the format MM/DD, which it stores away in a separate side array.

   When `compareDates` compares the Moments generated from the source text against the moments generated from the target text, if there is a Moment that does not have a match, it will look in the side arrays to see if it can find a match. In this way, numbers like 9/13 will be parsed as dates if the translator has translated them faithfully, but will otherwise be ignored since they most likely represent fractions. Any so-called "slash dates" that `compareDates` identifies will be removed from the clean strings.

   Before completing, `compareDates` stores its clean strings inside an accumulator object so that the Numbers check can use them. That way, when the Numbers check tries to compare the numbers in the source and target, it won't run into issues with dates that are expressed as numbers in the source (e.g., ６月) but words in the target ("June").

11. Times

   The time check module begins by executing a series of find-and-replaces against the provided segment. It searches for times written in the standard HH:MM format as well as times written using Japanese characters (such as "13時24分").

   Next, the `convertTimesToISO` utility is used to convert the times that were parsed into the ISO standard date format. This allows the times to be cast as Moment.js objects, which makes comparing the source and target language times a bit easier. Note that in order to do this, the ISO date format requires a date, and May 20 1985 is selected arbitrarily as a default date. This can occasionally lead to some cryptic error messages.

   Once the times from the source and target texts have been parsed and converted into Moment.js objects, the times are sorted. By sorting before we compare, we avoid false positives in situations where translators reorder certain statements. 
   
   _Example: The following translation will not result in a warning_

   ```
      source: １８時 まで 作業 できる。図書館は朝９時から入れる。
      target: The library opens at 9am, and you can work there until 6pm.

   ```

   If the time check module detects any errors, it will output all the times that it has detected in the source and target texts and leave it up to the translator to determine whether the error is legitimate. By allowing the translator to see every single time that appears in the segment it becomes easier to spot any legitimate errors that exist in the translation, as well as any potential parsing errors that Yakubun has made.


12. Numbers

   Details coming soon.

13. Quotation Punctuation

   Throws a warning when quoted text is followed by a period or comma after the final quote (e.g. "This is incorrect", he said.). Pass in the parameter `quotationMarks: 'UK'` in `checkOptions` to reverse the behavior, so that "this quote throws up a warning."

Custom checks
============

You can define your own custom checks to be run on each segment of your bilingual document as follows:

```
checkOptions = {
    customChecks: [
        ['myFirstCheck', function(source, target, checkOptions, accumulator){ }],
        ['mySecondCheck', function(source, target, checkOptions, accumulator){ }],
    ]
}
```

`customChecks` must be an array of [_string_, _function_]. Each function will get called for each translation with the source text, target text, your checkOptions, and an accumulator object as parameters. The accumulator object is used to pass data along from segment to segment. You can use it, for example, to ensure that if a certain source text has already appeared once in the text, that it will always have the same translation.

```
function customCheck(source, target, checkOptions, accumulator){
    var retval = null;

    // create a tracker if it doesn't already exist
    if(!accumulator.hasOwnProperty('tracker')){
        accumulator.tracker = {};
    }

    // create an entry for the current source text if it doesn't exist
    if(!accumulator.tracker.hasOwnProperty(source)){
        accumulator.tracker[source] = target;

    // if the entry exists, confirm that the target text is the same
    } else if(accumulator.tracker[source] != target){
            retval = 'Same source but different targets: ';
            retval += accumulator.tracker[source] + ' <> ';
            retval += target;
    }
  }

  return [retval, accumulator];
}
```

Pay special attention to the return value of the custom function. It must be an array. The first element of the array should be a `CheckResult` object. The second element in the array should be the accumulator object, so that it can be passed ahead to the next check.

CheckResult and other useful resources
--------------------

The `CheckResult` object required in the return value of a check function can be constructed trivially. It should simply be an object with (at least) the following values.

```
   const checkResult = {
       checkName: string,
       description: string,
       hasError: boolean,
       HTML: string,
       plainText: string
   }
```

A basic constructor for this object, as well as a few other useful functions for use when crafting custom checks, are available in a the [yakubun-utils](https://github.com/garroadran/yakubun-utils) package.