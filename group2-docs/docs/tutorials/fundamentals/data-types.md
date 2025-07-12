---
lang: en-US
title: "Data Types"
description: "Learn about the data types in OpenMadness library"
---

# Data Types

In OM, numbers are the primary data type. They can be whole numbers e.g `10`, `500` or numbers with decimal points e.g `3.14`, `0.5`.
While JavaScript has other data types e.g **strings for text** or **booleans for true/false values**, OM functions are designed for numerical calculations. If you try to include non-numbers, OM might convert them to `NaN` meaning it can't understand them or throw an error. 

For example:

You can calculate an array of prices that contains both float and integer:

```js
import { add } from "openmadness";
const prices = add([24.99, 12.50, 5.00]);
console.log("Numeric prices:", prices.data);
```

What happens if you try to include a string?

```js
import { add } from "openmadness";
const mixedItems = add([10, 'apple', 20]);
console.log("Mixed data:", mixedItems.data); // Output: [10, NaN, 20]
// 'apple' can't be converted to a number, so it becomes NaN.
```

::: note
 For reliable results, always provide numbers to Openmadness arrays.
:::