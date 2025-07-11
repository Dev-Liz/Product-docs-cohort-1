---
lang: en-US
title: Basic Array Operations
description: Get to know how to perform basic array operations in openmadness library
---

# Basic Array Operations


This section covers basic arithmetic operations you can perform using the `openMadness` library. These basic arithmetic operations include:

1. sum()

2. subtract()

3. multiply()

4. dot()


**1. Sum()**: This method allows you to calculate the sum of all numbers in an array.

**Example**:

``` javascript
import { omArray } from 'openmadness';
const arrayOne= omArray ([15, 12, 5, 19, 25]);
const arrayTwo = omArray([8, 24, 10, 5, 13]);
const sumOfArray = omArray.sum(arrayOne, arrayTwo);
console.log(“Addition of an array”, sumOfArray)
```

**Output:**


![Addition of array in Openmadness library](/additionOfArrays.png)

**2. subtract()**: This method allows you to find the difference between two arrays.

**Example**:

``` javascript
import { omArray } from 'openmadness';
const arrayOne= omArray ([15, 12, 5, 19, 25]);
const arrayTwo = omArray([8, 24, 10, 5, 13]);
const subtractArray = omArray.sub(arrayOne, arrayTwo);
console.log(“subtraction of an array”, subtractArray)
```
**Output:**

![Subtraction of arrays in Openmadness library](/subtractionOfArrays.png)

**3. multiply()**: This method allows you to multiply arrays together.

**Example**: 

``` javascript
import { omArray } from 'openmadness';
const arrayOne= omArray ([15, 12, 5, 19, 25]);
const arrayTwo = omArray([8, 24, 10, 5, 13]);
const multiplyArray = omArray.multiply(arrayOne, arrayTwo);
console.log(“Multiplication of an array”, multiplyArray)
```
**Output**:

![Multiplication of arrays in Openmadness library](/multiplicationOfArrays.png)

**4. dot()**: This method allows you to calculate the dot product of two arrays, i.e., multiplying the corresponding array elements and summing them up.

**Example**: 

``` javascript
import { omArray } from 'openmadness';
const arrayOne= omArray ([15, 12, 5, 19, 25]);
const arrayTwo = omArray([8, 24, 10, 5, 13]);
const dotArray = omArray.dot(arrayOne, arrayTwo);
console.log(“Dot of an array”, divArray);

// Explanation:

Dot = [(15*8) + (12*24) + (5*10) + (19*5) + (25*13)];
```
**Output**:

![Dot of an Array in Openmadness library](/dotOfArrays.png)