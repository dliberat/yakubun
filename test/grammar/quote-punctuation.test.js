/* global describe, it */
/* eslint no-unused-expressions: off */
import { expect } from 'chai';
import quotePunctuation from '../../src/checks/quote-punctuation';

describe('detect incorrect punctuation', () => {
  it('detect periods following quotation marks', () => {
    const target = 'He said "Come here please".';
    const [us] = quotePunctuation('', target, {});
    const [uk] = quotePunctuation('', target, { quotationMarks: 'UK' });
    expect(us.hasError).to.equal(true);
    expect(uk.hasError).to.equal(false);
  });
  it('quotation marks should follow periods if set to UK style', () => {
    const target = '"There\'s no issue here." I said.';
    const [uk] = quotePunctuation('', target, { quotationMarks: 'UK' });
    const [us] = quotePunctuation('', target);
    expect(uk.hasError).to.equal(true);
    expect(us.hasError).to.equal(false);
  });
  it('detect commas following quotation marks', () => {
    const target = '"This should not be an error", he said emphatically';
    const [us] = quotePunctuation('', target, {});
    const [uk] = quotePunctuation('', target, { quotationMarks: 'UK' });
    expect(us.hasError).to.equal(true);
    expect(uk.hasError).to.equal(false);
  });
});
