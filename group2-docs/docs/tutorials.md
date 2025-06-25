# Tutorials


## Fundamentals

### Arrays


### Arrays


### Arrays




## Advanced

### 2D Arrays

Openmadness simplifies complex 2D array operations with an intuitive, chainable API. This guide provides a comprehensive breakdown of core concepts, key features, advanced use cases, and best practices for working with 2D arrays in Openmadness.

#### 2D Array Structure

A 2D array in Openmadness is a nested array where each element is a row.
Example:

```js
[[1, 2], [3, 4]] // Represents a 2x2 matrix
```

Axis Conventions
- `axis=0`: Column-wise operations (vertical)
- `axis=1`: Row-wise operations (horizontal)


#### Creating 2D Arrays
Initialize with omArray:

```js
import { omArray } from 'Openmadness';

// From nested arrays
const matrix = omArray([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);

// From dimensions (3x2 matrix filled with 0)
const zeros = omArray().zeros(3, 2);

// From function (3x3 matrix with random values)
const randomMatrix = omArray().fromFunction(3, 3, () => Math.random());
```


#### Key Operations
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
matrix.sum();      // 45 (sum of all elements)
matrix.sum(0);     // [12, 15, 18] (column-wise)
matrix.mean(1);    // [2, 5, 8] (row-wise averages)
```

- Element-wise Arithmetic:

```js
const matrixA = omArray([[1, 2], [3, 4]]);
const matrixB = omArray([[5, 6], [7, 8]]);

matrixA.add(matrixB);      // [[6, 8], [10, 12]]
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

#### Advanced Use Cases
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

#### Performance & Best Practices
1. Memory Efficiency: Openmadness uses typed arrays for example, `Float64Array` for large matrices.

2. Method Chaining: Chain operations to minimize intermediate arrays

```js
matrix.transpose().reshape(1, 9).sum();
```

3. Avoid Deep Nesting: Prefer omArray over raw nested arrays for optimized operations.

#### Edge Cases & Pitfalls
1. Dimension Mismatch: `.dot()` throws if columns (A) ≠ rows (B).
2. Immutability: All methods return new `omArray` objects; original data remains unchanged.
3. Non-Numeric Data: Operations like `.sum()` ignore `NaN/undefined` but may return NaN if all values are invalid.


### 3D Array
Openmadness extends its intuitive application programming interface (API) to 3D arrays (tensors), enabling complex volumetric, spatial, and time-series operations. Below is a comprehensive technical breakdown of 3D tensor capabilities.

#### 3D Array Structure

A 3D tensor is a nested array of depth × rows × columns:

```js
[
  [[1,2], [3,4]],  // Layer 0
  [[5,6], [7,8]]   // Layer 1
]  // 2×2×2 tensor
```

Axis Conventions
- `axis=0`: Depth (front-to-back layers)
- `axis=1`: Rows (top-to-bottom)
- `axis=2`: Columns (left-to-right)

#### Creating 3D Arrays

```js
import { omArray } from 'Openmadness';

// From nested arrays
const tensor = omArray([
  [ [1, 2], [3, 4] ],
  [ [5, 6], [7, 8] ]
]);

// From dimensions (2x3x4 tensor filled with 1)
const ones = omArray().ones(2, 3, 4);

// Functional initialization
const coordTensor = omArray().fromFunction(2, 2, 2, (d, r, c) => d*100 + r*10 + c);
// Output: [[[000,001],[010,011]], [[100,101],[110,111]]]

```


#### Key Operations
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
tensor.transpose([1,0,2]); // Swaps depth and rows
```


2. Mathematical Operations
- Aggregations:

```js
tensor.sum();        // 36 (all elements)
tensor.max(0);       // [[5,6],[7,8]] (max per depth)
tensor.mean(2);      // [[1.5, 3.5], [5.5, 7.5]] (column means)
```


- Element-wise arithmetic:

```js
const tensorB = omArray([[[8,7],[6,5]], [[4,3],[2,1]]]);
tensor.add(tensorB); // [[[9,9],[9,9]], [[9,9],[9,9]]]
```

- Tensor contraction:
```js
tensor.dot(tensorB, { axes: [2, 2] }); // Contracts last axis
```

3. Slicing & Filtering

- Hyperplane slicing:
```js
tensor.slice({ depth: [0,1], rows: 1, cols: ':' });
// Returns: [[[3,4]], [[7,8]]]
```

- Boolean masking:
```js
const mask = tensor.greaterThan(3);
tensor.filter(mask); // [4,5,6,7,8]
```


4. Layer/Row/Column Operations
```js
tensor.getLayer(1);        // [[5,6],[7,8]]
tensor.setPlane(0, 2, [[9,9],[9,9]]); // Set depth=0, col=2
```


#### Advanced Use Cases

1. Volumetric Data Processing

1. Compute depth-wise gradients:
```js
const depthGradient = tensor.diff(0);  // Depth differences
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

#### Performance & Best Practices
1. Memory Layout: Usescolumn-major order (depth→rows→cols) for cache efficiency

