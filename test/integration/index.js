const expect = require('chai').expect;
import * as yakubun from '../../src/index';

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
      5: {
        source: '最終ログイン日時が2017年2月7日0時0分より前、且つ、お客さまが保有する「クローバー」（有償のものも含む）のデータのみ（台湾でプレイされているお客さまを除く）',
        target: 'Clovers in storage (both paid for and free) for players not playing in Taiwan whose last login was before 12am, Feb 7, 2017 (GMT+9).',
      }
    };
  });

  it('Callback should be called once for each segment in bilingualDoc', function(){
    yakubun.scan(bilingualDoc, {}, f);
    const keys = Object.keys(bilingualDoc);
    expect(counter).to.equal(keys.length);
  });
  
  it('Detect errors in the text', function(){
    const g = function g(segmentNumber, testResults){
        if (segmentNumber === 2) {
            expect(testResults.doubleSpaces).to.equal('Check for double spaces.');
        } else if (segmentNumber == 5) {
          console.log(testResults);
        }
    };
    yakubun.scan(bilingualDoc, {}, g);
  });
});
