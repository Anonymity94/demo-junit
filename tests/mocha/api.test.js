import '@babel/polyfill'
import { getCnodeTopics } from '../../src/api'

const expect = require('expect.js')

describe('cnode api test', () => {
  it('should return true for result.success', async () => {
    const response = await getCnodeTopics()
    expect(response.success).to.be(true)
  })

  it('should return true for result.data type as Array', async () => {
    const response = await getCnodeTopics()
    expect(response.data).to.be.a('array')
  })

  it('should return true for result.data.length === 40', async () => {
    const response = await getCnodeTopics()
    expect(response.data.length).to.be(40)
  })
})
