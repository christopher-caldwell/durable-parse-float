# GitHub Slugger

Fork of durable-parse-float written in TS

[![NPM](https://img.shields.io/npm/v/@caldwell619/durable-parse-float.svg)](https://www.npmjs.com/package/@caldwell619/durable-parse-float) [![NPM](https://img.shields.io/bundlephobia/min/@caldwell619/durable-parse-float)](https://www.npmjs.com/package/@caldwell619/durable-parse-float) [![](https://img.shields.io/github/last-commit/christopher-caldwell/durable-parse-float)]() [![](https://img.shields.io/npm/types/typescript)]()

## Demo

[GH Pages](https://christopher-caldwell.github.io/durable-parse-float/)

## Getting Started

```shell
yarn add @caldwell619/durable-parse-float
```

## Quick Example

```ts
import { slugger } from '@caldwell619/durable-parse-float'

const slug = slugger('My Cool Post: 2000-08-02')
// my-cool-post-2000-08-02
```

## Maintaining Casing

By default, all characters will be lower cased. If you wish to maintain the casing, pass the second argument as true:

```ts
import { slugger } from '@caldwell619/durable-parse-float'

const slug = slugger('My Cool Post: 2000-08-02', true)
// 'My-Cool-Post-2000-08-02'
```
