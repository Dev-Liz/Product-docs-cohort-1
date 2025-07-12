---
title: "Size"
description: "Learn about the sizes of Arrays in Openmadness"
---

# Size

The size of an Openmadness array is simply the total number of elements it contains. It's the grand count of all the individual numbers, regardless of how they're organized into dimensions.
You can find the size using the size property.

```js
import om from 'openmadness';

const temperatures = om.array([25, 28, 22, 27, 26]);
console. log("Temperatures:", temperatures.data);
console.log("Shape of temperatures:", temperatures.shape); // Output: [5]
console.log("Size of temperatures:", temperatures.size); // Output: 5

const productMatrix = om.array([
    [10, 20],
    [30, 40],
    [50, 60]
]);
console.log("\nProduct Matrix:\n", productMatrix.data);
console.log("Shape of Product Matrix:", productMatrix.shape); // Output: [3, 2] (3 rows, 2 columns)
console.log("Size of Product Matrix:", productMatrix.size); // Output: 6 (3 * 2 = 6 total elements)
```