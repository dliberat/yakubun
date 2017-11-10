const expect = require('chai').expect;
const mod = require('../src/preprocess.js');

describe('Preprocessing bilingualDoc', function(){
    it('convert ０１２３４５６７８９ to 0123456789', function(){
        var fDoc = {
            0: {
                source: '０１２３４５６７８９'
            }
        };
        var res = mod.preprocess(fDoc);
        expect(res['0'].source).to.equal('0123456789');
    });
})