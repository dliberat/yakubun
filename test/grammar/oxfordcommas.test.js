import { expect } from 'chai';
import detectOxfordCommas from '../../src/checks/oxfordcomma';

describe('Detect Oxford commas', function(){
   var options = {};
   var optionsDisabled = { requireOxfordComma: false };
 
   describe('Return false if there is no error', function(){
       it('Empty string', function(){
           const target = '';
           const [res] = detectOxfordCommas('', target, options, undefined);
           expect(res.hasError).to.equal(false);
       });
       it('One, two, and three', function(){
          const target = 'One, two, and three.';
          const [res] = detectOxfordCommas('', target, options, undefined);
          expect(res.hasError).to.equal(false);
       });
       it('One, two, or three', function(){
        const target = 'One, two, or three';
        const [res] = detectOxfordCommas('', target, options, undefined);
        expect(res.hasError).to.equal(false);
       });
       it('One, two, and/or three', function(){
          const target = 'One, two, and/or three';
          const [res] = detectOxfordCommas('', target, options, undefined);
          expect(res.hasError).to.equal(false);
       });
       it('requireOxfordComma: false - One, two and three', function(){
        const target = 'One, two and three';
        const [res] = detectOxfordCommas('', target, optionsDisabled, undefined);
       });
   });
   
   describe('Flag errors', function(){
       it('One, two and three', function(){
        const target = 'One, two and three';
        const [res] = detectOxfordCommas('', target, options, undefined);
        expect(res.hasError).to.equal(true);
       });
       
       it('requireOxfordComma: false - One, two, and three', function(){
        const target = 'One, two, and three';
        const [res] = detectOxfordCommas('', target, optionsDisabled, undefined);
        expect(res.hasError).to.equal(true);
       });
       
   });
});