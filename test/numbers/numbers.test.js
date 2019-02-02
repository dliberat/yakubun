/* global describe, it */
/* eslint no-unused-expressions: off, no-console: off */
import { expect } from 'chai';
import compareNumbers from '../../src/checks/numbers/numbers';

describe('Numbers check', () => {
  it('Use cleaned strings from timecheck if present', () => {
    const source = '12';
    const target = '11';
    const options = {};
    const accumulator = {
      timeCheck_clean_source: '2',
      timeCheck_clean_target: '2',
    };

    const [res] = compareNumbers(source, target, options, accumulator);
    expect(res.hasError).to.be.false;
  });
  it('detect missing numbers in the target', () => {
    const source = 'リンゴ5個を持っています。';
    const target = 'I have no apples.';
    const [res] = compareNumbers(source, target, {}, {});
    expect(res.hasError).to.be.true;
  });
  it('detect missing numbers in the source', () => {
    const source = '妹がいます。';
    const target = 'I have 3 sisters';
    const [res] = compareNumbers(source, target);
    expect(res.hasError).to.be.true;
  });
  it('Account for double-byte numbers', () => {
    const source = '１０個の消しゴムを２６７円で買った';
    const target = 'I bought 10 erasers for 268 yen.';
    const [res] = compareNumbers(source, target, {}, {});
    expect(res.hasError).to.be.true;
  });
  it('500万 should match 5,000,000', () => {
    const source = 'みんなで飾りつけたツリーの飾りが500万個を達成';
    const target = 'The number of decorations on the tree reached 5,000,000!';
    const [res] = compareNumbers(source, target);
    expect(res.hasError).to.be.false;
  });
  it('５７万６８３０ should match 576,830', () => {
    const source = '５７万６８３０人が志願している';
    const target = ' 576,830 applicants,';
    const [res] = compareNumbers(source, target);
    expect(res.hasError).to.be.false;
  });
  it('５７万2千450 should match 572,450', () => {
    const source = '５７万2千450';
    const target = '572,450';
    const [res] = compareNumbers(source, target);
    expect(res.hasError).to.be.false;
  });
  it('５７万2千 should match 572000', () => {
    const source = '５７万2千';
    const target = '572000';
    const [res] = compareNumbers(source, target);
    expect(res.hasError).to.be.false;
  });
  it('1.5万 should match 15000', () => {
    const source = '先月1.5万円を得た。';
    const target = 'Last month, I made 15,000 yen';
    const [res] = compareNumbers(source, target);
    expect(res.hasError).to.be.false;
  });
  it('filter dates in {2018-02-18} format', () => {
    const source = '{2019-03-10}にハワイに行く';
    const target = 'I will go to Hawaii in the future.';
    const [res] = compareNumbers(source, target);
    expect(res.hasError).to.be.false;
  });
  it('filter dates in {2018-2-10} format', () => {
    const source = '私は{2015-8-9}に妻にあった。20歳でした。';
    const target = 'I met my wife six years ago. I was 20';
    const [res] = compareNumbers(source, target);
    expect(res.hasError).to.be.false;
  });
  it('filter dates in {2018-12-25 12:00} format', () => {
    const source = 'クリスマスは特別な日です。';
    const target = 'Christmas starts on {2018-12-25 00:00}';
    const [res] = compareNumbers(source, target);
    expect(res.hasError).to.be.false;
  });
  it('filter dates in {2018-1-13 12:00} format', () => {
    const source = '僕の誕生日は{2018-1-10 16:54}です。友達は{2018-5-20 13:14}だよ。';
    const target = 'My birthday is in January, and my friend\'s birthday is in May.';
    const [res] = compareNumbers(source, target);
    expect(res.hasError).to.be.false;
  });
  it('"Once upon a time" should not count as a number', () => {
    const source = '昔々、面白いことがいっぱいありました。';
    const target = 'Once upon a time, there were many interesting things.';
    const [res] = compareNumbers(source, target);
    expect(res.hasError).to.be.false;
  });
  it('Allow "once" and "per" to replace the number 1, only if needed', () => {
    const [once] = compareNumbers('1ごとにチケットもらえる', 'Get a free ticket once a day.');
    expect(once.hasError).to.be.false;

    const [per] = compareNumbers('薬を1に３回飲みなさい', 'Take medicine 3 times per day.');
    expect(per.hasError).to.be.false;
  });
  it('convert millions of numbers', () => {
    const source = 'トータル飾り個数が500万個、1,500万個、2,500万個達成時の特別アイテムは、クリスマスツリーに飾りを10個以上寄付されたユーザーに限り支給されます。';
    const target = 'The exclusive item rewards for reaching 5 million, 15 million, and 25 million decorations on the tree are only delivered to players who have put at least 10 decorations on the tree.';
    const [res] = compareNumbers(source, target);
    expect(res.hasError).to.be.false;
  });
  it('detect ① as 1', () => {
    const source = '①';
    const target = '';
    const [res] = compareNumbers(source, target);
    expect(res.hasError).to.be.true;
  });
  it('detect ② as 2', () => {
    const source = '② TEST';
    const target = '2. TEST';
    const [res] = compareNumbers(source, target);
    expect(res.hasError).to.be.false;
  });
  it('-[Sクラス]模倣設計図面(1級建築) should not be flagged when passed into the numIgnoreSource object', () => {
    const options = {
      numIgnoreSource: [
        ['\u6A21\u5023\u8A2D\u8A08\u56F3\u9762\x28\x31\u7D1A\u5EFA\u7BC9\x29', ' '],
      ],
    };
    const source = '-[Sクラス]模倣設計図面(1級建築)';
    const target = 'Master Architect\'s Opus';
    const [res] = compareNumbers(source, target, options);
    expect(res.hasError).to.be.false;
  });
  it('1度ずつ、１個ずつ、１回ずつ、and １回あたり should all match with an "each" in the target if it is English');
  it('should handle 十二 and other 10+ JP numbers', () => {
    const source = '新スロット「十二仙人物語」登場★';
    const target = 'Play the new 12 Zodiac slots!';
    const [res] = compareNumbers(source, target);
    expect(res.hasError).to.be.false;
  });
  it('Delineate thousands with commas in output', () => {
    const source = '4,000,000 DL!';
    const target = '1,000 downloads!';
    const [res] = compareNumbers(source, target);
    expect(res.hasError).to.be.true;
    expect(res.plainText).to.include('4,000,000');
    expect(res.plainText).to.include('1,000');
  });
});
