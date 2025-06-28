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

## Mini Linear Algebra with Openmadness

Linear algebra is a branch of mathematics that helps us work with vectors, matrices, and other multi-dimensional data. Openmadness provides some key operations that let you explore this world without needing a deep math background.

### Dot Product

The **dot product** is a fundamental operation in linear algebra. It's a way to multiply two vectors or matrices and get a single number. You'll often see it in machine learning and data science. In Openmadness, you can use `.dot()` to calculate it.

#### Dot product of two vectors

```javascript
import { omArray } from 'openmadness';

const vectorA = omArray([1, 2, 3]);
const vectorB = omArray([4, 5, 6]);

const dotProduct = vectorA.dot(vectorB);
console.log(dotProduct); // ➝ (1*4 + 2*5 + 3*6) = 4 + 10 + 18 = 32
// Expected output: 32

```

### Matrix multiplication

The dot product is also essential for matrix multiplication. If you have two matrices, you can use `.dot()` to multiply them.

```javascript
const matrixA = omArray([
  [1, 2],
  [3, 4]
]);

const matrixB = omArray([
  [5, 6],
  [7, 8]
]);

const productMatrix = matrixA.dot(matrixB);
console.log(productMatrix);
// Expected output:
// [[(1*5 + 2*7), (1*6 + 2*8)],
//  [(3*5 + 4*7), (3*6 + 4*8)]]
// which simplifies to:
// [[19, 22],
//  [43, 50]]

```
As you can see, Openmadness gives you a simple, chainable way to perform these powerful linear algebra calculations. 

### Multiply a matrix by a scalar

```javascript
const M = omArray([
  [1, 2],
  [3, 4]
]);

const result = M.multiply(10);
console.log(result.toArray());
// ➝ [[10, 20], [30, 40]]

```
This scales every element of the matrix. It is perfect for normalizing or transforming data.

## Building a Tiny Neural Network

You can use Openmadness to build a basic neural network prototype — just enough to demonstrate a forward pass using matrix operations.

This section walks you through creating a simple, 3-layer neural net: one input layer, one hidden layer, and one output layer. There's no training involved — this is a static prototype for understanding how data flows through layers.

**Step 1: Import and Define Inputs**

```javascript
import { omArray } from 'openmadness';

const inputs = omArray([
  [1, 0],
  [0, 1]
]);

```
Each row represents one input sample with two features.

**Step 2: Define Random Weights**

```javascript
const weights1 = omArray([
  [Math.random(), Math.random()],
  [Math.random(), Math.random()]
]);

const weights2 = omArray([
  [Math.random()],
  [Math.random()]
]);

```
- `weights1` connects the input layer to the hidden layer (2x2)
- `weights2` connects the hidden layer to the output layer (2x1)

**Step 3: Add Sigmoid Function**

```javascript
const sigmoid = (x) => 1 / (1 + Math.exp(-x));
```
**Step 4: Forward Pass**

```javascript
const hidden = inputs
  .dot(weights1)
  .map(row => row.map(sigmoid));

const output = omArray(hidden)
  .dot(weights2)
  .map(row => row.map(sigmoid));

console.log('Output:', output.values);

```
**Run the Code**

To run the script:

```bash
node tiny-net.js
```
Example output:

```bash
Output: [ [ 0.74 ], [ 0.68 ] ]
```
Each output value corresponds to a prediction for the input sample.

### Next Steps

This forward-pass prototype can be expanded by:
- Adding more hidden layers
- Replacing sigmoid with ReLU or another activation
- Implementing error calculation and training via backpropagation
