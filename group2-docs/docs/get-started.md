---
title: "Get Started"
description: "This guide will help you get started with OpenMadness."
---

## 👋 Introduction

### Overview

Openmadness is a fun and beginner-friendly JavaScript tool that helps you do math and work with arrays (lists of numbers) without stress.

abstract
Openmadness is a fun and beginner-friendly JavaScript tool that helps you do math and work with arrays (lists of numbers) without stress.It was built for learners, tinkerers, and developers who enjoy working with data in a simple and creative way.


::: tip In this guide, you’ll learn:

- What Openmadness is and why it exists

- Who the tool is built for

- What you can do with it

- Where to go next after this guide
:::


---

:::info Who Should Use This Guide

This guide is perfect for:

- New developers learning JavaScript

- People working with arrays or numbers who want easier tools

- Anyone looking for a lightweight library with a "NumPy feel" in JavaScript
:::


---

::: warning Before You Begin

To get the most out of this guide, it helps to:

- Know a little JavaScript (functions and arrays)

- Have Node.js installed

- Be ready to try out some code and have fun!
:::

::: tip
You don’t need to be a math expert. Openmadness is made to be simple, friendly, and easy to use — even if you’re new to code.
:::

---

### What Is Openmadness?

Openmadness is not a copy of NumPy, but it was inspired by it.

It gives you helpful tools like:

```
.sum(), .mean(), .transpose(), .flatten()
```

All written in clean, readable JavaScript.

Here’s a quick example of what Openmadness can do:

```js
const matrix = omArray([
  [1, 2],
  [3, 4]
]);

const result = matrix.transpose().sum();
```

The code above transposes the matrix (flips the rows and columns) and adds up all the numbers.

::: tip
Openmadness works best when you learn by doing. Try things out and explore how the functions behave.
:::

---



**Next Steps**

<p style="margin-bottom: 0.5rem;">
  <a href="./quickstart.md" style="padding: 8px 16px; background-color: #3eaf7c; color: white; text-decoration: none; border-radius: 4px;">
    Try the Quickstart Guide
  </a>
</p><p>
  <a href="https://github.com/yourusername/openmadness/blob/main/CONTRIBUTING.md" style="padding: 8px 16px; background-color: #007acc; color: white; text-decoration: none; border-radius: 4px;">
    View the CONTRIBUTING Guide
  </a>
</p>


# 🛠️ Installation

::: tip In this guide, you’ll learn how to install and run Openmadness. Whether you’re using it in a project or just want to try it out on your computer, we’ve got you covered.
:::


Having a test file like `play.js` makes it easier to experiment with Openmadness features as you go.


## Install Options

You can install Openmadness in two main ways:


### Option 1: Use NPM (Recommended)

Use this if you're building a project with Node.js or any bundler.

- Open your terminal


- Run the command below:



```js
npm install openmadness
```
- Then use Openmadness in your code like this:



```js
import { omArray } from 'openmadness';

const sample = omArray([10, 20, 30]);
console.log(sample.mean()); // Output: 20
```
This method is best if you’re using Openmadness in a Node, Vite, or Webpack project.

### Option 2: Run It Locally

Use this option if you want to test things out or contribute to the project.

- Clone the project

```js
git clone https://github.com/yourusername/openmadness.git
cd openmadness
```

- Install the dependencies
```js
npm install
```
- Create a test file (e.g. play.js)

```js
import { omArray } from './src/index.js';

const data = omArray([1, 2, 3, 4]);
console.log(data.sum()); // Output: 10
```
- Run the script
```js
node play.js
```
- (Optional) Run the test suite

```js
npm run test
```


::: info
This method is great if you want to explore how the functions work before writing documentation or contributing to the code.
::: 

