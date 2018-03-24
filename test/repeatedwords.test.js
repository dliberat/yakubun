/* global describe, it */
/* eslint no-unused-expressions: off */
import { expect } from 'chai';
import findRepeatedWords from '../src/checks/repeatedwords';

describe('Find repeated words', () => {
  const options = {};

  describe('Return null if there is no error', () => {
    it('Empty string', () => {
      const target = '';
      const [res] = findRepeatedWords('', target, options, undefined);
      expect(res.hasError).to.equal(false);
    });
    it('Lorem ipsum text', () => {
      const target = 'I like dogs and everybody else should like dogs, too.';
      const [res] = findRepeatedWords('', target, options, undefined);
      expect(res.hasError).to.equal(false);
    });
  });

  describe('Find repeated words', () => {
    it('Find repeated words', () => {
      const target = 'This is is sample text.';
      const [res] = findRepeatedWords('', target, options, undefined);
      expect(res.plainText).to.equal('Repeated words: is');
    });

    it('Ignore case and find repeated words', () => {
      const target = 'This this is sample text.';
      const [res] = findRepeatedWords('', target, options, undefined);
      expect(res.plainText).to.equal('Repeated words: this');
    });

    it('Do not flag words in ignore list', () => {
      const target = 'This is a test, ha ha ha.';
      const [res] = findRepeatedWords('', target, options, undefined);
      expect(res.hasError).to.equal(false);
    });
  });
});
