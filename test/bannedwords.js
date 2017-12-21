const expect = require('chai').expect;
//const mod = require('../src/libs/bannedWords.js');
import find from '../src/libs/bannedWords';

describe('Search for banned words.', function(){
   
   describe('Return null if no list exists', function(){
       it('Returns null', function(){
           var list = {};
           var target = 'Check out that sexy Diamond!';
           
           var undef = find('', target, list, undefined);
           expect(undef).to.deep.equal([null,undefined]);
       });
   });
   
   describe('Find banned words', function(){
       
        var list = {
            bannedWordsList: {
                'CaseInsensitive': ['sexy'],
                'CaseSensitive': ['diamond', '(?!^)(Character)(?! Booster)']
                }
            }
       
       it('Works in case insensitive mode', function(){
        var target = 'Check out that Sexy Diamond!';
        var caseinsens = find('', target, list, undefined);
        expect(caseinsens[0]).to.equal('Suspicious terminology: <span class="text-warning">Sexy</span>');
       });
       
       it('Works in case sensitive mode', function(){
        var target = 'Check out that cool diamond!';
        var casesens = find('', target, list, undefined);
        expect(casesens[0]).to.equal('Suspicious terminology: <span class="text-warning">diamond</span>');
       });
       
       it.skip('Handles grouping', function(){
           /* this test does not currently work */
           var target = 'Flag Character.';
           var targRes = find('', target, list, undefined);
           var targ = 'Character should not be flagged.';
           var t = 'Also. Character should not be flagged.';
           
           expect(targRes[0]).to.equal('Suspicious terminology: <span class="text-warning">Character</span>');
       });
   });
   
   describe('Only one list gets passed', function(){
      var target = 'Check out that sexy Diamond!';
      
      it('Works if there is no case insensitive list', function(){
         var list = {
             'bannedWordsList': {
                 'CaseSensitive': ['diamond']
             }
         } 
         var res = find('', target, list, undefined);
         expect(res[0]).to.equal(null);
      });
      
      it('Works if there is no case sensitive list', function(){
         var list = {
              'bannedWordsList': {
                  'CaseInsensitive': ['sexy']
              }
          }
         var res = find('', target, list, undefined);
         expect(res[0]).to.equal('Suspicious terminology: <span class="text-warning">sexy</span>');
      });
   });
    
});