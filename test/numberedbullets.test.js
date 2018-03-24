/* global describe, it, beforeEach */
import { expect } from 'chai';

const langchecks = require('../src/checks/checks-language.js');

describe('Ordered list tracker', () => {
  const options = {};
  let accumulatorEmpty;
  let accumulator;

  beforeEach(() => {
    // reset accumulator before each test
    accumulator = {
      trackNumberedBullets: { period: ['1'], bracket: ['1', '2'] },
    };
    accumulatorEmpty = {};
  });

  describe('Create a tracker if none exists', () => {
    it('Empty accumulator', () => {
      const target = 'Sautee the onions.';
      const res = langchecks.trackNumberedBullets('', target, options, accumulatorEmpty);
      expect(res[1]).to.deep.include({ trackNumberedBullets: { period: [], bracket: [] } });
    });
  });

  describe('Add new numbers to existing tracker', () => {
    it('1. Period lists', () => {
      const target = '2. Chop the parsley.';
      const res = langchecks.trackNumberedBullets('', target, options, accumulator);
      expect(res[1]).to.deep.include({ trackNumberedBullets: { period: ['1', '2'], bracket: ['1', '2'] } });
    });
    it('2) Bracket lists', () => {
      const target = '3) Thinly slice the beef.';
      const res = langchecks.trackNumberedBullets('', target, options, accumulator);
      expect(res[1]).to.deep.include({ trackNumberedBullets: { period: ['1'], bracket: ['1', '2', '3'] } });
    });
    it('1) Multiple. 2) Items. 3) On a single. 4) Line.', () => {
      // TODO: Is this really intended behavior? The following should not be captured:
      // Collect A Class Battery (Lv. 1) Pendants and exchange for Battery (Lv. 2).

      const target = '1) Multiple. 2) Items. 3) On a single. 4) Line';
      const res = langchecks.trackNumberedBullets('', target, options, accumulatorEmpty);
      expect(res[1]).to.deep.include({ trackNumberedBullets: { period: [], bracket: ['1', '2', '3', '4'] } });
    });
    it('1. Multiple\\n2.Points separated\\n3. by line breaks');
  });

  describe('Reset tracker after a break in the list', () => {
    it('4) after 2)', () => {
      const target = '4) Mix in the tomato sauce.';
      const res = langchecks.trackNumberedBullets('', target, options, accumulator);
      expect(res[1]).to.deep.include({ trackNumberedBullets: { period: ['1'], bracket: [] } });
    });
    it('1. after 5.', () => {
      // this should cause the list to reset. If the list continues
      // further, it would start counting from 2.
      const target = '1. Preheat oven to 350 F.';
      accumulator.trackNumberedBullets.period = ['1', '2', '3', '4', '5'];
      const res = langchecks.trackNumberedBullets('', target, options, accumulator);
      expect(res[1]).to.deep.include({ trackNumberedBullets: { period: [], bracket: ['1', '2'] } });
    });
  });
});
