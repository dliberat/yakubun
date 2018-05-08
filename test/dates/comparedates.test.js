/* global describe, it */
/* eslint no-unused-expressions: off */
import { expect } from 'chai';
import compareDates from '../../src/checks/dates/comparedates';

describe('compareDates', () => {
  const options = {
    sourceLang: 'ja',
    targetLang: 'en',
    dateFormats: {
      ja: [
        ['([0-9]{4})\\u5E74([0-1]?[0-9])\\u6708([0-3]?[0-9])\\u65E5', '{$1-$2-$3}'], // 2017年9月10日
        ['([0-2]?[0-9])[:\\uFF1A]([0-5][0-9]) ([0-1]?[0-9])\\/([0-3]?[0-9])', '{2017-$3-$4 $1:$2}'], // 21:59 09/10
      ],
      en: [
        ['([1]?[0-9]:[0-5][0-9][ap]m), Dec(?:ember)?\\.? ([0-3]?[0-9])', '{2018-12-$2 $1}'], // 12:30pm, Dec. 23
        ['Jan(?:uary)?\\.? ([0-3]?[0-9])', '{2018-1-$1}'], // Jan. 15
        ['([0-1]?[0-9])\\/([0-3]?[0-9]),? ([0-2]?[0-9]:[0-5][0-9][AP]M)', '{2018-$1-$2 $3}'], // 11/5, 16:59AM
        ['GMT\\+9', ' '],
      ],
    },
  };

  it('should always return timeCheck_clean_source and timeCheck_clean_target keys in the accumulator', () => {
    const source = 'こんにちは、世界';
    const target = 'Hello, World!';
    const res = compareDates(source, target, {}, {});
    expect(res[1]).to.be.an('object').that.has.all.keys('timeCheck_clean_target', 'timeCheck_clean_source');
  });
  it('should convert dates to {2017-01-01} format based on the given dateFormats object', () => {
    const source = '2018年1月2日から開催';
    const target = 'starts Jan. 2';
    const res = compareDates(source, target, options, {});
    const cleanSource = res[1].timeCheck_clean_source;
    const cleanTarget = res[1].timeCheck_clean_target;

    expect(cleanSource).to.equal('{2018-1-2}から開催');
    expect(cleanTarget).to.equal('starts {2018-1-2}');
  });
  it('should return no error if there are matching dates', () => {
    const source = '2018年1月2日から開催';
    const target = 'starts Jan. 2';
    const [res] = compareDates(source, target, options, {});
    expect(res.hasError).to.be.false;
  });
  it('should recognize that a date in the source does not exist in the target', () => {
    const source = 'イベント期間：21:59 01/10';
    const target = 'Event period: ';
    const [res] = compareDates(source, target, options, {});
    expect(res.hasError).to.be.true;
  });
  it('should recognize that a date in the target does not exist in the source', () => {
    const source = 'イベント期間：';
    const target = 'Event period: 9:59pm, Dec. 10';
    const [res] = compareDates(source, target, options, {});
    expect(res.hasError).to.be.true;
  });
  it('Return detected dates in the results object', () => {
    const source = 'イベント期間：20:59 2/21 から　2018年3月20日まで';
    const target = 'Event from 8:59pm, Dec. 21 to Jan. 20';
    const [res] = compareDates(source, target, options, {});
    expect(res.sourceDates).to.be.an('array').that.has.lengthOf(2);
    expect(res.targetDates).to.be.an('array').that.has.lengthOf(2);
  });
  it('Parse simple slash dates', () => {
    let source = 'イベント期間： 1/11';
    let target = 'The event is on Jan. 11';
    let [res] = compareDates(source, target, options, {});
    expect(res.hasError).to.be.false;

    source = 'イベント期間： 2017年1月14日';
    target = 'The event is on 1/14';
    [res] = compareDates(source, target, options, {});
    expect(res.hasError).to.be.false;
  });
});
