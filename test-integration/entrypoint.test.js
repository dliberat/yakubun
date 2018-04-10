/* global describe, it */
const { expect } = require('chai');
const yakubun = require('../dist/yakubun');

describe('Integration tests', () => {
  it('Module exports the "scan" method', () => {
    expect(yakubun.scan).to.be.a('function');
  });
});
