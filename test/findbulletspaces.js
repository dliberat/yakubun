const expect = require('chai').expect;
const langchecks = require('../src/checks/checks-language.js');

describe('Require spaces after bullet points', function(){
   var options = {};
   
   describe('Return null if there is no error', function(){
       it('Empty string', function(){
           var target = '';
           const [res] = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
           expect(res.hasError).to.equal(false);
       });
       it('Dash at start of input', function(){
          var target = '- I like dogs and everybody else should like dogs, too.';
          const [res] = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
          expect(res.hasError).to.equal(false);
       });
       it('Dash after \\n', function(){
        var target = 'I like dogs, especially:\\n- Shepherds\\n- Retrievers';
        const [res] = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
        expect(res.hasError).to.equal(false);
       });
       it('Black square at start of input', function(){
          var target = '■ I like dogs and everybody else should like dogs, too.';
          const [res] = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
          expect(res.hasError).to.equal(false);
       });
       it('Triangle and square after \\n', function(){
        var target = 'I like dogs, especially:\\n▼ Shepherds\\n■ Retrievers';
        const [res] = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
        expect(res.hasError).to.equal(false);
       });
   });
   
   describe('Flag errors', function(){
       it('Dash with no space', function(){
        var target = '-8 of 10 doctors say that...';
        const [res] = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
        expect(res.hasError).to.equal(true);
       });
       
       it('Square after \\n', function(){
        var target = 'The most important things are\\n■Working hard\\n■Staying positive';
        const [res] = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
        expect(res.hasError).to.equal(true);
       });
       
       it('Bullet followed by brackets', function(){
        var target = '-(9am)';
        const [res] = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
        expect(res.hasError).to.equal(true);
       });
       
       it('Custom bullets', function(){
           var target = '>this is a test.';
           var opt = {
            customBullets: '>'
           }
           const [res] = langchecks.findBulletsWithNoSpaces('', target, opt, undefined);
           expect(res.hasError).to.equal(true);
       });
       
       it('No error on custom bullets with regex symbols', function(){
           var target = '* This is a test.';
           var opt = {
            customBullets: '\*'
           }
           const [res] = langchecks.findBulletsWithNoSpaces('', target, opt, undefined);
           expect(res.hasError).to.equal(false);
       });
       it('Error on custom bullets with regex symbols', function(){
           var target = '*This is a test.';
           var opt = {
            customBullets: '\*'
           }
           const [res] = langchecks.findBulletsWithNoSpaces('', target, opt, undefined);
           expect(res.hasError).to.equal(true);
       });
   });


});