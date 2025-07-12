---
lang: en-US
title: "Logical Operations"
description: "This page will introduce you to logical operation functions in Openmadness"
---

## Logical Operations

These functions allow you to perform element-wise logical comparisons:

### 1. `mad.equal(a, b)`

Checks element-wise equality:

| Parameter |  Type |          Description         |
|:---------:|:-----:|:----------------------------:|
| a, b      | Array | Arrays of the same shape     |
| Returns   | Array | Boolean array of comparisons |

**Example**:

```js
import { equal } from 'openmadness';

equal([1, 2], [1, 3]);
// Result: [true, false]
```

### 2. `mad.greater(a, b)`

Checks if elements in `a` are greater than corresponding elements in `b`:

| Parameter |  Type |        Description       |
|:---------:|:-----:|:------------------------:|
| a, b      | Array | Arrays of the same shape |
| Returns   | Array | Boolean array            |

**Example**:

```js
import { greater } from 'openmadness';

greater([4, 2], [3, 3]);
// Result: [true, false]
```

### 3. `mad.where(condition, a, b)`

Returns elements from `a` where the condition is true, otherwise from `b`:

| Parameter |  Type |          Description         |
|:---------:|:-----:|:----------------------------:|
| condition | Array | Boolean mask                 |
| a, b      | Array | Arrays of values             |
| Returns   | Array | Resulting values from `a` or `b` |

**Example**:

```js
import { where } from 'openmadness';

where([true, false], [1, 2], [3, 4]);
// Result: [1, 4]
```