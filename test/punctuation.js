const expect = require('chai').expect;
const mod = require('../src/libs/punctuation.js');

describe('detect incorrect punctuation', function(){
    it('detect periods following quotation marks', function(){
        var target = 'He said "Come here please".';
        var res = mod.quotationMarks('', target, {});
        expect(res[0]).to.equal('Periods should precede quotation marks.');
    });
});