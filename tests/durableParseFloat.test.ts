import { durableParseFloat } from '../src'

describe('Whole number', () => {
  test('Single digit', () => {
    const result = durableParseFloat(8)
    expect(result).toBe(8)
  })
  test('2 digits', () => {
    const result = durableParseFloat(81)
    expect(result).toBe(81)
  })
  test('Negative', () => {
    const result = durableParseFloat(-81)
    expect(result).toBe(-81)
  })
})

describe('Float', () => {
  test('1 place', () => {
    const result = durableParseFloat(8.1)
    expect(result).toBe(8.1)
  })
  test('2 places', () => {
    const result = durableParseFloat(8.12)
    expect(result).toBe(8.12)
  })
  test('Less than 1', () => {
    const result = durableParseFloat(0.12)
    expect(result).toBe(0.12)
  })
  test('Negative', () => {
    const result = durableParseFloat(-0.12)
    expect(result).toBe(-0.12)
  })
})

describe('String, whole numbers', () => {
  test('Single digit', () => {
    const result = durableParseFloat('1')
    expect(result).toBe(1)
  })
  test('2 digits', () => {
    const result = durableParseFloat('12')
    expect(result).toBe(12)
  })
  test('Negative', () => {
    const result = durableParseFloat('-12')
    expect(result).toBe(-12)
  })
})

describe('String, floats', () => {
  test('Single place', () => {
    const result = durableParseFloat('1.2')
    expect(result).toBe(1.2)
  })
  test('2 places', () => {
    const result = durableParseFloat('1.23')
    expect(result).toBe(1.23)
  })
  test('Negative', () => {
    const result = durableParseFloat('-1.2')
    expect(result).toBe(-1.2)
  })
})

describe('String, invalid', () => {
  test('Undefined', () => {
    const result = durableParseFloat(undefined)
    expect(result).toBe(null)
  })
  test('Empty string', () => {
    const result = durableParseFloat('')
    expect(result).toBe(null)
  })
  test('Reference error', () => {
    const result1 = durableParseFloat('#REF!')
    const result2 = durableParseFloat('#DIV/0!')
    expect(result1).toBe(null)
    expect(result2).toBe(null)
  })
  test('Null', () => {
    const result = durableParseFloat(null)
    expect(result).toBe(null)
  })
  test('Letters and numbers', () => {
    const result = durableParseFloat('1cW2')
    expect(result).toBe(null)
  })
})

describe('Number, invalid', () => {
  test('Infinity', () => {
    const result = durableParseFloat(Infinity)
    expect(result).toBe(null)
  })
  test('NaN', () => {
    const result = durableParseFloat(NaN)
    expect(result).toBe(null)
  })
})
