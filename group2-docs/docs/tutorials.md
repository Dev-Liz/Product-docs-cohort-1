# Tutorials
Openmadness Tutorials
Welcome to the Openmadness Tutorials. This section is your starting point for exploring the core concepts of Openmadness, a beginner-friendly JavaScript library designed to make array and mathematical operations fast and intuitive.These topics form the foundation of working with Openmadness. Master them, and you'll be well-equipped to build confidently and efficiently.


## Fundamentals
These topics form the foundation of working with Openmadness. Master them, and you'll be well-equipped to build confidently and efficiently.
### Basic Arithmetic

Openmadness makes performing common math operations on lists of numbers (which we call arrays) super easy. Instead of performing calculations one by one, Openmadness lets you apply operations to entire arrays at once.
When you use an arithmetic method like add() or multiply() on an Openmadness array, it applies that operation to every corresponding number in the array. If you add a single number (a scalar), it's added to every element in the array.

```js
import om from 'openmadness';

// Create Openmadness arrays
const dailySales = om.array([100, 150, 200]);
const marketingSpend = om.array([10, 25, 40]);

console.log("Daily Sales:", dailySales.data);
console.log("Marketing Spend:", marketingSpend.data);

// --- Addition (+) ---
// Add two arrays (element-wise)
const totalRevenue = dailySales.add(marketingSpend);
console.log("Total Revenue (Sales + Spend):", totalRevenue.data); // Output: [110, 175, 240]

// Add a scalar to an array
const salesIncrease = dailySales.add(50);
console.log("Sales after $50 increase:", salesIncrease.data); // Output: [150, 200, 250]

// --- Subtraction (-) ---
const netSales = dailySales.subtract(marketingSpend);
console.log("Net Sales (Sales - Spend):", netSales.data); // Output: [90, 125, 160]

// --- Multiplication (*) ---
const doubledSales = dailySales.multiply(2);
console.log("Doubled Sales:", doubledSales.data); // Output: [200, 300, 400]

// --- Division (/) ---
const salesRatio = dailySales.divide(marketingSpend);
console.log("Sales Ratio (Sales / Spend):", salesRatio.data); // Output: [10, 6, 5]

```


### Data Types

In Openmadness, we primarily work with numbers. These can be whole numbers (such as 10, 500) or numbers with decimal points (such as 3.14, 0.5).
While JavaScript has other data types (like strings for text or booleans for true/false values), Openmadness functions are designed for numerical calculations. If you try to include non-numbers, Openmadness might convert them to NaN (Not a Number) if it can't understand them.

```js
import om from 'openmadness';

// An array of numbers - perfect for Openmadness!
const prices = om.array([24.99, 12.50, 5.00]);
console.log("Numeric prices:", prices.data);

// What happens if we try to include a string?
const mixedItems = om.array([10, 'apple', 20]);
console.log("Mixed data:", mixedItems.data); // Output: [10, NaN, 20]
// 'apple' can't be converted to a number, so it becomes NaN.
```
::: note
 For reliable results, always provide numbers to Openmadness arrays.
:::


### Shape

The shape of an Openmadness array describes its dimensions or structure. Think of it as how your data is organized – like the rows and columns of a spreadsheet.
* A simple list of numbers has one dimension.
* A table of numbers has two dimensions (rows and columns).
The shape property returns an array indicating the size of each dimension.

```js
import om from 'openmadness';
// A 1-dimensional array (like a single list)
const dailyVisitors = om.array([1000, 1200, 950, 1300]);
console.log("Daily Visitors data:", dailyVisitors.data);
console.log("Shape of Daily Visitors:", dailyVisitors.shape); // Output: [4]
// It has 4 elements in its single dimension.

// A 2-dimensional array (like a grid or table)
const quarterlySales = om.array([
    [100, 120, 90],  // Q1 sales for 3 regions
    [110, 130, 95],  // Q2 sales for 3 regions
    [105, 125, 100]  // Q3 sales for 3 regions
]);
console.log("\nQuarterly Sales data:\n", quarterlySales.data);
console.log("Shape of Quarterly Sales:", quarterlySales.shape); // Output: [3, 3]
// This means 3 rows and 3 columns.

```
Understanding shape is crucial because many operations require arrays to have compatible shapes.


