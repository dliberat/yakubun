const expect = require('chai').expect;
import getTests from '../src/getTests.js';

describe('getTests', function(){
    var def = getTests({});
    it('return an array of functions', function(){
        for (var i = 0; i < def.length; i++){
            console.log(def[i][0]);
            expect(def[i][1]).to.be.a('function');
        }
    });
    it('disable tzDates by default', function(){
        for (var i = 0; i < def.length; i++){
            expect(def[i][0]).to.not.equal('tzDates');
        }
    });
    it('enable tzDates if passed true', function(){
        var res = getTests({
            tests: {
                tzDates: true
            }
        });
        
        var tzExists = false;
        for(var i = 0; i < res.length; i++){
            if(res[i][0] == 'tzDates') tzExists = true;
        }
        
        expect(tzExists).to.equal(true);
    });
    it('disable dates if tzDates is enabled', function(){
        var res = getTests({
            tests: {
                tzDates: true
            }
        });
        
        var datesExists = false;
        for(var i = 0; i < res.length; i++){
            if(res[i][0] == 'dates') datesExists = true;
        }
        
        expect(datesExists).to.equal(false);
    });
})