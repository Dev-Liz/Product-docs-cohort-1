---
lang: en-US
title: "Installation"
description: "This page will guide you on how to install openmadness"
---

 # 🛠️ Installation

 ## Overview
In this guide, you’ll learn how to install and run Openmadness. Whether you’re using it in a project or just want to try it out on your computer, we’ve got you covered.

---
Before You Begin
Make sure you have the following ready:
- Node.js installed on your computer
- A code editor (like VS Code)
- A basic understanding of how to run JavaScript locally or in the browser
tipHaving a test file like play.js makes it easier to experiment with Openmadness features as you go.
tip
Having a test file like `play.js` makes it easier to experiment with Openmadness features as you go.
---
Install Options
You can install Openmadness in two main ways:
---
Option 1: Use NPM (Recommended)
Use this if you're building a project with Node.js or any bundler.
1. Open your terminal
2. Run the command below:
npm install openmadness
3. Then use Openmadness in your code like this:
const sample = omArray([10, 20, 30]);
console.log(sample.mean()); // Output: 20
tipThis method is best if you’re using Openmadness in a Node, Vite, or Webpack project.
tip
This method is best if you’re using Openmadness in a Node, Vite, or Webpack project.
---
Option 2: Run It Locally
Use this option if you want to test things out or contribute to the project.
1. Clone the project
git clone https://github.com/yourusername/openmadness.git
cd openmadness
2. Install the dependencies
npm install
3. Create a test file (e.g. play.js)
import { omArray } from './src/index.js';
const data = omArray([1, 2, 3, 4]);
console.log(data.sum()); // Output: 10
4. Run the script
node play.js
5. (Optional) Run the test suite
npm run test
infoThis method is great if you want to explore how the functions work before writing documentation or contributing to the code.
info
This method is great if you want to explore how the functions work before writing documentation or contributing to the code.
---
Got any ideas to improve the guide, check out our CONTRIBUTING guide on GitHub.
success 
Next Steps
<p style="margin-bottom: 0.5rem;">
  <a href="./quickstart.md" style="padding: 8px 16px; background-color: #3eaf7c; color: white; text-decoration: none; border-radius: 4px;">
    Try the Quickstart Guide
  </a>
</p><p>
  <a href="https://github.com/yourusername/openmadness/blob/main/CONTRIBUTING.md" style="padding: 8px 16px; background-color: #007acc; color: white; text-decoration: none; border-radius: 4px;">
  View the CONTRIBUTING Guide
  </a>
</p>success 
Next Steps
<p style="margin-bottom: 0.5rem;">
  <a href="./quickstart.md" style="padding: 8px 16px; background-color: #3eaf7c; color: white; text-decoration: none; border-radius: 4px;">
    👉 Try the Quickstart Guide
  </a>
</p>
<p>
  <a href="https://github.com/yourusername/openmadness/blob/main/CONTRIBUTING.md" style="padding: 8px 16px; background-color: #007acc; color: white; text-decoration: none; border-radius: 4px;">
    View the CONTRIBUTING Guide
  </a>
</p>
Footer
