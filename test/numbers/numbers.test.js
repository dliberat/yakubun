import { expect } from 'chai';
import compareNumbers from '../../src/checks/numbers/numbers';

describe('Numbers check', function(){
   it('Use cleaned strings from timecheck if present', function(){
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
   it('detect missing numbers in the target', function(){
      var source = 'リンゴ5個を持っています。';
      var target = 'I have no apples.';
      const [res] = compareNumbers(source, target, {}, {});
      expect(res.hasError).to.be.true;
   });
   it('detect missing numbers in the source', function(){
      var source = '妹がいます。';
      var target = 'I have 3 sisters';
      const [res] = compareNumbers(source, target);
      expect(res.hasError).to.be.true;
   });
   it('Account for double-byte numbers', function(){
      var source = '１０個の消しゴムを２６７円で買った';
      var target = 'I bought 10 erasers for 268 yen.';
      const [res] = compareNumbers(source, target, {}, {});
      expect(res.hasError).to.be.true;
   });
   it('500万 should match 5,000,000', function(){
      var source = 'みんなで飾りつけたツリーの飾りが500万個を達成';
      var target = 'The number of decorations on the tree reached 5,000,000!';
      const [res] = compareNumbers(source, target);
      expect(res.hasError).to.be.false;
   });
   it('1.5万 should match 15000', function(){
      var source = '先月1.5万円を得た。';
      var target = 'Last month, I made 15,000 yen';
      const [res] = compareNumbers(source, target);
      expect(res.hasError).to.be.false;
   });
   it('filter dates in {2018-02-18} format', function(){
      var source = '{2019-03-10}にハワイに行く';
      var target = 'I will go to Hawaii in the future.';
      const [res] = compareNumbers(source, target);
      expect(res.hasError).to.be.false;
   });
   it('filter dates in {2018-2-10} format', function(){
      var source = '私は{2015-8-9}に妻にあった。２０歳でした。';
      var target = 'I met my wife six years ago. I was 20';
      const [res] = compareNumbers(source, target);
      expect(res.hasError).to.be.false;
   });
   it('filter dates in {2018-12-25 12:00} format', function(){
      var source = 'クリスマスは特別な日です。';
      var target = 'Christmas starts on {2018-12-25 00:00}';
      const [res] = compareNumbers(source, target);
      expect(res.hasError).to.be.false;
   });
   it('filter dates in {2018-1-13 12:00} format', function(){
      var source = '僕の誕生日は{2018-1-10 16:54}です。友達は{2018-5-20 13:14}だよ。';
      var target = 'My birthday is in January, and my friend\'s birthday is in May.';
      const [res] = compareNumbers(source, target);
      expect(res.hasError).to.be.false;
   });
   it('"Once upon a time" should not count as a number', function(){
      var source = '昔々、面白いことがいっぱいありました。';
      var target = 'Once upon a time, there were many interesting things.';
      const [res] = compareNumbers(source, target);
      expect(res.hasError).to.be.false;
   });
   it('Allow "once" and "per" to replace the number 1, only if needed', function(){
      var source = '１日ごとにチケットもらえる';
      var target = 'Get a free ticket once a day.';
      const [res] = compareNumbers(source, target);
      expect(res.hasError).to.be.false;
      
      var s = '１個ずつチャンスある！最大４回もらえる！';
      var t = 'You have 4 chances per coffee cup you drink!';
      var r = compareNumbers(s, t);
      expect(r[0].hasError).to.be.false;

      var a = '薬を１日に３回飲みなさい';
      var b = 'Take your medicine 3 times per day.';
      var c = compareNumbers(a, b);
      expect(c[0].hasError).to.be.false;
   });
   it('convert millions of numbers', function(){
      var source = 'トータル飾り個数が500万個、1,500万個、2,500万個達成時の特別アイテムは、クリスマスツリーに飾りを10個以上寄付されたユーザーに限り支給されます。';
      var target = 'The exclusive item rewards for reaching 5 million, 15 million, and 25 million decorations on the tree are only delivered to players who have put at least 10 decorations on the tree.';
      const [res] = compareNumbers(source, target);
      expect(res.hasError).to.be.false;
   });
   it('detect ① as 1', function(){
      var source = '①';
      var target = '';
      const [res] = compareNumbers(source, target);
      expect(res.hasError).to.be.true;
   });
   it('-[Sクラス]模倣設計図面(1級建築) should not be flagged when passed into the numIgnoreSource object', function(){
      var options = {
         numIgnoreSource: [
               ["\u6A21\u5023\u8A2D\u8A08\u56F3\u9762\x28\x31\u7D1A\u5EFA\u7BC9\x29", " "]
            ]
      };
      var source = '-[Sクラス]模倣設計図面(1級建築)';
      var target = 'Master Architect\'s Opus';
      const [res] = compareNumbers(source, target, options);
      expect(res.hasError).to.be.false;
   });
   it('1度ずつ、１個ずつ、１回ずつ、and １回あたり should all match with an "each" in the target if it is English');
   it('should handle 十二 and other 10+ JP numbers', function(){
      const source = '新スロット「十二仙人物語」登場★';
      const target = 'Play the new 12 Zodiac slots!';
      const res = compareNumbers(source, target);
      expect(res[0].hasError).to.be.false;
   });
});