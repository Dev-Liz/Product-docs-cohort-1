---
lang: en-US
title: "Variance"
description: "This page will guide you on how to install openmadness"
---

# Variance

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