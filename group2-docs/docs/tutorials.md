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
[
  [1, 2],
  [3, 4],
]; // Represents a 2x2 matrix
```

Axis Conventions

- `axis=0`: Column-wise operations (vertical)
- `axis=1`: Row-wise operations (horizontal)

#### Creating 2D Arrays

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

#### Creating 3D Arrays

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

#### Advanced Use Cases

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
const matrix = omArray([
  [1, 5],
  [3, 7],
]);
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
  [
    [1, 2],
    [3, 4],
  ], // Layer 0
  [
    [5, 6],
    [7, 8],
  ], // Layer 1
]);

tensor.mean(0); // Per-voxel across layers: [[3,4],[5,6]]
```

2. Pooling (Image/Data Reduction)

```js
const image = omArray([
  [10, 20, 30, 40],
  [50, 60, 70, 80],
  [90, 100, 110, 120],
]);

// 2x2 max pooling
image.pool(2, 2, "max"); // [[60, 80], [110, 120]]
```

- Pool Types: `'mean', 'min', 'max'`

3. Segmented Averages

- Group data via labels:

```js
const values = omArray([10, 20, 30, 40]);
const labels = omArray(["A", "B", "A", "B"]);

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
  [0.1, 0.4, 0.1],
  [0.05, 0.1, 0.05],
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

### Variance

Openmadness provides robust statistical tools for analyzing data dispersion. This guide explains core concepts, practical applications, and implementation details with real-world examples.

1. Core Concepts Explained
   Variance quantifies how far data points spread from their mean:

```math
\sigma^2 = \frac{\sum (x_i - \mu)^2}{N} \quad \text{(Population)}
```

```math
s^2 = \frac{\sum (x_i - \bar{x})^2}{N-1} \quad \text{(Sample)}
```

Key Differences:

- Population Variance (σ²): Entire dataset available (use ddof=0)
- Sample Variance (s²): Subset of population (use ddof=1 for Bessel's correction)

Standard Deviation:

- σ = √σ² (Population)
- s = √s² (Sample)
  More interpretable (same units as data)

2. Practical Applications
   a. Financial Risk Analysis

Problem: Calculate portfolio volatility

```js
const stockReturns = omArray([
  [0.02, -0.01, 0.03], // Apple
  [0.01, 0.02, -0.01], // Microsoft
  [-0.01, 0.03, 0.01], // Google
]);

const weights = omArray([0.5, 0.3, 0.2]);

// Step 1: Compute covariance matrix
const covMatrix = stockReturns.covarianceMatrix({ ddof: 1 });

// Step 2: Calculate portfolio variance (wᵀΣw)
const portVariance = covMatrix.weightedVariance(weights);

// Step 3: Annualize volatility (√252 trading days)
const annualizedVol = Math.sqrt(portVariance * 252);
```

b. Quality Control
Problem: Detect faulty sensors in manufacturing

```js
const sensorReadings = omArray([
  [10.1, 10.2, 10.0, 10.1], // Sensor A
  [9.8, 12.3, 10.5, 8.7], // Sensor B
  [10.0, 10.1, 9.9, 10.0], // Sensor C
]);

// Identify unstable sensors (variance > threshold)
const sensorVariances = sensorReadings.variance(1, { ddof: 1 });
const faultySensors = sensorVariances.greaterThan(0.5);
// Output: [false, true, false] → Sensor B problematic
```

c. Image Processing

Problem: Find edges in medical scans

```js

const mriSlice = omArray([...]); // 512x512 pixel matrix

// Compute local variance (3x3 windows)
const localVariance = mriSlice.rollingVariance(3, {
  padding: 'reflect',
  windowShape: [3,3]
});

// Threshold for edge detection
const edges = localVariance.greaterThan(5000);
```

3. Advanced Multidimensional Analysis

a. Climate Data Analysis

Problem: Assess temperature variability across regions

```js
Copy
Download
// Data structure: [Year][Month][Latitude][Longitude]
const temperatureData = omArray([...]);

// Monthly variability per grid cell (1990-2020)
const monthlyVariance = temperatureData
  .slice({depth: [0, 30]}) // 1990-2020
  .variance([0, 3]);       // Variance across years per month/location

// Identify high-variance regions
const volatileRegions = monthlyVariance.greaterThan(15);
```

b. Machine Learning Preprocessing

Problem: Feature selection for predictive model

```js
const housingData = omArray([
  [2500, 3, 1990], // [sqft, bedrooms, year]
  [3000, 4, 1980],
  // ... 1000 rows
]);

// Calculate feature variances
const featureVars = housingData.variance(0, { ddof: 1 });

// Select high-variance features (threshold = 0.5)
const selectedFeatures = housingData.filterColumns(
  featureVars.greaterThan(0.5)
);
```

c. Time-Series Anomaly Detection
Problem: Identify credit card fraud

```js

const transactionHistory = omArray([...]); // [txn_count, amount] per hour

// Compute rolling 24-hour statistics
const stats = transactionHistory.rollingWindow(24, {
  stats: ['mean', 'std'],
  ddof: 1
});

