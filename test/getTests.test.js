/* global describe, it */
/* eslint no-unused-expressions: off */
import { expect } from 'chai';
import getTests from '../src/preprocessing/getTests';

describe('getTests', () => {
  it('return an array of functions', () => {
    const testsArray = getTests({});
    for (let i = 0; i < testsArray.length; i += 1) {
      expect(testsArray[i][1]).to.be.a('function');
    }
  });
  it('disable tzDates by default', () => {
    const testsArray = getTests({});
    for (let i = 0; i < testsArray.length; i += 1) {
      expect(testsArray[i][0]).to.not.equal('tzDates');
    }
  });
  it('enable tzDates if passed true', () => {
    const res = getTests({
      tests: {
        tzDates: true,
      },
    });

    let tzExists = false;
    for (let i = 0; i < res.length; i += 1) {
      if (res[i][0] === 'tzDates') tzExists = true;
    }

    expect(tzExists).to.equal(true);
  });
  it('disable dates if tzDates is enabled', () => {
    const res = getTests({
      tests: { tzDates: true },
    });

    let datesExists = false;
    for (let i = 0; i < res.length; i += 1) {
      if (res[i][0] === 'dates') datesExists = true;
    }

    expect(datesExists).to.equal(false);
  });
  it('Pass in custom checks', () => {
    const myCustomCheck = () => {};
    const checkArr = ['my-custom', myCustomCheck];
    const config = {
      customTests: [
        checkArr,
      ],
    };
    const res = getTests(config);
    expect(res).to.be.an('array').that.includes(checkArr);

    const badConfig = {
      customTests: [
        [myCustomCheck, 'check'],
      ],
    };
    expect(getTests.bind(null, badConfig)).to.throw;
  });
});
