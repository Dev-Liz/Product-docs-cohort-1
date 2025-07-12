---
lang: en-US
title: "Frequently Asked Questions"
description: "This page answers all your Questions about Openmadness"
---


# FAQ
[[toc]]

## What’s the difference between OpenMadness and vanilla JavaScript array methods?

OpenMadness simplifies array and math operations with intuitive, chainable methods (like `sum()` or `filterEven()`) and built-in utilities (e.g., statistics or matrix ops), while vanilla JS requires manual coding for these tasks.

```js 
// Vanilla js
[1, 2, 3, 4].filter(x => x % 2 === 0).map(x => x ** 2).reduce((a, b) => a + b);  

// OpenMadness  
omArray([1, 2, 3, 4]).filterEven().square().sum(); 
``` 

## What should I do if a specific OpenMadness method is not working as expected?

First, verify your inputs match the method’s requirements (e.g., correct data types, array structure). Check the [Openmadnness documentation](/tutorials.html) for specific method and examples. If the issue persists, search the GitHub Issues page for similar problems or file a new issue with details about your code, environment, and error messages.

## Does OpenMadness work with other libraries like Lodash or NumJS?

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

## How can I contribute to OpenMadness?

 To contribute or report a bug, visit the [OpenMadness GitHub repository](https://github.com/Dev-Liz/Product-docs-cohort-1). Check the contributing.md file for guidelines on submitting pull requests or issues. For bugs, provide a minimal reproducible example, your environment details (e.g., Node.js version, browser), and expected vs. actual behaviour.

## Is OpenMadness compatible with older browsers?

OpenMadness is built for modern JavaScript environments. Some features may not work in older browsers (e.g., IE11) without polyfills. If targeting older browsers, include polyfills for modern JavaScript features (e.g., `Array.prototype.includes`) or use a transpiler like Babel.

## Why am I getting a "Module not found" error when importing OpenMadness?

This error typically occurs if OpenMadness is not installed correctly or the import path is incorrect. Ensure you’ve run `npm install openmadness` and check that your import statement matches the library’s module name (e.g., `import OpenMadness from 'openmadness'`). Verify that the library is listed in your `package.json` dependencies. If using a CDN or script tag, confirm the file path or URL is correct


## Where can I report bugs or request new features?

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

## Does OpenMadness support asynchronous operations?

OpenMadness is primarily designed for synchronous array and math operations. If you need to handle asynchronous data (e.g., fetching data from an API), process the data after the promise resolves and then pass it to OpenMadness methods. For example: `fetch(url).then(data => OpenMadness.filter(data, condition))`.

## I installed OpenMadness, but it's not recognized in my project. What should I check?

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