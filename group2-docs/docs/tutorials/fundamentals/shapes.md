---
lang: en-US
title: "Shapes"
description: "Learn how shapes define the structure of arrays in Openmadness"
---

# Understanding Array Shapes

In Openmadness, the **shape** of an array defines its dimensions and structure. It's like a blueprint that describes how your data is organized in space.

## What is Shape?

The shape property returns an array where each element represents the size of a dimension:

- For a 1D array (vector): shape is `[length]`
- For a 2D array (matrix): shape is `[rows, columns]`
- For a 3D array (cube): shape is `[depth, rows, columns]`

## Examples

- 1D Array (Vector)

```js
const temperatures = om.array([72, 75, 68, 71, 69]);
console.log("Temperatures shape:", temperatures.shape); // Output: [5]
// A single dimension with 5 elements
```

- 2D Array (Matrix)

```js
const monthlyRevenue = om.array([
  [45000, 52000, 49000], // Q1 revenue for 3 products
  [48000, 51000, 47000], // Q2 revenue for 3 products
  [50000, 53000, 51000], // Q3 revenue for 3 products
]);
console.log("Monthly Revenue shape:", monthlyRevenue.shape); // Output: [3, 3]
// 3 rows and 3 columns
```

- 3D Array (Cube)

```js
const yearlyData = om.array([
  // Year 1
  [
    [10, 20, 30], // Product A, regions 1-3
    [15, 25, 35], // Product B, regions 1-3
  ],
  // Year 2
  [
    [12, 22, 32], // Product A, regions 1-3
    [17, 27, 37], // Product B, regions 1-3
  ],
]);
console.log("Yearly Data shape:", yearlyData.shape); // Output: [2, 2, 3]
// 2 years, 2 products, 3 regions
```

## Why Shapes Matter

Understanding shapes is essential because:

1. **Operation Compatibility**: Many operations require arrays with compatible shapes
2. **Broadcasting**: OpenMadness can automatically expand smaller arrays to match larger ones
3. **Performance**: Knowing your data's shape helps optimize memory usage and computation

## Reshaping Arrays

You can transform an array's shape while preserving its data using the `reshape()` method:

```js
import om from "openmadness";

const data = om.array([1, 2, 3, 4, 5, 6]);
console.log("Original shape:", data.shape); // Output: [6]

const reshaped = data.reshape([2, 3]);
console.log("Reshaped data:", reshaped.data);
// Output: [[1, 2, 3], [4, 5, 6]]
console.log("New shape:", reshaped.shape); // Output: [2, 3]
```

::: tip Remember
When reshaping, the total number of elements must remain the same (2×3=6 in the example above).
:::