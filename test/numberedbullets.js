const expect = require('chai').expect;
const langchecks = require('../src/libs/checks-language.js');

describe('Ordered list tracker', function(){
   var options = {};
   var accumulatorEmpty;
   var accumulator;

    describe('hooks', function() {
        beforeEach(function() {
            // reset accumulator before each test
            accumulator = { 
                trackNumberedBullets: { period: ['1'], bracket: ['1','2'] }
            };
            accumulatorEmpty = {};
        });

       describe('Create a tracker if none exists', function(){
           it('Empty accumulator', function(){
               var target = 'Sautee the onions.';
               var res = langchecks.trackNumberedBullets('', target, options, accumulatorEmpty);
               expect(res[1]).to.deep.include({ trackNumberedBullets: { period: [], bracket: [] }} );
           });
       });
       
       describe('Add new numbers to existing tracker', function(){
           it('1. Period lists', function(){
               var target = '2. Chop the parsley.';
               var res = langchecks.trackNumberedBullets('', target, options, accumulator);
               expect(res[1]).to.deep.include({ trackNumberedBullets: { period: ['1','2'], bracket: ['1','2']}});
           });
           it('2) Bracket lists', function(){
              var target = '3) Thinly slice the beef.';
              var res = langchecks.trackNumberedBullets('', target, options, accumulator);
              expect(res[1]).to.deep.include({ trackNumberedBullets: { period: ['1'], bracket: ['1', '2', '3']}});
           });
           it('1) Multiple. 2) Items. 3) On a single. 4) Line.', function(){
              var target =  '1) Multiple. 2) Items. 3) On a single. 4) Line';
              var res = langchecks.trackNumberedBullets('', target, options, accumulatorEmpty);
              expect(res[1]).to.deep.include({ trackNumberedBullets: { period: [], bracket: ['1','2', '3', '4']}});
           });
           it('1. Multiple\\n2.Points separated\\n3. by line breaks')
       });
       
       describe('Reset tracker after a break in the list', function(){
           it('4) after 2)', function(){
               var target = '4) Mix in the tomato sauce.';
               var res = langchecks.trackNumberedBullets('', target, options, accumulator);
               expect(res[1]).to.deep.include({ trackNumberedBullets: { period: ['1'], bracket: [] }});
           });
           it('1. after 5.', function(){
              // this should cause the list to reset. If the list continues
              // further, it would start counting from 2.
              var target = '1. Preheat oven to 350 F.';
              accumulator.trackNumberedBullets.period = ['1','2','3','4','5'];
              var res = langchecks.trackNumberedBullets('', target, options, accumulator);
              expect(res[1]).to.deep.include({ trackNumberedBullets: { period: [], bracket: ['1','2'] }});
           });
       });
    });
});