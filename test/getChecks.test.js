/* global describe, it */
/* eslint no-unused-expressions: off */
import { expect } from 'chai';
import getChecks from '../src/preprocessing/getChecks';

describe('getChecks', () => {
  it('return an array of functions', () => {
    const checksArray = getChecks({});
    for (let i = 0; i < checksArray.length; i += 1) {
      expect(checksArray[i][1]).to.be.a('function');
    }
  });
  it('disable tzDates by default', () => {
    const checksArray = getChecks({});
    for (let i = 0; i < checksArray.length; i += 1) {
      expect(checksArray[i][0]).to.not.equal('tzDates');
    }
  });
  it('enable tzDates if passed true', () => {
    const res = getChecks({
      checks: {
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
    const res = getChecks({
      checks: { tzDates: true },
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
      customChecks: [
        checkArr,
      ],
    };
    const res = getChecks(config);
    expect(res).to.be.an('array').that.includes(checkArr);

    const badConfig = {
      customChecks: [
        [myCustomCheck, 'check'],
      ],
    };
    expect(getChecks.bind(null, badConfig)).to.throw;
  });
});
