const expect = require('chai').expect;
import * as yakubun from '../src/index';

let counter = 0;
let bilingualDoc;

function f (testName, testResult) {
  counter += 1; 
}

describe('Entry point - index.js', function(){

  beforeEach(function(){
    counter = 0;
    bilingualDoc = {
      0: {
        source: '日本語',
        target: 'Japanese'
      },
      1: {
        source: '犬',
        target: 'Dog'
      },
      2: {
        source: 'わんわんが好きです。',
        target: 'I like  dogs.'
      },
      3: {
        source: 'カードクリアでコイン×10000GET！',
        target: 'Complete to get 10,000 Coins!',
      },
      4: {
        source: '期間：9/26 16:59',
        target: 'Til 9/26, 12:59AM (PDT).',
      },
    };
  });

  it('Callback should be called once for each segment in bilingualDoc', function(){
    yakubun.scan(bilingualDoc, {}, f);
    const keys = Object.keys(bilingualDoc);
    expect(counter).to.equal(keys.length);
  });
  
  it('Detect errors in the text', function(){
    const g = function g(segmentNumber, testResults){
        if (segmentNumber == 2) {
            //testResults.doubleSpaces = 'Check for double spaces.';
            expect(testResults.doubleSpaces).to.equal('Check for double spaces.');
        }
    };
    
    yakubun.scan(bilingualDoc, {}, g);
  });
});
