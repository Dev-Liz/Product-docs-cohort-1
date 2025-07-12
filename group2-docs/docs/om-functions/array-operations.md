---
lang: en-US
title: "Array Operations"
description: "This page will introduce you to array-operations functions in Openmadness"
---

## OM-Functions

The main functions in the OpenMadness JavaScript library are used for:

1. Array creation and manipulation
2. Arithmetic Operation
3. Logic
4. Statistics
5. Transformations
6. Utilities

## Array Operations

These functions are available for creating or manipulating arrays:

### 1. `mad.ones(shape)`

This creates an array filled with ones:

| Parameter |  Type |                Description                |
|:---------:|:-----:|:-----------------------------------------:|
| shape     | Array | Shape of the new array, e.g., [2, 3] or 2 |
| Returns   | Array | A new array filled with ones              |

**Example**:

```js
// Create a 3x1 array of ones
import { ones } from 'openmadness';

const onesColumn = ones([3, 1]);
// Result: [[1], [1], [1]]
```

### 2. `mad.zeros(shape)`

This creates an array filled with zeros: 

| Parameter |  Type |                Description                |
|:---------:|:-----:|:-----------------------------------------:|
| shape     | Array | Shape of the new array, e.g., [2, 3] or 2 |
| Returns   | Array | A new array filled with zeros             |

**Example**:

```js
// Create a 2x2 array of zeroes
import { zeros } from 'openmadness';

const zeroMatrix = zeros([2, 2]);
// Result: [[0, 0], [0, 0]]
```

### 3. `mad.range(start, end, step)`

This generates an array containing a sequence of numbers:

| Parameter |  Type  |            Description            |
|:---------:|:------:|:---------------------------------:|
| start     | number | Start of the range                |
| end       | number | End of the range                  |
| step      | number | Step increment. Default is 1      |
| Returns   | Array  | A new array with the number range |

**Example**:

```js
import { range } from 'openmadness';

const sequence = range(0, 10, 2);
// Result: [0, 2, 4, 6, 8]
```

### 4. `mad.random(shape)`

Generates an array of the given shape with random values between 0 and 1:

| Parameter |  Type |              Description              |
|:---------:|:-----:|:-------------------------------------:|
| shape     | Array | Shape of the new array                |
| Returns   | Array | A new array filled with random values |

**Example**:

```js
import { random } from 'openmadness';

const randomArray = random([2, 2]);
// Example output: [[0.13, 0.85], [0.42, 0.67]]
```