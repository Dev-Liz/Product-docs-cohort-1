---
lang: en-US
title: "Utilities"
description: "This page contains Utilities functions in Openmadness"
---

## Utilities

These functions assist with array handling and display tasks:

### 1. `mad.clone(array)`

Creates a deep copy of an array:

| Parameter |  Type |     Description     |
|:---------:|:-----:|:-------------------:|
| array     | Array | The array to copy   |
| Returns   | Array | A deep-cloned array |
| Returns   | Array | Reshaped array      |

**Example**:

```js
import { clone } from 'openmadness';

const newArray = clone([1, 2, 3]);
// Result: [1, 2, 3]
```

### 2. `mad.print(array)`

Prints the array to the console in a readable format:

| Parameter |  Type |    Description   |
|:---------:|:-----:|:----------------:|
| array     | Array | Array to display |
| Returns   | void  | No return value  |
| Returns   | Array | Reshaped array   |

**Example**:

```js
import { print } from 'openmadness';
const array = [[1, 2], [3, 4]]
print(array);
// Console: [ [1, 2], [3, 4] ]
```

### 3. `mad.toArray(madArray)`

Converts a mad array into a plain JavaScript array:

| Parameter |    Type    |         Description         |
|:---------:|:----------:|:---------------------------:|
| madArray  | Mad Object | Internal mad representation |
| Returns   | Array      | Plain JavaScript array      |

**Example**:

```js
import { toArray, zeros } from 'openmadness';

const jsArray = toArray(zeros([2, 2]));
// Result: [[0, 0], [0, 0]]
```