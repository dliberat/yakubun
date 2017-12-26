import quotePunctuation from '../src/checks/quote-punctuation.js';
const expect = require('chai').expect;

describe('detect incorrect punctuation', function(){
    it('detect periods following quotation marks', function(){
        const target = 'He said "Come here please".';
        const [us] = quotePunctuation('', target, {});
        const [uk] = quotePunctuation('', target, {quotationMarks: 'UK'});
        expect(us.hasError).to.equal(true);
        expect(uk.hasError).to.equal(false);
    });
    it('quotation marks should follow periods if set to UK style', function(){
        const target = '"There\'s no issue here." I said.';
        const [uk] = quotePunctuation('', target, { quotationMarks: 'UK'});
        const [us] = quotePunctuation('', target);
        expect(uk.hasError).to.equal(true);
        expect(us.hasError).to.equal(false);
    });
});