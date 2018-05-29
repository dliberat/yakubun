/* global describe, it, beforeEach */
/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { trackNumberedBullets } from '../src/checks/checks-language';

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

  it('Detect ordering errors', () => {
    const [noerror] = trackNumberedBullets(null, '3) test', options, accumulator);
    expect(noerror.hasError).to.be.false;

    const [yeserror] = trackNumberedBullets(null, '5) test', options, accumulator);
    expect(yeserror.hasError).to.be.true;
  });

  it('Create a tracker if none exists', () => {
    const target = 'Sautee the onions.';
    const [, acc] = trackNumberedBullets('', target, options, accumulatorEmpty);
    expect(acc).to.deep.include({ trackNumberedBullets: { period: [], bracket: [] } });
  });

  describe('Add new numbers to existing tracker', () => {
    it('1. Period lists', () => {
      const target = '2. Chop the parsley.';
      const [, acc] = trackNumberedBullets('', target, options, accumulator);
      expect(acc).to.deep.include({ trackNumberedBullets: { period: ['1', '2'], bracket: ['1', '2'] } });
    });
    it('2) Bracket lists', () => {
      const target = '3) Thinly slice the beef.';
      const [, acc] = trackNumberedBullets('', target, options, accumulator);
      expect(acc).to.deep.include({ trackNumberedBullets: { period: ['1'], bracket: ['1', '2', '3'] } });
    });
    it('1) Multiple. 2) Items. 3) On a single. 4) Line.', () => {
      // TODO: Is this really intended behavior? The following should not be captured:
      // Collect A Class Battery (Lv. 1) Pendants and exchange for Battery (Lv. 2).

      const target = '1) Multiple. 2) Items. 3) On a single. 4) Line';
      const [, acc] = trackNumberedBullets('', target, options, accumulatorEmpty);
      expect(acc).to.deep.include({ trackNumberedBullets: { period: [], bracket: ['1', '2', '3', '4'] } });
    });
    it('1. Multiple\\n2.Points separated\\n3. by line breaks');
  });

  describe('Reset tracker after a break in the list', () => {
    it('4) after 2)', () => {
      const target = '4) Mix in the tomato sauce.';
      const [, acc] = trackNumberedBullets('', target, options, accumulator);
      expect(acc).to.deep.include({ trackNumberedBullets: { period: ['1'], bracket: [] } });
    });
    it('1. after 5.', () => {
      // this should cause the list to reset. If the list continues
      // further, it would start counting from 2.
      const target = '1. Preheat oven to 350 F.';
      accumulator.trackNumberedBullets.period = ['1', '2', '3', '4', '5'];
      const [, acc] = trackNumberedBullets('', target, options, accumulator);
      expect(acc).to.deep.include({ trackNumberedBullets: { period: [], bracket: ['1', '2'] } });
    });
  });
});
