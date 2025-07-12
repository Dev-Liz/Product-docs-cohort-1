---
lang: en-US
title: "Building a Network"
description: "Learn to build a Neural Network with Openmadness"
---


# Building a Tiny Neural Network

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
- Implementing error calculation and training via backpropagation.