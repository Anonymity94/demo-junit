const expect = require('expect.js')
import { isUrl } from '../../src/utils'

describe('isUrl tests', () => {
  it('should return false for invalid URLs', () => {
    expect(isUrl('foo')).not.to.be(true)
    expect(isUrl('bar')).not.to.be(true)
    expect(isUrl('bar/test')).not.to.be(true)
    expect(isUrl('http:/example.com/')).not.to.be(true)
    expect(isUrl('ttp://example.com/')).not.to.be(true)
  })

  it('should return true for valid URLs', () => {
    expect(isUrl('http://example.com/')).to.be(true);
    expect(isUrl('https://example.com/')).to.be(true);
    expect(isUrl('http://example.com/test/123')).to.be(true);
    expect(isUrl('https://example.com/test/123')).to.be(true);
    expect(isUrl('http://example.com/test/123?foo=bar')).to.be(true);
    expect(isUrl('https://example.com/test/123?foo=bar')).to.be(true);
    expect(isUrl('http://www.example.com/')).to.be(true);
    expect(isUrl('https://www.example.com/')).to.be(true);
    expect(isUrl('http://www.example.com/test/123')).to.be(true);
    expect(isUrl('https://www.example.com/test/123')).to.be(true);
    expect(isUrl('http://www.example.com/test/123?foo=bar')).to.be(true);
    expect(isUrl('https://www.example.com/test/123?foo=bar')).to.be(true);
  });
})
