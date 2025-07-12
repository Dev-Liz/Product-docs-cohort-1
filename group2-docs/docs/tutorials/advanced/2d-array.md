---
lang: en-US
title: "2D Array"
description: "This page will guide you on how to install openmadness"
---

# 2D Arrays

Openmadness simplifies complex 2D array operations with an intuitive, chainable API. This guide provides a comprehensive breakdown of core concepts, key features, advanced use cases, and best practices for working with 2D arrays in Openmadness.

## 2D Array Structure

A 2D array in Openmadness is a nested array where each element is a row.
Example:

```js
[
  [1, 2],
  [3, 4],
]; // Represents a 2x2 matrix
```

Axis Conventions

- `axis=0`: Column-wise operations (vertical)
- `axis=1`: Row-wise operations (horizontal)

## Creating 2D Arrays

Initialize with omArray:

```js
import { omArray } from "Openmadness";

// From nested arrays
const matrix = omArray([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

// From dimensions (3x2 matrix filled with 0)
const zeros = omArray().zeros(3, 2);

// From function (3x3 matrix with random values)
const randomMatrix = omArray().fromFunction(3, 3, () => Math.random());
```

## Key Operations

a. Reshaping & Transformation

- `.reshape(rows, cols)`: Change dimensions (total elements must match)

```js
matrix.reshape(1, 9); // [[1,2,3,4,5,6,7,8,9]]
```

- `.flatten()`: Convert to 1D array

```js
matrix.flatten(); // [1,2,3,4,5,6,7,8,9]
```

- `.transpose()`: Swap rows and columns

```js
matrix.transpose(); // [[1,4,7], [2,5,8], [3,6,9]]
```

b. Mathematical Operations

- Aggregations:

```js
matrix.sum(); // 45 (sum of all elements)
matrix.sum(0); // [12, 15, 18] (column-wise)
matrix.mean(1); // [2, 5, 8] (row-wise averages)
```

- Element-wise Arithmetic:

```js
const matrixA = omArray([
  [1, 2],
  [3, 4],
]);
const matrixB = omArray([
  [5, 6],
  [7, 8],
]);

matrixA.add(matrixB); // [[6, 8], [10, 12]]
matrixA.multiply(matrixB); // [[5, 12], [21, 32]]
```

- Matrix Multiplication (Dot Product):

```js
matrixA.dot(matrixB); // [[19, 22], [43, 50]]
```

c. Slicing & Filtering

- Index-based Slicing:

```js
matrix.slice({ rows: [0, 2], cols: [1, 3] });
// Rows 0-1, Columns 1-2: [[2,3], [5,6]]
```

- Boolean Masking:

```js
const mask = matrix.greaterThan(5);
// [[false, false, false], [false, false, true], [true, true, true]]
matrix.filter(mask); // [6, 7, 8, 9]
```

d. Row/Column Operations

```js
matrix.getRow(1); // [4,5,6]
matrix.setCol(0, [10, 20, 30]); // Replace first column
```

## Advanced Use Cases

a. Linear Algebra

- Matrix Inversion:

```js
const inv = matrix.inverse();
```

- Determinants:

```js
matrix.det();
```

b. Statistics

- Standard Deviation per Column:

```js
matrix.std(0); // [σ_col1, σ_col2, σ_col3]
```

- Correlation Matrix:

```js
matrix.corr();
```

c. Real-World Example: Image Convolution

- Apply a blur kernel to a grayscale image:

```js
const image = omArray([...]); // Pixel matrix
const kernel = omArray([
  [0.1, 0.1, 0.1],
  [0.1, 0.2, 0.1],
  [0.1, 0.1, 0.1]
]);

const blurred = image.convolve(kernel);
```

## Performance & Best Practices

1. Memory Efficiency: Openmadness uses typed arrays for example, `Float64Array` for large matrices.

2. Method Chaining: Chain operations to minimize intermediate arrays

```js
matrix.transpose().reshape(1, 9).sum();
```

3. Avoid Deep Nesting: Prefer omArray over raw nested arrays for optimized operations.

## Edge Cases & Pitfalls

1. Dimension Mismatch: `.dot()` throws if columns (A) ≠ rows (B).
2. Immutability: All methods return new `omArray` objects; original data remains unchanged.
3. Non-Numeric Data: Operations like `.sum()` ignore `NaN/undefined` but may return NaN if all values are invalid.
