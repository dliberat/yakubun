const expect = require('chai').expect;
const mod = require('../src/libs/punctuation.js');

describe('detect incorrect punctuation', function(){
    it('detect periods following quotation marks', function(){
        var target = 'He said "Come here please".';
        var res = mod.quotationMarks('', target, {});
        expect(res[0]).to.equal('Periods should precede quotation marks.');
    });
    it('quotation marks should follow periods if set to UK style', function(){
        var target = '"There\'s no issue here." I said.';
        var res = mod.quotationMarks('', target, { quotationMarks: 'UK'});
        expect(res[0]).to.equal('Quotation marks should precede periods.');
    })
});