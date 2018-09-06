/* global describe, it */
/* eslint no-unused-expressions: off */
import { expect } from 'chai';
import ResultFactory from '../../src/checks/dates/ResultFactory';

describe('Dates result factory', () => {
  it('Invalid config return', () => {
    const RF = new ResultFactory('dates');
    const [result] = RF.invalid(null, null, {});
    expect(result).to.be.an('object')
      .that.includes.keys('HTML', 'plainText');
  });
  it('No error return', () => {
    const RF = new ResultFactory('dates');
    const [result] = RF.ok([], []);
    expect(result).to.be.an('object')
      .that.includes.keys('HTML', 'plainText', 'hasError', 'sourceDates', 'targetDates');

    expect(result.hasError).to.be.false;
  });
  it('Determine error/no error and return', () => {
    const RF = new ResultFactory('dates');
    const [result] = RF.decide([[], [], [], []], {}, null, null, [], []);
    expect(result.hasError).to.be.false;
  });
  it('ok() -> appends to sourceDates and targetDates', () => {
    const factory = new ResultFactory('dates');
    const [result] = factory.ok([1,2,3], ['a', 'b', 'c']);
    expect(result.sourceDates).to.deep.equal([1, 2, 3]);
    expect(result.targetDates).to.deep.equal(['a', 'b', 'c']);
  })
});
