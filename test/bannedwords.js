/* global describe, it */
import { expect } from 'chai';
import find from '../src/checks/bannedWords';

describe('Search for banned words.', () => {
  it('Returns null if no list exists', () => {
    const list = {};
    const target = 'Check out that sexy Diamond!';

    const [undef] = find('', target, list, undefined);
    expect(undef.hasError).to.equal(false);
  });

  it('Find banned words', () => {
    const list = {
      bannedWordsList: {
        CaseInsensitive: ['sexy'],
        CaseSensitive: ['diamond', '(?!^)(Character)(?! Booster)'],
      },
    };

    it('Works in case insensitive mode', () => {
      const target = 'Check out that Sexy Diamond!';
      const [res] = find('', target, list, undefined);
      expect(res.HTML).to.equal('Suspicious terminology: <span class="text-warning">Sexy</span>');
    });

    it('Works in case sensitive mode', () => {
      const target = 'Check out that cool diamond!';
      const [res] = find('', target, list, undefined);
      expect(res.HTML).to.equal('Suspicious terminology: <span class="text-warning">diamond</span>');
    });

    it.skip('Handles grouping', () => {
      /* this test does not currently work */
      const target = 'Flag Character.';
      const targRes = find('', target, list, undefined);
      const targ = 'Character should not be flagged.';
      const t = 'Also. Character should not be flagged.';

      expect(targRes[0]).to.equal('Suspicious terminology: <span class="text-warning">Character</span>');
    });
  });

  describe('Only one list gets passed', () => {
    const target = 'Check out that sexy diamond!';

    it('Works if there is no case insensitive list', () => {
      const listb = {
        bannedWordsList: {
          CaseSensitive: ['diamond'],
        },
      };
      const [resA] = find('', target, listb, undefined);
      expect(resA.hasError).to.equal(true);
    });

    it('Works if there is no case sensitive list', () => {
      const listc = {
        bannedWordsList: {
          CaseInsensitive: ['sexy'],
        },
      };
      const [resB] = find('', target, listc, undefined);
      expect(resB.HTML).to.equal('Suspicious terminology: <span class="text-warning">sexy</span>');
    });
  });
});
