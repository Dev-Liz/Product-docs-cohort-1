---
lang: en-US
title: "Installation"
description: "Get to know how to install Openmadness library"
---

# Installation

To use Openmadness in your project, you need to install it first. You can install it using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/).

::: important Prerequisites

To follow along with Openmadness, you should:

- Basic knowledge of JavaScript (arrays, functions, etc.)

- [Node.js 18 +](https://nodejs.org/en/download/)

:::

1. In your project directory, run the following command to install Openmadness using npm:

```bash
npm install openmadness  //npm

yarn add openmadness  //yarn
```

2. Once the installation is complete, create a JavaScript file and import Openmadness:

```js
import { omArray } from 'openmadness';
```

3. Add the following code to your JavaScript file to test if Openmadness is installed correctly:

```js
const array = omArray([1, 2, 3, 4]);
console.log(array.sum()); // Output: 10
```

4. Run your JavaScript file using Node.js:

```bash
node your-file.js
```

5. If Openmadness is installed correctly, you should see the following output in your console:

```bash
10
```