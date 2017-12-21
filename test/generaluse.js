const expect = require('chai').expect;
import * as general from '../src/libs/lib-generaluse';

describe('General use functions', function(){
   it('Verify whether two arrays are identical', function(){
      const a = general.compareArrays([1, 2, 3], [1, 2, 3]);
      expect(a).to.equal(true);

      const b = general.compareArrays([1, 2, 3], [1, 2, [3, 4]]);
      expect(b).to.equal(false);

      const c = general.compareArrays([1, 2, [3, 4, [5, 6]]], [1, 2, [3, 4, [5, 6]]]);
      expect(c).to.equal(true);

      const d = general.compareArrays([null, null, 2], [null, null, 2]);
      expect(d).to.equal(true);
   });
    
});