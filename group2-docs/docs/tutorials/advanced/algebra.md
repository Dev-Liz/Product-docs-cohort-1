---
lang: en-US
title: "Algebra"
description: "This page will guide you on how to install openmadness"
---

# Algebra

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

## Advanced
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
Footer
© 2025 GitHub, Inc.
Footer navigation
Terms
Privacy
Secu