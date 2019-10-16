const expect = require('expect.js')
import { add, asyncAdd } from '../../src/math'

describe('Math.js: test sync function', function() {
  before(function() {
    console.log('-----before()------')
  })
  after(function() {
    console.log('-----after()------')
  })
  beforeEach(function() {
    console.log('-------beforeEach()---------')
  })
  afterEach(function() {
    console.log('-------afterEach()---------')
  })

  it('should expose a function', function() {
    expect(add).to.be.a('function')
  })

  it('should return true for: 1 + 3 === 4', function() {
    expect(add(1, 3)).to.equal(4)
  })
})
