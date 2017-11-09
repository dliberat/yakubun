const expect = require('chai').expect;
const num = require('../src/libs/numbers.js');
const util = require('../src/libs/numbers-utility.js');

describe('Numbers check', function(){
   it('Should detect missing numbers in the target', function(){
      var source = 'リンゴ5個を持っています。';
      var target = 'I have no apples.';
      var res = num.compareNumbers(source, target, {}, {});
      expect(res[0]).to.equal('Found <span class="text-warning">5</span> in source and <span class="text-warning">nothing</span> in target.');
   });
   it('Should be able to handle double-byte numbers');
   it('500万 should match 5,000,000', function(){
      var source = 'みんなで飾りつけたツリーの飾りが500万個を達成';
      var target = 'The number of decorations on the tree reached 5,000,000!';
      var res = num.compareNumbers(source, target);
      expect(res[0]).to.equal(null);
   });
   it('1度ずつ、１個ずつ、１回ずつ、and １回あたり should all match with an "each" in the target if it is English');
    
});

describe('Number utilities', function(){
   it('convert 5,000 into 5000 for EN', function(){
      var res = util.removeDelimiters('5,000', 'en');
      expect(res).to.equal('5000');
   });
   it('convert 2,000,000 into 2000000 for EN', function(){
      var res = util.removeDelimiters('2,000,000', 'en');
      expect(res).to.equal('2000000');
   });
   it('convert 1.000.000 into 1000000 for ES', function(){
      var res = util.removeDelimiters('1.000.000', 'es');
      expect(res).to.equal('1000000');
   })
   it('convert 12,000,000 into 12000000 for JA', function(){
      var res = util.removeDelimiters('12,000,000', 'ja')
      expect(res).to.equal('12000000');
   });
   it('convert 12K into 12000', function(){
      var res = util.letterSubs('12K');
      expect(res).to.equal('12000');
   });
   it('convert 1.1M into 1100000', function(){
      var res = util.letterSubs('1.1M Coins');
      expect(res).to.equal('1100000 Coins');
   });
   it('implement custom lexical substitutions');
});