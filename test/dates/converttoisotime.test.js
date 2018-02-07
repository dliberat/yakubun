import { expect } from 'chai';
import convertToISOTime from '../../src/checks/dates/convertToISOTime';

describe('convertToISOTime', function(){
    it('12:00am -> 00:00', function(){
        expect(convertToISOTime('12:00am')).to.equal('00:00');
    });
    it('12:00pm -> 12:00', function(){
       expect(convertToISOTime('12:00pm')).to.equal('12:00');
    });
    it('3:34 -> 03:34', function(){
        expect(convertToISOTime('3:34')).to.equal('03:34');
    });
    it('10:01pm -> 22:01', function(){
       expect(convertToISOTime('10:01pm')).to.equal('22:01');
    });
    it('0:00 -> 00:00', function(){
       expect(convertToISOTime('0:00')).to.equal('00:00');
    });
});