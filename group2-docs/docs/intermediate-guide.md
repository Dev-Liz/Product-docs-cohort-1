# Intermediate Guide

Now that you're familiar with the basics of Openmadness, let’s explore some of the library's powerful features in more depth. This guide will help you learn how to reshape your data, understand its statistical properties, and extract the specific information you need.

We'll walk through three concepts:
* Reshaping 2D data
* Making sense of data with statistics
* Using logic and filters to extract what you need

## Reshaping Reality: Working with 2D Data

When your data grows beyond simple lists, it often makes sense to structure it as a matrix (or 2D array). Openmadness makes it easy to reshape and transform your data layout.

### Example: Reshape a List into a Matrix

Imagine you have a list of numbers that you want to arrange into a grid, like a spreadsheet. With **omArray()**, you can create a 2D array, which is essentially a grid of rows and columns.

Let's say you have a single list of numbers:


```javascript
import { omArray } from 'openmadness';
const flatData = omArray([1, 2, 3, 4, 5, 6]);

```
You can use the **.reshape()** operation to turn this flat list into a grid. You just tell it how many rows and columns you want. For example, to make it a 2x3 grid (2 rows, 3 columns):

```javascript
const reshapedData = flatData.reshape(2, 3);
console.log(reshapedData);
// Expected output:
// [[1, 2, 3],
//  [4, 5, 6]]

```

### Example: Flatten a Matrix
What if you have a grid and you want to turn it back into a single, flat list? That's where .flatten() comes in handy!

```javascript
const matrix = omArray([
  [1, 2, 3],
  [4, 5, 6]
]);
const flattenedData = matrix.flatten();
console.log(flattenedData);
// Expected output: [1, 2, 3, 4, 5, 6]

```
### Example: Transpose a Matrix
Sometimes, you might want to switch the rows and columns of your grid. This is called transposing, and Openmadness makes it simple with **.transpose()**. Think of it like rotating your data so the rows become columns and the columns become rows.

```javascript
const originalMatrix = omArray([
  [1, 2],
  [3, 4]
]);

const transposedMatrix = originalMatrix.transpose();
console.log(transposedMatrix);
// Expected output:
// [[1, 3],
//  [2, 4]]

```

## Averages, Variance, and Making Sense of Data
Numbers are just numbers until you make sense of them. Openmadness helps you understand your data through built-in statistics.

### Example: Sum
Let's start with getting the **sum** of all your numbers. It's as straightforward as calling .sum():

```javascript
import { omArray } from 'openmadness';

const numbers = omArray([10, 20, 30, 40]);
const totalSum = numbers.sum();
console.log(totalSum); // ➝ 100

```
### Example: Mean (Average)
The mean is simply the average of your numbers. It gives you a single value that represents the "center" of your data. To find the mean, you use **.mean()**:

```javascript
const sample = omArray([10, 20, 30]);
console.log(sample.mean()); // ➝ 20

```
Example: Max and Min
Sometimes you need to find the **highest** or **lowest** value in your data. Openmadness provides .max() and .min() for this purpose:

```javascript
const scores = omArray([85, 92, 78, 95, 88]);
const highestScore = scores.max();
const lowestScore = scores.min();

console.log(`Highest score: ${highestScore}`); // ➝ Highest score: 95
console.log(`Lowest score: ${lowestScore}`);   // ➝ Lowest score: 78

```
These operations help you quickly grasp the essence of your numerical data, whether you're looking for totals, averages, or the extremes.

## Logic and Filters: Extracting What You Need
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




