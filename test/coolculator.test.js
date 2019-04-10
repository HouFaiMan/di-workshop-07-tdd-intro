var chai = require('chai')
var expect = chai.expect

var Coolculator = require('../lib/coolculator')

describe('Coolculator', function() {
  mm = new Coolculator();

  it('should add', function() {
    expect(mm.add(2, 3)).to.equal(5)
  })

  it('should subtract', function() {
    expect(mm.subtract(3, 2)).to.equal(1)
  })

  it('should multiply', function() {
    expect(mm.multiply(2, 3)).to.equal(6)
  })

  it('should divide', function() {
    expect(mm.divide(6, 2)).to.equal(3)
  })

  it('should return the highest integer between two numbers', function() {
    expect(mm.highest(2, 4)).to.equal(4)
  })

  it('should return the lowest integer between two numbers', function() {
    expect(mm.lowest(2, 4)).to.equal(2)
  })

  it('should double the given number', function() {
    expect(mm.double(4)).to.equal(8)
  })

  it('should square the given number', function() {
    expect(mm.square(3)).to.equal(9)
  });

  it('should raise a given number with another given number', function() {
    expect(mm.raise(3, 3)).to.equal(27)
  });

  it('should return true if the number is negative', function() {
    expect(mm.isNegative(-5)).to.equal(true)
    expect(mm.isNegative(5)).to.equal(false)
  });

  it('should return true if the number is positive', function() {
    expect(mm.isPositive(-5)).to.equal(false)
    expect(mm.isPositive(5)).to.equal(true)
  });

  it('should return true if number has same digit start and end', function() {
    expect(mm.isCool(101)).to.equal(true);
  })

  it('should return the sum of an array', function() {
    expect(mm.sum([1, 2, 3])).to.equal(6);
  })

  it('should return the sum of all numbers in an array multipled', function() {
    // (5 * 3) = 15 * 2 = 30;
    expect(mm.multiplyArray([5, 3, 2])).to.equal(30);
  });

  it('should return the mean of an array', function() {
    expect(mm.mean([6, 4, 8])).to.equal(6);
  });

  it('should return the factorial of a number', function() {
    expect(mm.factorial(5)).to.equal(120);
  });

  it('should return a random number between 0 and the given number', function() {
    expect(mm.random(5)).to.be.above(0).and.to.be.below(5);
  });

  it('should return the index from an array', function() {
    var arr = [13, 25, 2, 67, 89];
    expect(arr.indexOf(13)).to.equal(0)
  })

  it('should join an array', function() {
    var arr = ["Joe", "Rogan", "Alex", "Jones", "Eddie", "Bravo"];
    expect(arr.join(',')).to.equal("Joe,Rogan,Alex,Jones,Eddie,Bravo");
  })

  it('should remove the first element of an array', function() {
    var arr = [13, 25, 2, 67, 89];
    arr.shift();
    expect(arr).to.deep.equal([25, 2, 67, 89])
  });
  
  it('should add the first element of an array', function() {
    var arr = [13, 25, 2, 67, 89];
    arr.unshift(17);
    expect(arr).to.deep.equal([17, 13, 25, 2, 67, 89])
  });
  
})
