const expect = require('chai').expect;
import findDoubleSpaces from '../src/checks/doublespaces';

describe('Search for double spaces', function(){
  var options = {};

  describe('Return null if there is no input', function(){
    it('Empty string', function(){
      const target = '';
      const [res] = findDoubleSpaces('', target, options, undefined);
      expect(res.hasError).to.equal(false);
    });
  });

  describe('Find double spaces', function(){
    it('At the beginning of input', function(){
      const target = '  Lorem ipsum';
      const [res] = findDoubleSpaces('', target, options, undefined);
      expect(res.hasError).to.equal(true);
    });

    it('In the middle of input', function(){
      const target = 'Lorem  ipsum';
      const [res] = findDoubleSpaces('', target, options, undefined);
      expect(res.hasError).to.equal(true);
     });

     it('At the end of input', function(){
       const target = 'Lorem ipsum  ';
       const [res] = findDoubleSpaces('', target, options, undefined);
       expect(res.hasError).to.equal(true);
     });
  });
});