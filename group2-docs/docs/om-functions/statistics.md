---
lang: en-US
title: "Statistics"
description: "This page will Introduce you Statistical functions in Openmadness"
---
## Statistics

These functions help calculate statistical measures from arrays:

### 1. `mad.sum(array)`

Returns the sum of all elements:

| Parameter |  Type  |      Description      |
|:---------:|:------:|:---------------------:|
| array     | Array  | Input array           |
| Returns   | number | Total sum of elements |

**Example**:

```js
import { sum } from 'openmadness';

sum([1, 2, 3]);
// Result: 6
```

### 2. `mad.mean(array)`

Calculates the mean (average) of elements:

| Parameter |  Type  |     Description     |
|:---------:|:------:|:-------------------:|
| array     | Array  | Input array         |
| Returns   | number | Average of elements |

**Example**:

```js
import { mean } from 'openmadness';

mean([1, 2, 3]);
// Result: 2
```

### 3. `mad.std(array)`

Computes the standard deviation of the array:

| Parameter |  Type  |     Description    |
|:---------:|:------:|:------------------:|
| array     | Array  | Input array        |
| Returns   | number | Standard deviation |

**Example**:

```js
import { std } from 'openmadness';

std([1, 2, 3]);
// Result: ~0.82 (sample-dependent)
```

### 4. `mad.median(array)`

Finds the median value:

| Parameter |  Type  |  Description |
|:---------:|:------:|:------------:|
| array     | Array  | Input array  |
| Returns   | number | Middle value |

**Example**:

```js
import { median } from 'openmadness';

median([1, 3, 2]);
// Result: 2
```

## Transformations

These functions are used to reshape or reformat arrays:

### 1. `mad.reshape(array, newShape)`

Reshapes an array to the specified shape:

| Parameter |  Type |       Description       |
|:---------:|:-----:|:-----------------------:|
| array     | Array | The original array      |
| newShape  | Array | New shape, e.g., [2, 2] |
| Returns   | Array | Reshaped array          |

**Example**:

```js
import { reshape } from 'openmadness';

reshape([1, 2, 3, 4], [2, 2]);
// Result: [[1, 2], [3, 4]]
```

### 2. `mad.flatten(array)`

Flattens a nested array into a 1D array:

| Parameter |  Type |     Description    |
|:---------:|:-----:|:------------------:|
| array     | Array | A nested array     |
| Returns   | Array | Flattened 1D array |
| Returns   | Array | Reshaped array     |

**Example**:

```js
import { flatten } from 'openmadness';

flatten([[1, 2], [3, 4]]);
// Result: [1, 2, 3, 4]
```

### 3. `mad.transpose(array)`

Transposes a 2D array (rows become columns):

| Parameter |   Type   |     Description    |
|:---------:|:--------:|:------------------:|
| array     | 2D Array | The matrix to flip |
| Returns   | Array    | Transposed matrix  |
| Returns   | Array    | Reshaped array     |

**Example**:

```js
import { transpose } from 'openmadness';

transpose([[1, 2], [3, 4]]);
// Result: [[1, 3], [2, 4]]
```