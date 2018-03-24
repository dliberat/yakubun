/* global describe, it */
/* eslint no-unused-expressions: off */
import { expect } from 'chai';
import preprocess from '../src/preprocessing/preprocess';

describe('Preprocessing bilingualDoc', () => {
  it('convert ０１２３４５６７８９ to 0123456789', () => {
    const fDoc = {
      0: {
        source: '０１２３４５６７８９',
      },
    };
    const res = preprocess(fDoc);
    expect(res['0'].source).to.equal('0123456789');
  });
});