2. Broadcasting: Tensors auto-expand dimensions for example `(4,1,3)` + `(1,5,3)` → `(4,5,3)`.

3. Lazy Evaluation: Method chains (`.transpose().slice().sum()`) minimize intermediate copies.

#### Edge Cases & Pitfalls
1. Dimension Alignment: `.dot()` requires contracted axes to match for example, `tensorA.shape[2] == tensorB.shape[1]`.
2. Empty Slices: Returns empty `omArray` without error when slicing beyond bounds.
3. Type Coercion: Non-numeric elements for example, `null` convert to `0` in operations.


### Average
Beyond simple arithmetic mean, Openmadness provides sophisticated averaging techniques for statistical analysis, signal processing, and weighted data aggregation. Below is a comprehensive guide to these advanced methods.

#### What is the Average?
The average (or mean) is the sum of all elements divided by the number of elements. It represents the central value of a dataset.

#### Core Average Methods
1. Basic Arithmetic Mean

```js
const data = omArray([2, 4, 6, 8]);
data.mean(); // 5
```

- Axis Support for ND Arrays:
```js
const matrix = omArray([[1, 5], [3, 7]]);
matrix.mean(0); // [2, 6] (column-wise)
matrix.mean(1); // [3, 5] (row-wise)
```

2. Weighted Average
- Apply weights to values:

```js
const values = omArray([10, 20, 30]);
const weights = omArray([0.2, 0.3, 0.5]);

values.weightedAverage(weights); // (10*0.2 + 20*0.3 + 30*0.5) = 23
```


3. Moving Average (Rolling Mean)

- Smooth time-series data with window size:
```js
const stockPrices = omArray([102, 104, 103, 106, 105]);
stockPrices.movingAverage(3); // [null, 103, 104.33, 104.67, 105]
```

Options:
- `padding: 'wrap'|'reflect'|'clamp'`
- `align: 'left'|'center'|'right'`

#### Specialized Averages
1. Exponential Moving Average (EMA)

- Prioritize recent data with decay factor (α): 
```js
const sensorData = omArray([22, 24, 23, 25]);
sensorData.ema(0.5); // [22, 23, 23, 24]
```


Formula:
`EMAₜ = α * current + (1-α) * EMAₜ₋₁`

2. Mode & Median

```js
omArray([1, 3, 3, 6]).median(); // 3
omArray([1, 2, 2, 3]).mode(); // [2] (multi-modal returns array)
```

3. Truncated Mean

- Exclude outliers:

```js
const examScores = omArray([40, 55, 80, 85, 90, 95]);
examScores.trimmedMean(0.1); // Discard lowest/highest 10% → [55,80,85,90] → 77.5
```

#### Multi-Dimensional Averaging
1. Layer-wise Averages (3D Arrays)

```js
const tensor = omArray([
  [ [1,2], [3,4] ],  // Layer 0
  [ [5,6], [7,8] ]   // Layer 1
]);

tensor.mean(0); // Per-voxel across layers: [[3,4],[5,6]]
```

2. Pooling (Image/Data Reduction)

```js
const image = omArray([
  [10, 20, 30, 40],
  [50, 60, 70, 80],
  [90, 100, 110, 120]
]);

// 2x2 max pooling
image.pool(2, 2, 'max'); // [[60, 80], [110, 120]]
```


- Pool Types: `'mean', 'min', 'max'`

3. Segmented Averages

- Group data via labels:

```js
const values = omArray([10, 20, 30, 40]);
const labels = omArray(['A', 'B', 'A', 'B']);

values.groupAverage(labels);
// { A: (10+30)/2=20, B: (20+40)/2=30 }
```

#### Advanced Use Cases
1. Time-Series Smoothing
- Combine EMA and moving averages:

```js
const rawData = omArray([...]); // Noisy sensor readings
const smoothed = rawData
  .movingAverage(5, { padding: 'reflect' })
  .ema(0.3);

```

2. Weighted Spatial Averaging

- Blur image with kernel weights:
```js
const kernel = omArray([
  [0.05, 0.1, 0.05],
  [0.1,  0.4, 0.1],
  [0.05, 0.1, 0.05]
]);

image.convolve(kernel); // Weighted average per pixel
```

3. Statistical Rollups

- Analyze 3D climate data:
```js
const temperatureCube = omArray([...]); // [days×lat×lon]

// Daily global averages
const dailyMeans = temperatureCube.mean([1,2]);

// Monthly zonal averages (axis1=latitude)
const monthlyZones = temperatureCube
  .reshape(12, 30, 180, 360) // Group into months
  .mean([2,3]);

```

#### Performance & Best Practices
1. Lazy Chaining:

```js
largeTensor.slice(...).flatten().mean(); // Minimal intermediates
```

2. Precomputed Weights: Cache weight arrays for repeated calculations.
3. Typed Arrays: Use `Float32Array` for large datasets.

#### Edge Cases
1. Empty Inputs: `.mean()` returns `NaN` for empty arrays.
2. All-NaN Segments: Omitted from calculations with warning.
3. Uniform Weights: `weightedAverage()` defaults to arithmetic mean if weights sum to 0.





