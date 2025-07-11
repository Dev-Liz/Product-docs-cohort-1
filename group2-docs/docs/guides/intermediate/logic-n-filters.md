---
lang: en-US
title: "Logic and Filters"
description: "This page will guide you on how to install openmadness"
---

# Logic and Filters: Extracting What You Need
Sometimes, you only want part of your data, such as a slice, a condition, or a masked result. Openmadness is designed to make this intuitive.

### Example: Filter Values
Let’s find all values greater than 15:

```javascript
const data = omArray([10, 20, 30]);
const filtered = data.filter((val) => val > 15);
console.log(filtered.toArray()); 
// ➝ [20, 30]

```
### Example: Logical Masking (Coming Soon)
Logical masking will allow you to create a "mask" from conditions and apply it across your array:

```javascript
// Pseudo-code for upcoming features
const mask = data.greaterThan(15);
const result = data.mask(mask);
// ➝ [20, 30]

```
### Example: Slicing (Planned)
Want every second item, or a specific row/column? Openmadness will support slicing soon to help you navigate arrays more easily.
