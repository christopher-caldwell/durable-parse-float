import { parseFloatStrict } from '../src'

describe('Strict string, valid', () => {
  test('Single digit', () => {
    const result = parseFloatStrict(8)
    expect(result).toBe(8)
  })
})

describe('Strict string, invalid', () => {
  test('Undefined', () => {
    expect(() => parseFloatStrict(undefined)).toThrowError()
  })
  test('Empty string', () => {
    expect(() => parseFloatStrict('')).toThrowError()
  })
  test('Reference error', () => {
    expect(() => parseFloatStrict('#REF!')).toThrowError()
    expect(() => parseFloatStrict('#DIV/0!')).toThrowError()
  })
  test('Null', () => {
    expect(() => parseFloatStrict(null)).toThrowError()
  })
  test('Letters and numbers', () => {
    expect(() => parseFloatStrict('1cW2')).toThrowError()
  })
})
