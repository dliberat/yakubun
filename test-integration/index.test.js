/* global describe, beforeEach, it, before, after */
/* eslint-disable no-unused-expressions, no-console */
import { expect } from 'chai';
import * as yakubun from '../src/index';

let bilingualDoc;

describe('Entry point - index.js', () => {
  let consolelog;
  before(() => {
    consolelog = console.warn;
    console.warn = () => {};
  });
  after(() => {
    console.warn = consolelog;
  });

  beforeEach(() => {
    bilingualDoc = {
      0: {
        source: '日本語',
        target: 'Japanese',
      },
      1: {
        source: '犬',
        target: 'Dog',
      },
      2: {
        source: 'わんわんが好きです。',
        target: 'I like  dogs.',
      },
      3: {
        source: 'カードクリアでコイン×10000GET！',
        target: 'Complete to get 10,000 Coins!',
      },
      4: {
        source: '期間：9/26 16:59',
        target: 'Til 9/26, 12:59AM.',
      },
      5: {
        source: '最終ログイン日時が2017年2月7日0時0分より前、且つ、お客さまが保有する「クローバー」（有償のものも含む）のデータのみ（台湾でプレイされているお客さまを除く）',
        target: 'Clovers in storage (both paid for and free) for players not playing in Taiwan whose last login was before 12am, Feb 7, 2017 (GMT+9).',
      },
    };
  });

  it('Module exports the "scan" method', () => {
    expect(yakubun.scan).to.be.a('function');
  });

  it('Detect errors in the text', () => {
    const results = yakubun.scan(bilingualDoc, {});
    expect(results[2].doubleSpaces.hasError).to.be.true;
    expect(results[3].numbers.hasError).to.be.false;
    expect(results[4].times.hasError).to.be.true;
    expect(results[4].dates.hasError).to.be.false;
  });

  it('Perform time zone dates check', () => {
    const config = {
      sourceTimeZone: 'Asia/Tokyo',
      targetTimeZone: 'America/Los_Angeles',
      checks: {
        dates: false,
        times: false,
        tzDates: true,
      },
    };

    const results = yakubun.scan(bilingualDoc, config);
    expect(results[4].tzDates.hasError).to.be.false;
  });

  it('Find errors in numbered lists', () => {
    const doc = {
      0: {
        source: '1. 日本語',
        target: '1. Japanese',
      },
      1: {
        source: '2. 犬',
        target: '2. Dog',
      },
      2: {
        source: '4. わんわんが好きです。',
        target: '4. I like  dogs.',
      },
    };

    const results = yakubun.scan(doc, {});
    expect(results[2].numberedBullets.hasError).to.be.true;
  });

  it('Check for banned words', () => {
    const config = {
      bannedWordsList: {
        CaseInsensitive: ['dog'],
      },
    };

    const results = yakubun.scan(bilingualDoc, config);
    expect(results[1].bannedWords.hasError).to.be.true;
  });

  it('Check for errors in Spanish', () => {
    const config = {
      sourceLang: 'ja',
      targetLang: 'es',
      sourceTimeZone: 'Asia/Tokyo',
      targetTimeZone: 'UTC',
    };
    const doc = {
      0: {
        source: 'わんわんが好きです。',
        target: 'Me gustan los  perros',
      },
      1: {
        source: 'クリアでコイン×10000GET！',
        target: 'Completalo y recibiras 10.000 monedas!',
      },
    };

    const results = yakubun.scan(doc, config);
    expect(results[0].doubleSpaces.hasError).to.be.true;
    expect(results[1].numbers.hasError).to.be.false;
  });
});
