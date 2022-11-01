# Durable Parse Float

Often it's annoying to try and parse unexpected values into numbers. The data coming from business oriented spreadsheets is rarely clean, and using the standard parsing can lead to unexpected results. 

This library is for getting predicable results when attempting to parse values

[![NPM](https://img.shields.io/npm/v/@caldwell619/durable-parse-float.svg)](https://www.npmjs.com/package/@caldwell619/durable-parse-float) [![NPM](https://img.shields.io/bundlephobia/min/@caldwell619/durable-parse-float)](https://www.npmjs.com/package/@caldwell619/durable-parse-float) [![](https://img.shields.io/github/last-commit/christopher-caldwell/durable-parse-float)]() [![](https://img.shields.io/npm/types/typescript)]()

## Getting Started

```shell
yarn add @caldwell619/durable-parse-float
```

## Quick Example

```ts
import { durableParseFloat, parseFloatStrict } from '@caldwell619/durable-parse-float'

durableParseFloat('1.34') // 1.34
durableParseFloat('#REF!') // null
parseFloatStrict('1') // 1
parseFloatStrict('1.34') // 1.34
parseFloatStrict('') // error thrown
parseFloatStrict(undefined) // error thrown
```

## Differences

`durableParseFloat` is a flexible function that will return `null` or a number or float.

`parseFloatStrict` is a light wrapper around `durableParseFloat` that will throw if the input is invalid.

There are 2 separate functions, mainly to ensure that data stays consistent. If you cannot have a number be `null`, whether that's from TypeScript types, or some schema, etc, you have a way to ensure that your input will be a number, or die trying.
