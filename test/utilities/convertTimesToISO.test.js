/* global describe, it */
/* eslint no-unused-expressions: off */
import { expect } from 'chai';
import convert from '../../src/utilities/convertTimesToISO';

describe('Convert times to ISO', () => {
  it('Convert 12am', () => {
    const retval = convert('12am');
    expect(retval).to.equal('19850520T0000');
  });
  it('Convert 2:00pm', () => {
    const retval = convert('2:00pm');
    expect(retval).to.equal('19850520T1400');
  });
  it('Convert 5:30pm', () => {
    const retval = convert('5:30pm');
    expect(retval).to.equal('19850520T1730');
  });
});
