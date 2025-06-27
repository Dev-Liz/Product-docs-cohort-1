---
lang: en-US
title: Accessing Arrays
description: Get to know how to access array elements in openmadness library

---

# Accessing Array Elements
You can access the elements in an array by using the index number. An index number refers to a unique numeric ID that represents the position of elements in an array.

Indexing in the `openMadness` starts from 0. I.e., if there are four elements in an array, e.g., 5, 9, 10, and 3. The first number `5` has an index of `0`, the second number `9` has an index of `1`, the third number `10` has an index of `3`, and so on.
How to Access an Element in an Array
You can access an element in an array by enclosing its index number in a bracket `[ ]` beside the variable.

Example:
``` om
import { omArray } from 'openmadness';
  const age = onArray [18, 25, 17, 23, 11 ];
  console.log(age [ 4] ); // 2 represents the index number of age 11
  console.log( age [0]) //  0 represents the index number of age 18
```
## How to Access More Than One Element in an Array

You can access more than one element in an array by enclosing all the index numbers you want to retrieve in a bracket `[ ]` beside the variable.
Example:

``` javascript
import { omArray } from 'openmadness';
const age = onArray [18, 25, 17, 23, 11 ];
console.log(age [ 2, 4 ] ); // This retrieves age 17 and 11
console.log( age [0, 3]) //  This retrieves age 18 and 17 
```
## How to Access All the Elements in an Array
You can access all the elements in an array by passing the array variable.
**Example**: 

``` javascript
import { omArray } from 'openmadness';
const age = onArray [18, 25, 17, 23, 11 ];
console.log(age );  // This retrieves all the age numbers.
```