// Flag anomalies (3σ threshold)
const anomalies = transactionHistory.map((hour, idx) => {
  const [mean, std] = stats.get(idx);
  return hour.subtract(mean).abs().greaterThan(std.multiply(3));
});

```

4. Specialized Variance Methods

a. Weighted Variance

Use case: Survey analysis with sample weights

```js
const responses = omArray([3, 4, 5, 2]); // Satisfaction (1-5)
const weights = omArray([0.8, 1.2, 0.9, 1.1]); // Demographic weights

const weightedVar = responses.weightedVariance(weights, {ddof: 1});
b. Pooled Variance
Use case: Clinical trial analysis
javascript

const groupA = omArray([...]); // Treatment group
const groupB = omArray([...]); // Control group

const pooledVar = omArray.pooledVariance([groupA, groupB], {ddof: 1});
```

c. Covariance Matrix
Use case: Dimensionality reduction (PCA)

```js
const dataMatrix = omArray([...]); // n observations × p features
const covMatrix = dataMatrix.covarianceMatrix({ddof: 1});

// Eigen decomposition for PCA
const {eigenvalues} = covMatrix.eigen();
```

5. Performance Optimization

Memory-Efficient Computation:

```js
// Single-pass algorithm (Welford's method)
function onlineVariance(data) {
  let n = 0;
  let mean = 0;
  let M2 = 0;

  data.forEach((x) => {
    n++;
    const delta = x - mean;
    mean += delta / n;
    M2 += delta * (x - mean);
  });

  return { variance: M2 / (n - 1) }; // Sample variance
}
```

Batch Processing for Large Datasets:

```js
const largeData = omArray([...]); // 10M elements

// Process in chunks
const chunkedVariance = largeData
  .chunk(1000)                   // Process 1000-element chunks
  .map(chunk => chunk.variance())
  .mean();                       // Average of chunk variances
```

6. Common Pitfalls & Solutions

- **Small sample bias:**  
  Solution: Use `ddof=1` for sample variance  
  Example: `data.variance({ddof: 1})`

- **Outlier distortion:**  
  Solution: Use trimmed variance  
  Example: `data.trimmedVariance(0.1)`

- **Missing values:**  
  Solution: Automatic exclusion with warning  
  Example: `[1, NaN, 3].variance()` // = 1

- **Comparing different scales:**  
  Solution: Use coefficient of variation  
  Example: `data.std() / data.mean()`

- **Non-normal distributions:**  
  Solution: Use median absolute deviation (MAD)  
  Example: `data.mad()`

7. Real-World Case Study: E-Commerce

Problem: Analyze sales consistency across product categories

```js
const salesData = omArray([
  // [Electronics, Clothing, Groceries] weekly sales
  [12000, 8000, 15000],
  [11500, 8200, 14900],
  [3000, 8500, 15200], // Electronics outage in week 3
]);

// Category volatility (sample std dev)
const categoryStdDev = salesData.std(0, { ddof: 1 });
// ≈ [4500, 208, 152] → Electronics highly volatile

// Identify anomalous weeks (z-score > 2)
const zScores = salesData
  .subtract(salesData.mean(0))
  .divide(salesData.std(0, { ddof: 1 }));

const anomalies = zScores.abs().greaterThan(2);
// Week 3: [true, false, false]
```

### Algebra

Openmadness provides powerful linear algebra capabilities for vector/matrix operations, transformations, and decompositions. This guide covers essential concepts, advanced techniques, and practical applications across domains.

1. Core Concepts

- Vector: 1D array `[1, 2, 3]`
- Matrix: 2D array `[[1,2],[3,4]]`
- Tensor: Higher-dimensional arrays

**Key Operations:**

- Addition/Subtraction (element-wise)
- Scalar Multiplication
- Matrix Multiplication (dot product)
- Transposition (Aᵀ)

2. Fundamental Operations
   a. Vector Operations

```js
const v = omArray([1, 2, 3]);
const u = omArray([4, 5, 6]);

// Dot product
v.dot(u); // 1*4 + 2*5 + 3*6 = 32

// Cross product (3D only)
v.cross(u); // [-3, 6, -3]

// Norms
v.norm("l2"); // Euclidean: √14 ≈ 3.74
v.norm("l1"); // Manhattan: 6
```

b. Matrix Operations

```js
const A = omArray([
  [1, 2],
  [3, 4],
]);
const B = omArray([
  [5, 6],
  [7, 8],
]);

// Matrix multiplication
A.dot(B); // [[19,22],[43,50]]

// Element-wise operations
A.multiply(B); // [[5,12],[21,32]]

// Scalar operations
A.add(5); // [[6,7],[8,9]]
```

c. Special Matrices

```js
omArray.identity(3); // 3x3 identity
omArray.zeros(2, 4); // 2x4 zero matrix
omArray.diag([1, 2, 3]); // Diagonal matrix
```

3. Advanced Decompositions

a. Eigen Decomposition

```js
const A = omArray([
  [4, 2],
  [1, 3],
]);
const { values, vectors } = A.eigen();

// Eigenvalues ≈ [5.56, 1.44]
// Eigenvectors ≈ [[0.89, -0.45], [0.45, 0.89]]

