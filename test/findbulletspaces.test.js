/* global describe, it */
/* eslint no-unused-expressions: off */
import { expect } from 'chai';
import * as langchecks from '../src/checks/checks-language';

describe('Require spaces after bullet points', () => {
  const options = {};

  describe('Return null if there is no error', () => {
    it('Empty string', () => {
      const target = '';
      const [res] = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
      expect(res.hasError).to.equal(false);
    });
    it('Dash at start of input', () => {
      const target = '- I like dogs and everybody else should like dogs, too.';
      const [res] = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
      expect(res.hasError).to.equal(false);
    });
    it('Dash after \\n', () => {
      const target = 'I like dogs, especially:\\n- Shepherds\\n- Retrievers';
      const [res] = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
      expect(res.hasError).to.equal(false);
    });
    it('Black square at start of input', () => {
      const target = '■ I like dogs and everybody else should like dogs, too.';
      const [res] = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
      expect(res.hasError).to.equal(false);
    });
    it('Triangle and square after \\n', () => {
      const target = 'I like dogs, especially:\\n▼ Shepherds\\n■ Retrievers';
      const [res] = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
      expect(res.hasError).to.equal(false);
    });
  });

  describe('Flag errors', () => {
    it('Dash with no space', () => {
      const target = '-8 of 10 doctors say that...';
      const [res] = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
      expect(res.hasError).to.equal(true);
    });

    it('Square after \\n', () => {
      const target = 'The most important things are\\n■Working hard\\n■Staying positive';
      const [res] = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
      expect(res.hasError).to.equal(true);
    });

    it('Bullet followed by brackets', () => {
      const target = '-(9am)';
      const [res] = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
      expect(res.hasError).to.equal(true);
    });

    it('Custom bullets', () => {
      const target = '>this is a test.';
      const opt = {
        customBullets: '>',
      };
      const [res] = langchecks.findBulletsWithNoSpaces('', target, opt, undefined);
      expect(res.hasError).to.equal(true);
    });

    it('No error on custom bullets with regex symbols', () => {
      const target = '* This is a test.';
      const opt = {
        customBullets: '*',
      };
      const [res] = langchecks.findBulletsWithNoSpaces('', target, opt, undefined);
      expect(res.hasError).to.equal(false);
    });
    it('Error on custom bullets with regex symbols', () => {
      const target = '*This is a test.';
      const opt = {
        customBullets: '*',
      };
      const [res] = langchecks.findBulletsWithNoSpaces('', target, opt, undefined);
      expect(res.hasError).to.equal(true);
    });
  });
});
