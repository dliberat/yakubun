const expect = require('chai').expect;
const langchecks = require('../src/checks/checks-language.js');

describe('Require spaces after bullet points', function(){
   var options = {};
   
   describe('Return null if there is no error', function(){
       it('Empty string', function(){
           var target = '';
           var res = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
           expect(res[0]).to.equal(null);
       });
       it('Dash at start of input', function(){
          var target = '- I like dogs and everybody else should like dogs, too.';
          var res = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
          expect(res[0]).to.equal(null);
       });
       it('Dash after \\n', function(){
        var target = 'I like dogs, especially:\\n- Shepherds\\n- Retrievers';
        var res = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
        expect(res[0]).to.equal(null);
       });
       it('Black square at start of input', function(){
          var target = '■ I like dogs and everybody else should like dogs, too.';
          var res = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
          expect(res[0]).to.equal(null);
       });
       it('Triangle and square after \\n', function(){
        var target = 'I like dogs, especially:\\n▼ Shepherds\\n■ Retrievers';
        var res = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
        expect(res[0]).to.equal(null);
       });
   });
   
   describe('Flag errors', function(){
       it('Dash with no space', function(){
        var target = '-8 of 10 doctors say that...';
        var res = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
        expect(res[0]).to.equal('Make sure there are spaces after bullet points.');
       });
       
       it('Square after \\n', function(){
        var target = 'The most important things are\\n■Working hard\\n■Staying positive';
        var res = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
        expect(res[0]).to.equal('Make sure there are spaces after bullet points.');
       });
       
       it('Bullet followed by brackets', function(){
        var target = '-(9am)';
        var res = langchecks.findBulletsWithNoSpaces('', target, options, undefined);
        expect(res[0]).to.equal('Make sure there are spaces after bullet points.');
       });
       
       it('Custom bullets', function(){
           var target = '>this is a test.';
           var opt = {
            customBullets: '>'
           }
           var res = langchecks.findBulletsWithNoSpaces('', target, opt, undefined);
           expect(res[0]).to.equal('Make sure there are spaces after bullet points.');
       });
       
       it('No error on custom bullets with regex symbols', function(){
           var target = '* This is a test.';
           var opt = {
            customBullets: '\*'
           }
           var res = langchecks.findBulletsWithNoSpaces('', target, opt, undefined);
           expect(res[0]).to.equal(null);
       });
       it('Error on custom bullets with regex symbols', function(){
           var target = '*This is a test.';
           var opt = {
            customBullets: '\*'
           }
           var res = langchecks.findBulletsWithNoSpaces('', target, opt, undefined);
           expect(res[0]).to.equal('Make sure there are spaces after bullet points.');
       });
   });


});