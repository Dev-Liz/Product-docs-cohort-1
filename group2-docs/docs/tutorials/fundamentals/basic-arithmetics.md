---
lang: en-US
title: "Basic Arithmetic"
description: "Learn how to perform basic arithmetic operations in OpenMadness library"
---

# Basic Arithmetic

OpenMadness makes performing common math operations on arrays easier and more efficient. Instead of performing calculations one by one, OM lets you apply operations to entire arrays at once.

When you use an arithmetic method like `add()` or `multiply()` on an array, it applies that operation to every corresponding number in the array. If you add a single number (a scalar), it's added to every element in the array.

For example, if you have an array of daily sales for each day using this data:

| Day   | Sales | Marketing Spend |
|-------|-------| ---------------|
| Day 1 | 100   | 10            |
| Day 2 | 150   | 25            |
| Day 3 | 200   | 40            |

you can easily perform the following operations on it:

1. Create arrays for daily sales and marketing spend:

```js
import { omArray } from 'openmadness';

// Create arrays
const dailySales = omArray(100, 150, 200);
const marketingSpend = omArray(10, 25, 40);

console.log("Daily Sales:", dailySales.data); // Output: [100, 150, 200]
console.log("Marketing Spend:", marketingSpend.data); // Output: [10, 25, 40]
```

2. To calculate the total revenue by adding the marketing spend to each sale:

```js
// Add two arrays (element-wise)
const totalRevenue = dailySales.add(marketingSpend);
console.log("Total Revenue (Sales + Spend):", totalRevenue.data); // Output: [110, 175, 240]
```

3. To calculate the net sales by subtracting the marketing spend from each sale:

``` js
const netSales = dailySales.subtract(marketingSpend);
console.log("Net Sales (Sales - Spend):", netSales.data); // Output: [90, 125, 160]
```

4. To Calculate the sales after each day increased using this data:

| Day   | Sales Increase |
|-------|----------------|
| Day 1 | 50             |
| Day 2 | 75             |
| Day 3 | 20             |

``` js
const salesIncrease = dailySales.add([50, 75, 20]);
console.log("Sales after increase:", salesIncrease.data); // Output: [140, 200, 180 ]
```

5. To calculate the doubled sales by multiplying each sale by 2:

```js
const doubledSales = dailySales.multiply(2);
console.log("Doubled Sales:", doubledSales.data); // Output: [280, 400, 360]
```

6. To calculate the sales ratio by dividing each sale by the corresponding marketing spend:

```js
const salesRatio = dailySales.divide(marketingSpend);
console.log("Sales Ratio (Sales / Spend):", salesRatio.data); // Output: [10, 6, 5]
```