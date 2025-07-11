---
lang: en-US
title: "Transformations"
description: "This page will guide you on how to install openmadness"
---


# Transformations

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
