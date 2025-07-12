---
lang: en-US
title: "3D Array"
description: "This page will guide you on how to install openmadness"
---

# 3D Array

Openmadness extends its intuitive application programming interface (API) to 3D arrays (tensors), enabling complex volumetric, spatial, and time-series operations. Below is a comprehensive technical breakdown of 3D tensor capabilities.

## 3D Array Structure

A 3D tensor is a nested array of depth × rows × columns:

```js
[
  [
    [1, 2],
    [3, 4],
  ], // Layer 0
  [
    [5, 6],
    [7, 8],
  ], // Layer 1
]; // 2×2×2 tensor
```

Axis Conventions

- `axis=0`: Depth (front-to-back layers)
- `axis=1`: Rows (top-to-bottom)
- `axis=2`: Columns (left-to-right)

## Creating 3D Arrays

```js
import { omArray } from "Openmadness";

// From nested arrays
const tensor = omArray([
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
]);

// From dimensions (2x3x4 tensor filled with 1)
const ones = omArray().ones(2, 3, 4);

// Functional initialization
const coordTensor = omArray().fromFunction(
  2,
  2,
  2,
  (d, r, c) => d * 100 + r * 10 + c
);
// Output: [[[000,001],[010,011]], [[100,101],[110,111]]]
```

## Key Operations

1. Reshaping & Transformation

- `.reshape(depth, rows, cols) ` preserves total elements:

```js
tensor.reshape(4, 1, 2); // 4x1x2 tensor
```

- `.flatten()`

```js
tensor.flatten(); // [1,2,3,4,5,6,7,8] (full flatten)
tensor.flatten(1); // [[1,2,3,4], [5,6,7,8]] (layer-wise)
```

- `.transpose(order)` reorder axes:

```js
tensor.transpose([1, 0, 2]); // Swaps depth and rows
```

2. Mathematical Operations

- Aggregations:

```js
tensor.sum(); // 36 (all elements)
tensor.max(0); // [[5,6],[7,8]] (max per depth)
tensor.mean(2); // [[1.5, 3.5], [5.5, 7.5]] (column means)
```

- Element-wise arithmetic:

```js
const tensorB = omArray([
  [
    [8, 7],
    [6, 5],
  ],
  [
    [4, 3],
    [2, 1],
  ],
]);
tensor.add(tensorB); // [[[9,9],[9,9]], [[9,9],[9,9]]]
```

- Tensor contraction:

```js
tensor.dot(tensorB, { axes: [2, 2] }); // Contracts last axis
```

3. Slicing & Filtering

- Hyperplane slicing:

```js
tensor.slice({ depth: [0, 1], rows: 1, cols: ":" });
// Returns: [[[3,4]], [[7,8]]]
```

- Boolean masking:

```js
const mask = tensor.greaterThan(3);
tensor.filter(mask); // [4,5,6,7,8]
```

4. Layer/Row/Column Operations

```js
tensor.getLayer(1); // [[5,6],[7,8]]
tensor.setPlane(0, 2, [
  [9, 9],
  [9, 9],
]); // Set depth=0, col=2
```

## Advanced Use Cases

1. Volumetric Data Processing

1. Compute depth-wise gradients:

```js
const depthGradient = tensor.diff(0); // Depth differences
const magnitude = depthGradient.norm(); // Euclidean norm per voxel
```

2. Time-Series Analysis

- Apply moving average to sensor data:

```js
const sensorData = omArray([...]); // 100×8×60 tensor (time×sensors×samples)

const smoothed = sensorData.convolve(
  omArray().ones(5, 1, 1).divide(5),
  { strides: [1,1,1] }
);
```

3. RGB Image Processing

- Convert batch to grayscale:

```js
const images = omArray([...]); // 32×128×128×3 tensor

const grayscale = images.reduce(2, (channel) =>
  channel.dot([0.2989, 0.5870, 0.1140])
); // Output: 32×128×128 tensor
```

## Performance & Best Practices

1. Memory Layout: Usescolumn-major order (depth→rows→cols) for cache efficiency

2. Broadcasting: Tensors auto-expand dimensions for example `(4,1,3)` + `(1,5,3)` → `(4,5,3)`.

3. Lazy Evaluation: Method chains (`.transpose().slice().sum()`) minimize intermediate copies.

## Edge Cases & Pitfalls

1. Dimension Alignment: `.dot()` requires contracted axes to match for example, `tensorA.shape[2] == tensorB.shape[1]`.
2. Empty Slices: Returns empty `omArray` without error when slicing beyond bounds.
3. Type Coercion: Non-numeric elements for example, `null` convert to `0` in operations.
