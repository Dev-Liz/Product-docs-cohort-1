---
lang: en-US
title: Resources
description: This page serves as a resource for users to troubleshoot, understand, and effectively use the OpenMadness library 
---

## FAQ

#### What’s the difference between OpenMadness and vanilla JavaScript array methods?

OpenMadness simplifies array and math operations with intuitive, chainable methods (like `sum()` or `filterEven()`) and built-in utilities (e.g., statistics or matrix ops), while vanilla JS requires manual coding for these tasks.

```js 
// Vanilla js
[1, 2, 3, 4].filter(x => x % 2 === 0).map(x => x ** 2).reduce((a, b) => a + b);  

// OpenMadness  
omArray([1, 2, 3, 4]).filterEven().square().sum(); 
``` 

#### What should I do if a specific OpenMadness method is not working as expected?

First, verify your inputs match the method’s requirements (e.g., correct data types, array structure). Check the [Openmadnness documentation](/tutorials.html) for specific method and examples. If the issue persists, search the GitHub Issues page for similar problems or file a new issue with details about your code, environment, and error messages.

#### Does OpenMadness work with other libraries like Lodash or NumJS?

Yes, OpenMadness can be used alongside libraries like Lodash or NumJS, but there may be overlap in functionality (e.g., array operations). To avoid conflicts:

* Use OpenMadness for simpler, math-focused tasks (e.g., statistics, vector operations).
* Use Lodash for utility functions (e.g., deep cloning, object manipulation).
* Use NumJS for advanced numerical computing (e.g., multi-dimensional arrays).

```js
import _ from 'lodash';  
import * as nj from 'numjs';  
import { omArray } from 'openmadness';  

const data = [1, 2, 3];  

// Lodash (utility)  
const shuffled = _.shuffle(data);  

// NumJS (advanced math)  
const matrix = nj.array([1, 2, 3]);  

// OpenMadness (simpler math ops)  
const sum = omArray(data).sum();  
```

#### How can I contribute to OpenMadness?

 To contribute or report a bug, visit the [OpenMadness GitHub repository](https://github.com/Dev-Liz/Product-docs-cohort-1). Check the contributing.md file for guidelines on submitting pull requests or issues. For bugs, provide a minimal reproducible example, your environment details (e.g., Node.js version, browser), and expected vs. actual behaviour.

#### Is OpenMadness compatible with older browsers?

OpenMadness is built for modern JavaScript environments. Some features may not work in older browsers (e.g., IE11) without polyfills. If targeting older browsers, include polyfills for modern JavaScript features (e.g., `Array.prototype.includes`) or use a transpiler like Babel.

#### Why am I getting a "Module not found" error when importing OpenMadness?

This error typically occurs if OpenMadness is not installed correctly or the import path is incorrect. Ensure you’ve run `npm install openmadness` and check that your import statement matches the library’s module name (e.g., `import OpenMadness from 'openmadness'`). Verify that the library is listed in your `package.json` dependencies. If using a CDN or script tag, confirm the file path or URL is correct


#### Where can I report bugs or request new features?

You can submit issues, bug reports, or feature requests on the [official GitHub repository](https://github.com/Dev-Liz/Product-docs-cohort-1)

**Before submitting**:

* Check existing issues to avoid duplicates.
* For bugs, include:
    * Steps to reproduce
    * Expected vs. actual behavior
    * Browser/Node.js version & OpenMadness version

* For feature requests, explain:
    * The problem it solves
    * Suggested implementation (if possible)

Contributions (PRs) are welcome! 🎉 Follow the repo’s guidelines for code submissions.

#### Does OpenMadness support asynchronous operations?

OpenMadness is primarily designed for synchronous array and math operations. If you need to handle asynchronous data (e.g., fetching data from an API), process the data after the promise resolves and then pass it to OpenMadness methods. For example: `fetch(url).then(data => OpenMadness.filter(data, condition))`.

#### I installed OpenMadness, but it's not recognized in my project. What should I check?

If OpenMadness isn’t recognized after installation, here are a few things to check:

1. Check the installation path:
   
 Make sure you’ve installed the library in the correct project folder. Run:
```npm install openmadness```

Then confirm that it appears in your `node_modules` directory and is listed in your `package.json`.


2. Check your import statement:

Depending on how the library is structured, you might need to import it correctly. Try:

```js
const openmadness = require('openmadness'); // For CommonJS
// OR
import openmadness from 'openmadness'; // For ES Modules
```

Also, ensure your runtime supports ES Modules if using import.

3. Check the module name and spelling:

Ensure the import name matches the actual package or file name. Sometimes a typo like openmadnness (with an extra "n") can cause issues.

4. Restart your development environment:

Sometimes, your editor needs a restart to recognize new modules.


## Glossary

The glossary section provides definitions for key terms and concepts used in the OpenMadness JavaScript library, designed to help you understand its functionality for fast and intuitive array and math operations. Terms are listed alphabetically for easy reference.

#### Array

A data structure in JavaScript that stores an ordered collection of elements, which can be of any data type (e.g., numbers, strings, objects). OpenMadness provides methods to perform operations like filtering, sorting, and mapping on arrays efficiently.

#### Array Operation

A function or method that manipulates or processes an array, such as transforming elements, selecting subsets, or computing aggregate values. OpenMadness simplifies array operations with intuitive methods optimized for performance.

#### Asynchronous Operation

A task that runs independently of the main program flow, allowing other code to execute while waiting for completion (e.g., fetching data). OpenMadness focuses on synchronous array and math operations but can work with asynchronous data after resolution (e.g., using Promises).

#### Element

An individual item stored in an array, accessed by its index (a zero-based numerical position). OpenMadness methods often operate on array elements to perform tasks like filtering or transformation.

#### Filter

An array operation that creates a new array containing only elements that satisfy a specified condition. OpenMadness likely includes a filter method to select elements based on a user-defined criterion.

#### Index

A numerical position (starting at 0) that identifies an element’s location in an array. OpenMadness methods use indices to access or manipulate specific array elements.

#### JavaScript

A high-level, interpreted programming language used for web development and other applications. OpenMadness is built in JavaScript, leveraging its native array and math capabilities for ease of use.
Library

A collection of pre-written code (functions, methods, or classes) that developers can use to perform common tasks. OpenMadness is a JavaScript library designed to simplify array and mathematical operations for beginners.

#### Map

An array operation that creates a new array by applying a function to each element of the original array. OpenMadness likely provides a map method to transform array elements efficiently.

#### Math Operation

A function that performs mathematical computations, such as addition, averaging, or statistical calculations. OpenMadness includes methods for fast and intuitive math operations on numbers or arrays.

#### Method

A function that belongs to an object or library, designed to perform a specific task. OpenMadness methods (e.g., for filtering or summing arrays) are accessible via the OpenMadness object.

#### Module

A reusable piece of JavaScript code, often exported as a single unit. OpenMadness is distributed as a module, installable via npm (e.g., npm install openmadness) or included via a script tag.

#### npm

Node Package Manager, a tool for installing and managing JavaScript libraries. OpenMadness can be installed using npm install openmadness for use in Node.js or browser projects.

#### Promise

A JavaScript object representing the eventual completion (or failure) of an asynchronous operation. While OpenMadness primarily handles synchronous operations, it can process data resolved from Promises.

#### Sort

An array operation that rearranges elements in a specified order (e.g., ascending or descending). OpenMadness includes a sort method to organize array elements based on user-defined criteria.

#### Synchronous Operation

A task that executes immediately and blocks further code execution until complete. OpenMadness focuses on synchronous operations for straightforward array and math processing.
