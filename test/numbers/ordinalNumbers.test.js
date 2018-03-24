/* global describe, it */
/* eslint no-unused-expressions: off */
import { expect } from 'chai';
import ordinalNumbers from '../../src/checks/ordinalNumbers';

const options = {
  targetLang: 'en',
};

describe('Catch incorrect ordinal numbers', () => {
  it('Return null for 1st, 2nd, 3rd, 4th, 21st', () => {
    const target = '1st, 2nd, 3rd, 4th, 21st';
    const [res] = ordinalNumbers('', target, options);
    expect(res.hasError).to.equal(false);
  });
  it('Return null for 5tastic 5th Anniversary', () => {
    const target = '5tastic 5th Anniversary';
    const [res] = ordinalNumbers('', target, options);
    expect(res.hasError).to.equal(false);
  });
  it('Flag 1nd', () => {
    const target = '1nd';
    const [res] = ordinalNumbers('', target, options);
    expect(res.plainText).to.equal('Check ordinal numbers: 1nd');
  });
  it('Flag 2rd', () => {
    const target = '2rd';
    const [res] = ordinalNumbers('', target, options);
    expect(res.plainText).to.equal('Check ordinal numbers: 2rd');
  });
  it('Flag 101th', () => {
    const target = '101th';
    const [res] = ordinalNumbers('', target, options);
    expect(res.plainText).to.equal('Check ordinal numbers: 101th');
  });
  it('Don\'t flag am pm', () => {
    const target = 'Until 11am, Dec 27 (GMT+9)';
    const [res] = ordinalNumbers('', target, options);
    expect(res.hasError).to.equal(false);
  });
  it('Don\'t flag multiplication x', () => {
    const target = '2x the decorations';
    const [res] = ordinalNumbers('', target, options);
    expect(res.hasError).to.equal(false);
  });
  it('Don\'t flag two numbers multiplied without a space', () => {
    const target = 'Get 4x5 stars!';
    const [res] = ordinalNumbers('', target, options);
    expect(res.hasError).to.equal(false);
  });
  it('Don\'t flag 11th', () => {
    const target = 'This is the 11th present from me';
    const [res] = ordinalNumbers('', target, options);
    expect(res.hasError).to.equal(false);
  });
});
