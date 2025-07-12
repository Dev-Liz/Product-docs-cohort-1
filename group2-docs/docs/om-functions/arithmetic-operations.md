---
lang: en-US
title: "Arithmetic Operations"
description: "This page will introduce you to Openmadness functions for Arithmetric Operations"
---

## Arthimetric Operations

These functions are used to perform arithmetic operations on arrays.

### 1. `mad.add(a, b)`

Adds two arrays element-wise:

| Parameter |  Type |           Description          |
|:---------:|:-----:|:------------------------------:|
| a, b      | Array | Arrays of the same shape       |
| Returns   | Array | Resulting array after addition |

**Example**:

```js
import { add } from 'openmadness';

add([1, 2], [3, 4]);
// Result: [4, 6]
```

### 2. `mad.subtract(a, b)`

Subtracts the second array from the first, element-wise:

| Parameter |  Type |            Description            |
|:---------:|:-----:|:---------------------------------:|
| a, b      | Array | Arrays of the same shape          |
| Returns   | Array | Resulting array after subtraction |

**Example**:

```js
import { subtract } from 'openmadness';

subtract([5, 6], [2, 3]);
// Result: [3, 3]
```

### 3. `mad.multiply(a, b)`

Multiplies two arrays element-wise:

| Parameter |  Type |              Description             |
|:---------:|:-----:|:------------------------------------:|
| a, b      | Array | Arrays of the same shape             |
| Returns   | Array | Resulting array after multiplication |

**Example**:

```js
import { multiply } from 'openmadness';

multiply([2, 3], [4, 5]);
// Result: [8, 15]
```

### 4. `mad.divide(a, b)`

Divides the first array by the second, element-wise:

| Parameter |  Type |           Description          |
|:---------:|:-----:|:------------------------------:|
| a, b      | Array | Arrays of the same shape       |
| Returns   | Array | Resulting array after division |

**Example**:

```js
import { divide } from 'openmadness';

divide([10, 20], [2, 5]);
// Result: [5, 4]
```

### 5. `mad.pow(a, b)`

Raises each element in a to the power of the corresponding element or scalar `b`:

| Parameter |       Type      |          Description          |
|:---------:|:---------------:|:-----------------------------:|
| a         | Array           | Base values                   |
| b         | Array or number | Exponents                     |
| Returns   | Array           | Array of exponentiated values |

**Example**:

```js
import { pow } from 'openmadness';

pow([2, 3], 2);
// Result: [4, 9]
```
