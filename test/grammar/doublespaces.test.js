/* global describe, it */
/* eslint no-unused-expressions: off */
import { expect } from 'chai';
import findDoubleSpaces from '../../src/checks/doublespaces';

describe('Search for double spaces', () => {
  const options = {};

  describe('Return null if there is no input', () => {
    it('Empty string', () => {
      const target = '';
      const [res] = findDoubleSpaces('', target, options, undefined);
      expect(res.hasError).to.equal(false);
    });
  });

  describe('Find double spaces', () => {
    it('At the beginning of input', () => {
      const target = '  Lorem ipsum';
      const [res] = findDoubleSpaces('', target, options, undefined);
      expect(res.hasError).to.equal(true);
    });

    it('In the middle of input', () => {
      const target = 'Lorem  ipsum';
      const [res] = findDoubleSpaces('', target, options, undefined);
      expect(res.hasError).to.equal(true);
    });

    it('At the end of input', () => {
      const target = 'Lorem ipsum  ';
      const [res] = findDoubleSpaces('', target, options, undefined);
      expect(res.hasError).to.equal(true);
    });
  });
});
