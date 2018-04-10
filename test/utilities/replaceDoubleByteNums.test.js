/* global describe, it */
/* eslint no-unused-expressions: off */
import { expect } from 'chai';
import replaceKanjiNums from '../../src/utilities/replaceKanjiNums';

describe('Replace double-byte nums', () => {
  it('Replace digits', () => {
    const retval = replaceKanjiNums('十七');
    expect(retval).to.equal('17');
  });
});
