/* global describe, it */
/* eslint no-unused-expressions: off */
import { expect } from 'chai';
import getTests from '../src/preprocessing/getTests';

describe('getTests', () => {
  const def = getTests({});
  it('return an array of functions', () => {
    for (let i = 0; i < def.length; i += 1) {
      expect(def[i][1]).to.be.a('function');
    }
  });
  it('disable tzDates by default', () => {
    for (let i = 0; i < def.length; i += 1) {
      expect(def[i][0]).to.not.equal('tzDates');
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
      tests: {
        tzDates: true,
      },
    });

    let datesExists = false;
    for (let i = 0; i < res.length; i += 1) {
      if (res[i][0] === 'dates') datesExists = true;
    }

    expect(datesExists).to.equal(false);
  });
});
