import '@babel/polyfill'
import 'jest-extended'
import { getCnodeTopics } from '../../src/api'

describe('cnode api test', () => {
  test('should return true for result.success', async () => {
    const response = await getCnodeTopics()
    expect(response.success).toBeTruthy()
  })

  test('should return true for result.data.length === 40', async () => {
    const response = await getCnodeTopics()
    expect(response.data.length).toBe(40)
  })
})
