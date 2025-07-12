---
lang: en-US
title: "Logic"
description: "Learn how shapes logics are used in OpenMadness"
---

# Logic
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