const assert = require('assert');
const expect = require('chai').expect;
const langchecks = require('../src/libs/checks-language.js');

describe('Search for double spaces', function(){
   var options = {};
   
   describe('Return null if there is no input', function(){
       it('Empty string', function(){
           var target = '';
           var res = langchecks.findDoubleSpaces('', target, options, undefined);
           expect(res[0]).to.equal(null);
       });
   });
   
   describe('Find double spaces', function(){
       it('At the beginning of input', function(){
        var target = '  Lorem ipsum';
        var res = langchecks.findDoubleSpaces('', target, options, undefined);
        expect(res[0]).to.equal('Check for double spaces.');
       });
       
       it('In the middle of input', function(){
        var target = 'Lorem  ipsum';
        var res = langchecks.findDoubleSpaces('', target, options, undefined);
        expect(res[0]).to.equal('Check for double spaces.');
       });
       
       it('At the end of input', function(){
           var target = 'Lorem ipsum  ';
           var res = langchecks.findDoubleSpaces('', target, options, undefined);
           expect(res[0]).to.equal('Check for double spaces.');
       })
   });
   

});