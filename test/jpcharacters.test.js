/* global describe, it */
/* eslint no-unused-expressions: off */
import { expect } from 'chai';
import * as langchecks from '../src/checks/checks-language';

describe('Find JP characters', () => {
  const options = {};

  describe('Return null if there is no error', () => {
    it('Empty string', () => {
      const target = '';
      const [res] = langchecks.findJPCharacters('', target, options, undefined);
      expect(res.hasError).to.equal(false);
    });
    it('Lorem ipsum text', () => {
      const target = 'I like dogs and everybody else should like dogs, too.';
      const [res] = langchecks.findJPCharacters('', target, options, undefined);
      expect(res.hasError).to.equal(false);
    });
  });

  describe('Find banned characters', () => {
    it('（', () => {
      const target = 'This is （sample) text.';
      const [res] = langchecks.findJPCharacters('', target, options, undefined);
      expect(res.HTML).to.equal('Double-byte characters: <span class="text-alert">（</span>');
    });

    it('）', () => {
      const target = 'This is (sample） text.';
      const [res] = langchecks.findJPCharacters('', target, options, undefined);
      expect(res.HTML).to.equal('Double-byte characters: <span class="text-alert">）</span>');
    });

    it('：', () => {
      const target = 'This is a test： test.';
      const [res] = langchecks.findJPCharacters('', target, options, undefined);
      expect(res.HTML).to.equal('Double-byte characters: <span class="text-alert">：</span>');
    });

    it('！', () => {
      const target = 'This is a test！';
      const [res] = langchecks.findJPCharacters('', target, options, undefined);
      expect(res.HTML).to.equal('Double-byte characters: <span class="text-alert">！</span>');
    });

    it('space', () => {
      const target = 'This is a　test.';
      const [res] = langchecks.findJPCharacters('', target, options, undefined);
      expect(res.HTML).to.equal('Double-byte characters: <span class="text-alert">[Space]</span>');
    });

    it('Multiple', () => {
      const target = 'This is a　test！';
      const [res] = langchecks.findJPCharacters('', target, options, undefined);
      expect(res.HTML).to.equal('Double-byte characters: <span class="text-alert">！ [Space]</span>');
    });
    it('Numbers', () => {
      const target = 'This is a　test１２３４５６７８９';
      const [res1] = langchecks.findJPCharacters('', target, options, undefined);
      expect(res.HTML).to.equal('Double-byte characters: <span class="text-alert">１ ２ ３ ４ ５ ６ ７ ８ ９</span>');
    });
    it('＋', () => {
      const target = 'This＋is a test';
      const [res] = langchecks.findJPCharacters('', target, options, undefined);
      expect(res.hasError).to.be.true;
    });
    it('※', () => {
      const target = '※ This is a test';
      const [res] = langchecks.findJPCharacters('', target, options, undefined);
      expect(res.hasError).to.be.true;
    });
  });
});
