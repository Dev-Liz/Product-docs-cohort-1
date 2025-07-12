---
lang: en-US
title: Creating  Arrays
description: Get to know how to create arrays in openmadness library.

---

# Creating Arrays

To create an array in the `openMadness` library, import the `omArray` function at the top of your code and enclose the list of items you want to store in the `omArray[ ]` method.

**Example**:

``` javascript
import { omArray } from 'openmadness';
const myArray= omArray([ [1, 4, 10, 3, 9]);
```
## Example Use Case

Let’s assume you want to store a list of product prices in different currencies. You can create an array variable and pass in the list of prices you want to store temporarily.
I.e., 

``` javascript
import { omArray } from 'openmadness';
const productPrices = omArray ([30, 50, 10, 90, 100]); // this stores all your product prices
```
Now that you have stored these prices in a single variable, you can easily retrieve each price.

Check out the “Accessing Array Elements” page for more information about how to retrieve elements in an array.