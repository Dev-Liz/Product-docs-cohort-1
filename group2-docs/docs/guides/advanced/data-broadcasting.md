---
lang: en-US
title: "Data Broadcasting"
description: "This page will guide you on how to install openmadness"
---

# Advanced Guide

This advanced guide will show you how to perform operations on arrays of different sizes and dive into some core linear algebra concepts.

We’ll explore three powerful concepts:
* Broadcasting like a pro
* Mini Linear Algebra with Openmadness
* Building a tiny neural net prototype

## Broadcasting like a pro

Imagine you have a list of numbers and you want to add 10 to every single one of them. You could loop through the list and add 10 to each number one by one, but that's a lot of work. **Broadcasting** lets you do this in a single, simple operation.

In Openmadness, broadcasting allows you to perform operations between arrays of different shapes. The smaller array "stretches" to match the shape of the larger one so the operation can happen.

### Add a number to every item in an array

Let's say you want to add a single number to every element in an array.

```javascript
import { omArray } from 'openmadness';

const scores = omArray([85, 90, 95]);
const boostedScores = scores.add(5); // Add 5 to each element
console.log(boostedScores);
// Expected output: [90, 95, 100]

```
Here, the number `5` is "broadcast" across the entire `scores` array. This saves you from writing a loop and keeps your code clean and readable.

### Add two arrays of the same shape

This also works with arrays of different shapes, as long as their dimensions are compatible. The library automatically handles the stretching of the smaller array to fit the larger one. For example, you can add a simple list to a 2D grid:

```javascript
const matrix = omArray([
  [1, 2, 3],
  [4, 5, 6]
]);

const rowToAdd = omArray([10, 20, 30]);

const result = matrix.add(rowToAdd);
console.log(result);
// Expected output:
// [[11, 22, 33],
//  [14, 25, 36]]

```
In this example, the `rowToAdd` array is broadcast to each row of the `matrix`. This is useful for applying a consistent change across your data.

### Add a row vector to a matrix

```javascript
const matrix = omArray([
  [1, 2],
  [3, 4]
]);
const vector = omArray([10, 20]);

const result = matrix.add(vector);

console.log(result.toArray());
// ➝ [[11, 22], [13, 24]]

```
Behind the scenes, Openmadness stretches `vector` across each row. You get readable code and fewer loops.

::: warning 
Keep in mind: shapes must be compatible for broadcasting.
 You’ll get helpful errors if they’re not.
:::