// Verify: A × v = λ × v
A.dot(vectors.getCol(0)).equals(vectors.getCol(0).multiply(values[0])); // true
```

b. Singular Value Decomposition (SVD)

```js
const M = omArray([
  [1, 2],
  [3, 4],
  [5, 6],
]);
const { U, S, V } = M.svd();

// Reconstruction: M = U × diag(S) × Vᵀ
U.dot(omArray.diag(S)).dot(V.transpose());
```

c. LU Decomposition

```js
const [L, U, P] = A.lu();
// P×A = L×U (P = permutation matrix)
```

4. Solving Linear Systems
   a. Basic Equations
   Solve `Ax = b`:

```js
const A = omArray([
  [3, 2],
  [1, 2],
]);
const b = omArray([5, 7]);
const x = A.solve(b); // [1, 1]
```

b. Least Squares Solutions
For overdetermined systems:

```js
const A = omArray([
  [1, 1],
  [1, 2],
  [1, 3],
]);
const b = omArray([3, 5, 7]);
const x = A.solve(b, { method: "svd" }); // [1, 2]
```

c. Matrix Inversion

```js
const A_inv = A.inv();
A.dot(A_inv).approxEquals(omArray.identity(2)); // true
```

5. Practical Applications
   a. Computer Graphics
   3D Rotation:

```js
function rotationMatrix(axis, θ) {
  const [x, y, z] = axis.normalize().data;
  const c = Math.cos(θ),
    s = Math.sin(θ);
  return omArray([
    [c + x * x * (1 - c), x * y * (1 - c) - z * s, x * z * (1 - c) + y * s],
    [y * x * (1 - c) + z * s, c + y * y * (1 - c), y * z * (1 - c) - x * s],
    [z * x * (1 - c) - y * s, z * y * (1 - c) + x * s, c + z * z * (1 - c)],
  ]);
}

const rotX = rotationMatrix([1, 0, 0], Math.PI / 2);
```

b. Machine Learning
Principal Component Analysis:

```js

const data = omArray([...]); // n×p matrix
const centered = data.subtract(data.mean(0));
const cov = centered.covarianceMatrix();
const { vectors: PCs } = cov.eigen();
const reduced = centered.dot(PCs.sliceCols(0,2));
```

c. Physics Simulations
Spring System:

```js
// Mass-spring stiffness matrix
const K = omArray
  .diag([2, 2, 2])
  .add(omArray.diag([-1, -1], 1))
  .add(omArray.diag([-1, -1], -1));

// Force vector
const F = omArray([0, 9.8, 0]);

// Displacement: Ku = F
const u = K.solve(F);
```

d. Economics (Input-Output Models)

```js
const Leontief = omArray.identity(3).subtract(
  omArray([
    [0.2, 0.1, 0.0],
    [0.3, 0.2, 0.2],
    [0.1, 0.1, 0.3],
  ])
);

const demand = omArray([100, 200, 150]);
const production = Leontief.inv().dot(demand);
```

6. Performance Optimization

- **Small systems:** `lu()`
- **Rank-deficient:** `svd()`
- **Symmetric matrices:** `eigen()`
- **Large sparse:** Iterative methods (future)

Memory Efficiency:

```js
// Avoid temporary matrices
A.dot(B).add(C); // Creates intermediate

// Use chained operations
A.dot(B, { inplace: true }).add(C); // No copy
```

7. Edge Cases & Handling

- **Singular matrix:** `solve()` throws `SingularMatrixError`
- **Non-convergent algorithm:** Throws `ConvergenceError`
- **Dimension mismatch:** Throws `ShapeMismatchError`
- **Ill-conditioned matrix:** Warns about condition number
- **Complex eigenvalues:** Returns complex numbers (future)

8. Real-World Case Study: Robot Arm Kinematics

Problem: Calculate joint angles for target position

```js
// D-H parameters for 3DOF arm
const dh = [
  [θ1, l1, 0, 0],
  [θ2, l2, 0, 0],
  [θ3, l3, 0, 0],
];

// Forward kinematics (matrix chain)
function fk(thetas) {
  return dh.reduce(
    (T, [θ, a, d, α], i) =>
      T.dot(
        omArray([
          [
            Math.cos(θ),
            -Math.sin(θ) * Math.cos(α),
            Math.sin(θ) * Math.sin(α),
            a * Math.cos(θ),
          ],
          [
            Math.sin(θ),
            Math.cos(θ) * Math.cos(α),
            -Math.cos(θ) * Math.sin(α),
            a * Math.sin(θ),
          ],
          [0, Math.sin(α), Math.cos(α), d],
          [0, 0, 0, 1],
        ])
      ),
    omArray.identity(4)
  );
}

// Inverse kinematics using Newton-Raphson
const target = omArray([x, y, z]);
let θ = initialGuess;
for (let i = 0; i < 100; i++) {
  const J = numericalJacobian(fk, θ); // Matrix of partial derivatives
  const pos = fk(θ).sliceRows(0, 3, 3); // Position vector
  const Δθ = J.solve(target.subtract(pos));
  θ = θ.add(Δθ);
}
```
