/* global describe, it */
/* eslint no-unused-expressions: off */
import { expect } from 'chai';
import verify from '../src/preprocessing/verifyOptions';

describe('Verify an options object', () => {
  it('Return default source and target languages if not provided', () => {
    const obj = { bannedWords: false, doubleSpaces: true, dateFormats: {} };
    expect(verify(obj))
      .to.be.an('object')
      .that.deep.includes({ sourceLang: 'ja', targetLang: 'en' });
  });
  it('Return a bannedWordsList property with case sensitive and insensitve keys', () => {
    const obj = { bannedWordsList: {}, doubleSpaces: true, dateFormats: {} };
    expect(verify(obj).bannedWordsList)
      .to.be.an('object')
      .that.deep.includes({ CaseSensitive: [], CaseInsensitive: [] });

    expect(verify({ dateFormats: {} }).bannedWordsList)
      .to.be.an('object')
      .that.deep.includes({ CaseSensitive: [], CaseInsensitive: [] });

    const obj3 = {
      bannedWordsList: {
        CaseSensitive: ['Dog'],
        targetLang: 'es',
        dateFormats: {},
      },
    };
    expect(verify(obj3).bannedWordsList)
      .to.be.an('object')
      .that.deep.includes({ CaseSensitive: ['Dog'], CaseInsensitive: [] });
  });
  it('Throw error if given bad wordlist', () => {
    const opts = { bannedWordsList: 'comma,dog,line' };
    expect(verify.bind(null, opts)).to.throw();
    const opts2 = { bannedWordsList: ['comma', 'dog', 'pooop'] };
    expect(verify.bind(null, opts2)).to.throw();
  });
  it('Return usable dateFormats by default', () => {
    const res = verify('test');
    expect(res.dateFormats)
      .to.be.an('object')
      .that.has.all.keys('ja', 'en', 'es');

    const arr = Object.keys(res.dateFormats);
    arr.forEach((element) => {
      expect(res.dateFormats[element]).to.be.an('array');
    });
  });
  it('Throw error if given bad language input', () => {
    const options = {
      sourceLang: 'nkl',
    };
    expect(verify.bind(null, options)).to.throw();
  });
  it('Throw error if given bad date formats', () => {
    const options = { targetLang: 'es', dateFormats: { es: /1995.05.23/ } };
    expect(verify.bind(null, options)).to.throw();
    const options2 = { sourceLang: 'ko', dateFormats: { ko: '[0-9]{4}' } };
    expect(verify.bind(null, options2)).to.throw();
  });
});
