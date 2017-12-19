const expect = require('chai').expect;
import verify from '../src/verifyOptions';

describe('Verify an options object', function(){
  it('Return default source and target languages if not provided', function(){
    const obj = {
        bannedWords: false,
        doubleSpaces: true,
    };

    const res = verify(obj);
    expect(res).to.be.an('object').that.deep.includes({sourceLang: 'ja', targetLang: 'en'});
  });

  it('Return a bannedWordsList property with case sensitive and insensitve keys', function(){
    const obj = {
        bannedWords: {},
        doubleSpaces: true,
    };
    let res = verify(obj);
     expect(res.bannedWordsList).to.be.an('object').that.deep.includes({CaseSensitive: [], CaseInsensitive: []});

    const obj2 = {};
    res = verify(obj2);
    expect(res.bannedWordsList).to.be.an('object').that.deep.includes({CaseSensitive: [], CaseInsensitive: []});
  
    const obj3 = {
      bannedWordsList: {
          CaseSensitive: ['Dog'],
      },
    };
    res = verify(obj3);
    expect(res.bannedWordsList).to.be.an('object').that.deep.includes({CaseSensitive: ['Dog'], CaseInsensitive: []});
  });
  
  it('dateFormats must be an object with all properties being arrays', function(){
    const res = verify('test');
    expect(res.dateFormats).to.be.an('object').that.has.all.keys('ja','en','es');
    
    const arr = Object.keys(res.dateFormats);
    arr.forEach((element) => {
      expect(res.dateFormats[element]).to.be.an('array');
    });
  });
});