---
lang: en-US
title: Introduction to Array
description: Get to know the basics of array in Open madenss library, including the types and importance of using it.

---

# Introduction to Array

An array is a data structure that allows you to store a collection of items with the same data type. This data type includes integers, characters, floats, doubles, etc. With an array, you can store multiple numbers or letters in a single variable.

Here is a simple example of an array that stores five different numbers:

``` javascript
  const myArray= omArray([1, 4, 10, 3, 9]);
```

## Importance of Arrays

Arrays offer several advantages, which include:

1. **Efficient Data Storage and Retrieval**: Arrays store multiple data in a sequential order in the computer memory, which makes it easier to directly retrieve elements using their index. I.e., a unique ID that indicates the position of each element in the array

2. **Enhanced Organization**: Arrays store multiple items of the same data type in a single variable, which makes it easier to organize and manage large sets of data.

3. **Memory Efficiency**: Arrays store elements in a contiguous memory, i.e., each element is stored next to the previous ones in a single block, which reduces memory usage.

4. **Code Reusability**: Data stored in arrays can be used multiple times in different parts of the program, which prevents code duplication.

5. **Iteration and Manipulation**: Data stored in an array is iterable, which makes it easy to process each item in the array and manipulate data effectively.


## Types of Arrays

There are different types of arrays in OpenMadness, which include:

**1. 1-D Arrays**: This array type contains a sequence of elements, and they have only one dimension.

**Example**

``` javascript
import { omArray } from 'openmadness';

oneDArray = omArray([1, 7, 4])
```
In this example, the `omArray` function was imported from the `openMadness` library to use the array method. Then, three items of the same data type (1, 7, 4) were stored in the `oneDArray` variable.

**2. 2-D Arrays**: This array type stores data in rows and columns similar to a spreadsheet.

**Example**:
``` javascript
import { omArray } from 'openmadness';

twoDArray = omArray([[1, 7], [4, 3]])
```
**Explanation**:

In this example, the `omArray` function was imported from the `Openmadness` library to use the array method. The array [[1, 7], [4, 3]] is a 2-dimensional array made up of two rows: The first row is [1, 7]. The second row is [4, 3].
Each inner array represents a row, and the values inside each row represent the columns. So the `twoDArray` variable stores a 2x2 array (2 rows and 2 columns) of numbers. 

**3. Multi-Dimensional Arrays**: These array types have three or more dimensions and are used for representing complex data structures like images or volumetric data.

``` javascript
import { omArray } from 'openmadness';

threeDArray = omAarray([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
```

**Explanation**:

In this example, the `omArray` function was imported from the `Openmadness` library. The `threeDArray` variable stores a 3-D array with: 
- 2 layers, each a 2-D array.
- Each layer has 2 rows and 2 columns. It forms a 2 × 2 × 2 array, representing data in depth, rows, and columns.