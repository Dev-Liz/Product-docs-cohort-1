---
title: "Statistics"
description: "This page will guide you on how to install openmadness"
---


# Statistics

## Minimum and Maximum Values
Openmadness provides simple methods to quickly find the extreme values in your dataset: the smallest number using min() and the largest using max(). This helps you quickly see how high and low your numbers go.
* min()
Get the lowest value in your Openmadness array.
* max()
Get the highest value in your Openmadness array.

```js
import om from 'openmadness';

const stockPrices = om.array([120.50, 122.10, 119.80, 125.00, 121.75]);
console.log("Stock Prices:", stockPrices.data);

const lowestPrice = stockPrices.min();
console.log("Lowest price:", lowestPrice); // Output: 119.8

const highestPrice = stockPrices.max();
console.log("Highest price:", highestPrice); // Output: 125

```

#### sum()
Calculate the total sum of all numbers in your array. We saw this earlier with axes, but here's a simple example.

```js
import om from 'openmadness';

const monthlyExpenses = om.array([300, 150, 75, 200, 120]);
console.log("Monthly Expenses:", monthlyExpenses.data);

const totalExpenses = monthlyExpenses.sum();
console.log("Total Monthly Expenses:", totalExpenses); // Output: 845

```