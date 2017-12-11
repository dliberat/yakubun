const expect = require('chai').expect;
import detectOxfordCommas from '../src/libs/oxfordcomma';

describe('Detect Oxford commas', function(){
   var options = {};
   var optionsDisabled = { requireOxfordComma: false };
 
   describe('Return null if there is no error', function(){
       it('Empty string', function(){
           var target = '';
           var res = detectOxfordCommas('', target, options, undefined);
           expect(res[0]).to.equal(null);
       });
       it('One, two, and three', function(){
          var target = 'One, two, and three.';
          var res = detectOxfordCommas('', target, options, undefined);
          expect(res[0]).to.equal(null);
       });
       it('One, two, or three', function(){
        var target = 'One, two, or three';
        var res = detectOxfordCommas('', target, options, undefined);
        expect(res[0]).to.equal(null);
       });
       it('One, two, and/or three', function(){
          var target = 'One, two, and/or three';
          var res = detectOxfordCommas('', target, options, undefined);
          expect(res[0]).to.equal(null);
       });
       it('requireOxfordComma: false - One, two and three', function(){
        var target = 'One, two and three';
        var res = detectOxfordCommas('', target, optionsDisabled, undefined);
       });
   });
   
   describe('Flag errors', function(){
       it('One, two and three', function(){
        var target = 'One, two and three';
        var res = detectOxfordCommas('', target, options, undefined);
        expect(res[0]).to.equal('Possibly missing an Oxford comma.');
       });
       
       it('requireOxfordComma: false - One, two, and three', function(){
        var target = 'One, two, and three';
        var res = detectOxfordCommas('', target, optionsDisabled, undefined);
        expect(res[0]).to.equal('Oxford comma detected.');
       });
       
   });
});