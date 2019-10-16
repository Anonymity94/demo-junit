import '@babel/polyfill'
import 'jest-extended'

test('test mock function', () => {
  let mockFn = jest.fn()
  let result = mockFn(1, 2, 3)

  // 断言mockFn的执行后返回undefined
  expect(result).toBeUndefined()
  // 断言mockFn被调用
  expect(mockFn).toBeCalled()
  // 断言mockFn被调用了一次
  expect(mockFn).toBeCalledTimes(1)
  // 断言mockFn传入的参数为1, 2, 3
  expect(mockFn).toHaveBeenCalledWith(1, 2, 3)
})

test('test mock return values', () => {
  let myMock = jest.fn()

  expect(myMock()).toBeUndefined()

  myMock.mockReturnValueOnce(10).mockReturnValueOnce('x')
  expect(myMock()).toBe(10)
  expect(myMock()).toBe('x')
})
