const expect = require('chai').expect;
const langchecks = require('../src/libs/checks-language.js');

describe('Search for banned words.', function(){
   
   describe('Return null if no list exists', function(){
       it('Returns null', function(){
           var list = {};
           var target = 'Check out that sexy Diamond!';
           
           var undef = langchecks.findBannedWords('', target, list, undefined);
           expect(undef).to.deep.equal([null,undefined]);
       });
   });
   
   describe('Find banned words', function(){
       
        var list = {
            bannedWordsList: {
                'CaseInsensitive': ['sexy'],
                'CaseSensitive': ['diamond', '(?!^)(Character) (?!Booster)']
                }
            }
       
       it('Works in case insensitive mode', function(){
        var target = 'Check out that Sexy Diamond!';
        var caseinsens = langchecks.findBannedWords('', target, list, undefined);
        expect(caseinsens[0]).to.equal('Suspicious terminology: <span class="text-warning">Sexy</span>');
       });
       
       it('Works in case sensitive mode', function(){
        var target = 'Check out that cool diamond!';
        var casesens = langchecks.findBannedWords('', target, list, undefined);
        expect(casesens[0]).to.equal('Suspicious terminology: <span class="text-warning">diamond</span>');
       });
       
       it('Handles grouping', function(){
           var target = 'Flag Character.';
           var targRes = langchecks.findBannedWords('', target, list, undefined);
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
         var res = langchecks.findBannedWords('', target, list, undefined);
         expect(res[0]).to.equal(null);
      });
      
      it('Works if there is no case sensitive list', function(){
         var list = {
              'bannedWordsList': {
                  'CaseInsensitive': ['sexy']
              }
          }
         var res = langchecks.findBannedWords('', target, list, undefined);
         expect(res[0]).to.equal('Suspicious terminology: <span class="text-warning">sexy</span>');
      });
   });
    
});