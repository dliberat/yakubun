/* global describe, it */
/* eslint no-unused-expressions: off */
import { expect } from 'chai';
import detectOxfordCommas from '../../src/checks/oxfordcomma';

describe('Detect Oxford commas', () => {
  const options = {};
  const optionsDisabled = { requireOxfordComma: false };

  describe('Return false if there is no error', () => {
    it('Empty string', () => {
      const target = '';
      const [res] = detectOxfordCommas('', target, options, undefined);
      expect(res.hasError).to.be.false;
    });
    it('One, two, and three', () => {
      const target = 'One, two, and three.';
      const [res] = detectOxfordCommas('', target, options, undefined);
      expect(res.hasError).to.be.false;
    });
    it('One, two, or three', () => {
      const target = 'One, two, or three';
      const [res] = detectOxfordCommas('', target, options, undefined);
      expect(res.hasError).to.be.false;
    });
    it('One, two, and/or three', () => {
      const target = 'One, two, and/or three';
      const [res] = detectOxfordCommas('', target, options, undefined);
      expect(res.hasError).to.be.false;
    });
    it('requireOxfordComma: false - One, two and three', () => {
      const target = 'One, two and three';
      const [res] = detectOxfordCommas('', target, optionsDisabled, undefined);
      expect(res.hasError).to.be.false;
    });
  });

  describe('Flag errors', () => {
    it('One, two and three', () => {
      const target = 'One, two and three';
      const [res] = detectOxfordCommas('', target, options, undefined);
      expect(res.hasError).to.be.true;
    });

    it('requireOxfordComma: false - One, two, and three', () => {
      const target = 'One, two, and three';
      const [res] = detectOxfordCommas('', target, optionsDisabled, undefined);
      expect(res.hasError).to.be.true;
    });
  });
});
