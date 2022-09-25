import isInteger from 'is-number'

const isIntegerRegex = /^-?[0-9.]+$/

type Input = string | null | number | undefined

export const durableParseFloat = (integer: Input): number | null => {
  if (typeof integer === 'number') {
    return isInteger(integer) ? integer : null
  }
  if (typeof integer === 'string') {
    return isIntegerRegex.test(integer) ? parseFloat(integer) : null
  }
  return null
}

export const parseFloatStrict = (integer: Input): number => {
  const result = durableParseFloat(integer)
  if (result === null) throw new Error(`[parseFloatStrict]: Result, ${result}, cannot be null from ${integer}`)

  return result
}