### Size
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


### Axes
Axes refer to the different dimensions along which you can perform operations in your data. In a 2D array (like a grid), you have two main axes:
Axis 0: Runs vertically, down the rows.
Axis 1: Runs horizontally, across the columns.
Why does this matter? Many Openmadness functions (like average() or sum()) allow you to specify an axis to operate on that particular dimension, rather than on the entire dataset.

```js
import om from 'openmadness';

const examScores = om.array([
    [80, 85, 90], // Student 1 scores (Math, Science, History)
    [75, 90, 88]  // Student 2 scores
]);
console. log("Exam Scores:\n", examScores.data);

// Sum of all scores (no axis specified)
console.log("Total sum of all scores:", examScores.sum()); // Output: 513

// Sum along axis 0 (down the columns) - sum for each subject

const subjectTotals = examScores.sum(0);
console.log("Sum per Subject (Axis 0):", subjectTotals.data); // Output: [155, 175, 178]
// (80+75), (85+90), (90+88)

// Sum along axis 1 (across the rows) - sum for each student

const studentTotals = examScores.sum(1);
console.log("Sum per Student (Axis 1):", studentTotals.data); // Output: [255, 253]
// (80+85+90), (75+90+88)

```
Don't worry if the axis seems tricky at first. It becomes clearer as you use it in practice for operations like calculating averages or sums.


### Arrays
The Openmadness Array is the fundamental building block of this library. While regular JavaScript arrays ([1, 2, 3]) are just lists of values, Openmadness wraps these into its special object (om.array()). This wrapper provides all the powerful methods for math, statistics, and data manipulation.
To start working with Openmadness, you'll always convert your standard JavaScript arrays (or even single numbers) into an om.array.

```js
import om from 'openmadness';

// A regular JavaScript array
const rawData = [10, 20, 30, 40];
console.log("Plain JavaScript array:", rawData);

// Convert it into an Openmadness array
const omData = om.array(rawData);
console.log("Openmadness array object:", omData); // Shows the Openmadness object structure
console.log("Data inside omData:", omData.data); // Access the underlying numbers

// You can also create an Openmadness array directly
const omDirect = om.array([5, 10, 15]);
console.log("Directly created Openmadness array:", omDirect.data);

// The power of Openmadness:
// With plain JS, adding 5 to each element requires a loop:
const rawDataPlus5 = rawData.map(num => num + 5);
console.log("Plain JS add 5:", rawDataPlus5); // Output: [15, 25, 35, 45]

// With Openmadness, it's a single, clear method call:
const omDataPlus5 = omData.add(5);
console.log("Openmadness add 5:", omDataPlus5.data); // Output: [15, 25, 35, 45]

```


### Statistics

#### Minimum and Maximum Values
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


### Logic
To check for specific conditions in your data, Openmadness makes it easy to compare numbers within your arrays. These operations create a new Openmadness array where each value is true or false (also known as a boolean).

```js
import om from 'openmadness';

const sensorReadings = om.array([15, 22, 10, 28, 19, 30]);
console.log("Sensor Readings:", sensorReadings.data);

// Is each reading greater than 20?
const aboveThreshold = sensorReadings.greaterThan(20);
console.log("Readings > 20:", aboveThreshold.data); // Output: [false, true, false, true, false, true]

// Is each reading less than or equal to 15?
const belowOrEqual = sensorReadings.lessThanOrEqual(15);
console.log("Readings <= 15:", belowOrEqual.data); // Output: [true, false, true, false, false, false]

// Is any reading exactly 30?
const isThirty = sensorReadings.equal(30);
console.log("Readings == 30:", isThirty.data); // Output: [false, false, false, false, false, true]

// Is any reading NOT equal to 19?
const notNineteen = sensorReadings.notEqual(19);
console.log("Readings != 19:", notNineteen.data); // Output: [true, true, true, true, false, true]

```




## Advanced