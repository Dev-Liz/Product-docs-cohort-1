---
lang: en-US
title: "Axes"
description: "Axes in Openmadness"
---


# Axes

Axes
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