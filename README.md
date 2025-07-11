# Welcome to OpenMadness Product Documentation 👋

OpenMadness is a lightweight JavaScript library that simplifies mathematical and array-based operations. Inspired by the power of NumPy, it provides a clear, chainable, and flexible API designed for developers working with data in both frontend and backend environments.

## Why Choose OpenMadness

- **Simplify Complex Operations**  
  Perform intuitive manipulations on multi-dimensional arrays, statistical data, and linear algebra.

- **Beginner-Friendly**  
  The API is straightforward and accessible, making it easy for newcomers and experienced developers alike.

- **Lightweight & Efficient**  
  Keep your applications fast and efficient with a minimal yet powerful utility library.

- **Chainable API**  
  Create clean, readable data pipelines using method chaining.

- **Versatile**  
  Compatible with both browser-based and Node.js projects.

## Features at a Glance

- Multi-Dimensional Array Handling
- Statistical Functions (mean, median, standard deviation, etc.)
- Linear Algebra Operations
- Chainable Methods
- Extensible and Customizable API

## Installation

### Overview

This guide helps you install and run OpenMadness. Whether you're using it in a project or experimenting locally, follow these steps:

### Prerequisites

- Node.js installed on your system
- A code editor (e.g., VS Code)
- Basic knowledge of JavaScript and local execution

### Option 1: Install via NPM (Recommended)

For Node.js-based projects:

```bash
npm install openmadness
```

Use it in your JavaScript code:

```javascript
import { omArray } from 'openmadness';

const sample = omArray([10, 20, 30]);
console.log(sample.mean()); // Output: 20
```

### Option 2: Run Locally (For Development/Contribution)

Clone the repository:

```bash
git clone https://github.com/yourusername/openmadness.git
cd openmadness
```

Install dependencies:

```bash
npm install
```

Create a test file like `play.js`:

```javascript
import { omArray } from './src/index.js';

const data = omArray([1, 2, 3, 4]);
console.log(data.sum()); // Output: 10
```

Run the test script:

```bash
node play.js
```

(Optional) Run the test suite:

```bash
npm run test
```

## Documentation

You can find the [Openmadness](https://openmadness-docs.vercel.app/) documentation on the website.

Check out the [Getting Started](https://openmadness-docs.vercel.app/getting-started/introduction.html) page for a quick overview.

The documentation is divided into several sections:


- Quickstart Guide
- Installation Guide
- API Reference
- Tutorials and Guides
- Frequently Asked Questions
- Contribution Guide

## Community

Join the OpenMadness community to enhance your data manipulation workflow and collaborate with other developers.

- [GitHub Repository]()
- [Discord Server]()
- [Twitter/X Profile]()

## Contributing

The main purpose of this repository is to continue evolving React core, making it faster and easier to use. Development of React happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving React.

### Code of Conduct
Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.

### Contributing Guide
Read our contributing guide to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to React.
See [CONTRIBUTING-GUIDE.md](CONTRIBUTING-GUIDE.md) to get started contributing!

### Our Primary Contributors
Here's a list of amazing talents who worked together to make this project a success:
- [Elizabeth Bassey](https://github.com/Dev-Liz/) - Homepage, Changelog, Brand-Identity
- [Christine Belzie](https://github.com/CBID2) - Quickstart Guide & Edit buttons
- [Judith Etugbo](https://github.com/Nickyshe) - Advanced Tutorials
- [Mercy Ileolami](https://github.com/Ileolami) - OM Functions & Content Review
- [Onwuemene Joshua](https://github.com/onwuemenejoshua) - FAQ & Glossary
- [Samuel Thomas](https://github.com/Sammex45) - Project's Readme
- [Olubisi Folarin](https://github.com/olubisifolarin) - OM-Functions
- [Charles Timiebifemere](https://github.com/Charlestimi) - Fundamental Tutorials
- [Andrea Bravo Balado](https://github.com/andreacbravob) - Contribution Guide
- [Rose Akoth](https://github.com/roakoth) - Intermediate and Advanced Guide
- [Samuel Benson](https://github.com/Samuel-Benso) - Introduction and Installtion Guide
- [Gloria Tejuosho](https://github.com/gloriadasilva) - Fundamental Guide

  





## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for more details.
