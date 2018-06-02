/* global describe, it */
/* eslint no-unused-expressions: off */
import { expect } from 'chai';
import moment from 'moment-timezone';
import convertToMomentArr from '../../src/checks/dates/convertToMomentArr';

describe('ConvertToMomentArr', () => {
  it('Return arrays of moments', () => {
    const assert = (x) => { expect(moment.isMoment(x)).to.be.true; };
    const s = ['{2018-01-01 00:00}'];
    const t = ['{2018-01-02 00:00}'];
    const [source, target] = convertToMomentArr([s, t]);

    source.forEach(assert);
    target.forEach(assert);
  });
  it('Sort dates', () => {
    const s = ['{2018-01-01 00:00}', '{2018-01-03 00:00}', '{2018-01-02 00:00}'];
    const t = ['{2018-01-02 00:00}', '{2018-01-03 00:00}', '{2018-01-01 00:00}'];
    const [source, target] = convertToMomentArr([s, t]);
    const [sA, sB, sC] = source.map(x => x.format('DD'));
    expect(Number(sA)).to.equal(1);
    expect(Number(sB)).to.equal(2);
    expect(Number(sC)).to.equal(3);

    const [tA, tB, tC] = target.map(x => x.format('DD'));
    expect(Number(tA)).to.equal(1);
    expect(Number(tB)).to.equal(2);
    expect(Number(tC)).to.equal(3);
  });
  it('Handle identical dates', () => {
    const s = ['{2018-01-01 00:00}', '{2018-01-01 00:00}'];
    const t = [];
    const [source] = convertToMomentArr([s, t]);
    const [sA, sB] = source.map(x => x.format('DD'));
    expect(Number(sA)).to.equal(1);
    expect(Number(sB)).to.equal(1);
  });
  it('Assign time zones to objects', () => {
    const s = ['{2018-01-01 00:00}'];
    const t = ['{2018-01-01 00:00}'];
    const [source, target] = convertToMomentArr([s, t], 'Asia/Tokyo', 'America/Los_Angeles');
    expect(source[0].format('z')).to.equal('JST');
    expect(target[0].format('z')).to.equal('PST');
  });
});
