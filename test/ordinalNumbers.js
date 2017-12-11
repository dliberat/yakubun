/*const expect = require('chai').expect;
import ordinalNumbers from '../src/libs/ordinalNumbers.js';

describe('Catch incorrect ordinal numbers', function(){
    it('Return null for 1st, 2nd, 3rd, 4th, 21st', function(){
       var target = '1st, 2nd, 3rd, 4th, 21st';
       var res = ordinalNumbers('', target);
       expect(res[0]).to.equal(null);
    });
    it('Return null for 5tastic 5th Anniversary', function(){
        var target = '5tastic 5th Anniversary';
        var res = ordinalNumbers('', target);
        expect(res[0]).to.equal(null);
    });
    it('Flag 1nd', function(){
       var target = '1nd';
       var res = ordinalNumbers('', target);
       expect(res[0]).to.equal('Check ordinal numbers.');
    });
    it('Flag 2rd', function(){
        var target = '2rd';
        var res = ordinalNumbers('', target);
        expect(res[0]).to.equal('Check ordinal numbers.');
    });
    it('Flag 101th', function(){
        var target = '101th';
        var res = ordinalNumbers('', target);
        expect(res[0]).to.equal('Check ordinal numbers.');
    });
    it('Don\'t flag am pm', function(){
       var target = 'Until 11am, Dec 27 (GMT+9)';
       var res = ordinalNumbers('', target);
       expect(res[0]).to.equal(null);
    });
    it('Don\'t flag multiplication x', function(){
       var target = '2x the decorations';
       var res = ordinalNumbers('', target);
       expect(res[0]).to.equal(null);
    });
})
*/