import { expect } from 'chai';
import * as util from '../../src/checks/numbers/numbers-utility';

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
   });
   it('convert 12,000,000 into 12000000 for JA', function(){
      var res = util.removeDelimiters('12,000,000', 'ja');
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
   it('implement custom lexical substitutions', function(){
      var arr = [
         ['one', '1'],
         ['two', '2'],
         ['three', '3']
         ];
      var source = 'one, two, three';
      var res = util.subber(source, arr);
      expect(res).to.equal('1, 2, 3');
   });
   it('gracefully handle incorrectly formatted substitution Arrays', function(){
      var substitutions = {
         'one': 1,
         'two': 2
      };
      var source = 'one, two';
      const res = util.subber(source, substitutions);
      const r = util.subber(source, null);
      expect(res).to.equal('one, two');
   });
});
