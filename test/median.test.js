const { describe, it } = require("mocha")
const { expect } = require("chai")
const median = require("../src/median")

describe("median", function(){
  it("should return the median of an odd-lengthed array", function(){
    expect(median([1,3,2])).to.equal(2)
  })
  it("should return the mean of the medians of an even-lengthed array", function(){
    expect(median([4,1,2,3])).to.equal(2.5)
  })
  it("should return undefined for an 0-array", function(){
    expect(median([])).to.be.undefined
  })
  it("should return the correct value for a 1-array", function(){
    expect(median([2])).to.equal(2)
  })
  it("should return the correct value for a 2-array", function(){
    expect(median([2,3])).to.equal(2.5)
  })
  it("should not sort the array if it is already sorted", function(){
    expect(median([1,3,2], true)).to.equal(3)
    expect(median([4,1,2,3], true)).to.equal(1.5)
  })
})
