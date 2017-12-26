import find from '../src/checks/bannedWords';
const expect = require('chai').expect;

describe('Search for banned words.', function(){
   
   describe('Return null if no list exists', function(){
       it('Returns null', function(){
           var list = {};
           var target = 'Check out that sexy Diamond!';
           
           var [undef] = find('', target, list, undefined);
           expect(undef.hasError).to.equal(false);
       });
   });
   
   describe('Find banned words', function(){
       
        const list = {
            bannedWordsList: {
                'CaseInsensitive': ['sexy'],
                'CaseSensitive': ['diamond', '(?!^)(Character)(?! Booster)']
                }
            };
       
       it('Works in case insensitive mode', function(){
        const target = 'Check out that Sexy Diamond!';
        const [res] = find('', target, list, undefined);
        expect(res.HTML).to.equal('Suspicious terminology: <span class="text-warning">Sexy</span>');
       });
       
       it('Works in case sensitive mode', function(){
        const target = 'Check out that cool diamond!';
        const [res] = find('', target, list, undefined);
        expect(res.HTML).to.equal('Suspicious terminology: <span class="text-warning">diamond</span>');
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
      const target = 'Check out that sexy diamond!';
      
      it('Works if there is no case insensitive list', function(){
         const listb = {
             'bannedWordsList': {
                 'CaseSensitive': ['diamond']
             }
         };
         const [resA] = find('', target, listb, undefined);
         expect(resA.hasError).to.equal(true);
      });
      
      it('Works if there is no case sensitive list', function(){
         const listc = {
              'bannedWordsList': {
                  'CaseInsensitive': ['sexy']
              }
          };
         const [resB] = find('', target, listc, undefined);
         expect(resB.HTML).to.equal('Suspicious terminology: <span class="text-warning">sexy</span>');
      });
   });
    
});