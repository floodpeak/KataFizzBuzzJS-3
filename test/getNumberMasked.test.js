var expect = require('chai').expect
var getNumberMasked = require('../getNumberMasked')

describe('number masked',function(){
  it('should be 1 for 1', function(){
    expect(getNumberMasked(1)).to.be.equal(1)
  })
})
