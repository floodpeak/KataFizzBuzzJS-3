var expect = require('chai').expect
var getNumberMasked = require('../getNumberMasked')

describe('number masked',function(){
  it('should be 1 for 1', function(){
    expect(getNumberMasked(1)).to.be.equal(1)
  })
  it('should be 2 for 2', function(){
    expect(getNumberMasked(2)).to.be.equal(2)
  })
  it('should be Fizz for 3', function(){
    expect(getNumberMasked(3)).to.be.equal('Fizz')
  })
  it('should be Buzz for 5', function(){
    expect(getNumberMasked(5)).to.be.equal('Buzz')
  })
  it('should be Buzz for 6', function(){
    expect(getNumberMasked(6)).to.be.equal('Fizz')
  })
  it('should be Buzz for 10', function(){
    expect(getNumberMasked(10)).to.be.equal('Buzz')
  })
  it('should be Buzz for 15', function(){
    expect(getNumberMasked(15)).to.be.equal('FizzBuzz')
  })
})
