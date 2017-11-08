const assert = require('assert');
const expect = require('chai').expect;
const langchecks = require('../src/libs/checks-language.js');

describe('Find JP characters', function(){
   var options = {};
   
   describe('Return null if there is no error', function(){
       it('Empty string', function(){
           var target = '';
           var res = langchecks.findJPCharacters('', target, options, undefined);
           expect(res[0]).to.equal(null);
       });
       it('Lorem ipsum text', function(){
          var target = 'I like dogs and everybody else should like dogs, too.';
          var res = langchecks.findJPCharacters('', target, options, undefined);
          expect(res[0]).to.equal(null);
       });
   });
   
   describe('Find banned characters', function(){
       it('（', function(){
        var target = 'This is （sample) text.';
        var res = langchecks.findJPCharacters('', target, options, undefined);
        expect(res[0]).to.equal('Double-byte characters: <span class="text-alert">（</span>');
       });
       
       it('）', function(){
        var target = 'This is (sample） text.';
        var res = langchecks.findJPCharacters('', target, options, undefined);
        expect(res[0]).to.equal('Double-byte characters: <span class="text-alert">）</span>');
       });
       
       it('：', function(){
           var target = 'This is a test： test.';
           var res = langchecks.findJPCharacters('', target, options, undefined);
           expect(res[0]).to.equal('Double-byte characters: <span class="text-alert">：</span>');
       });
       
       it('！', function(){
          var target = 'This is a test！';
          var res = langchecks.findJPCharacters('', target, options, undefined);
          expect(res[0]).to.equal('Double-byte characters: <span class="text-alert">！</span>');
       });
       
       it('space', function(){
          var target = 'This is a　test.';
          var res = langchecks.findJPCharacters('', target, options, undefined);
          expect(res[0]).to.equal('Double-byte characters: <span class="text-alert">[Space]</span>');
       });
       
       it('Multiple', function(){
          var target = 'This is a　test！';
          var res = langchecks.findJPCharacters('', target, options, undefined);
          expect(res[0]).to.equal('Double-byte characters: <span class="text-alert">！ [Space]</span>');
       });
   });
   

});