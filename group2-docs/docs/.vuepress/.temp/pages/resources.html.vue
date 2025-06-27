<template><div><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h2>
<h4 id="what-s-the-difference-between-openmadness-and-vanilla-javascript-array-methods" tabindex="-1"><a class="header-anchor" href="#what-s-the-difference-between-openmadness-and-vanilla-javascript-array-methods"><span>What’s the difference between OpenMadness and vanilla JavaScript array methods?</span></a></h4>
<p>OpenMadness simplifies array and math operations with intuitive, chainable methods (like <code v-pre>sum()</code> or <code v-pre>filterEven()</code>) and built-in utilities (e.g., statistics or matrix ops), while vanilla JS requires manual coding for these tasks.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Vanilla js</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"></span>
<span class="line"><span class="token comment">// OpenMadness  </span></span>
<span class="line"><span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filterEven</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">square</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="what-should-i-do-if-a-specific-openmadness-method-is-not-working-as-expected" tabindex="-1"><a class="header-anchor" href="#what-should-i-do-if-a-specific-openmadness-method-is-not-working-as-expected"><span>What should I do if a specific OpenMadness method is not working as expected?</span></a></h4>
<p>First, verify your inputs match the method’s requirements (e.g., correct data types, array structure). Check the <RouteLink to="/tutorials.html">Openmadnness documentation</RouteLink> for specific method and examples. If the issue persists, search the GitHub Issues page for similar problems or file a new issue with details about your code, environment, and error messages.</p>
<h4 id="does-openmadness-work-with-other-libraries-like-lodash-or-numjs" tabindex="-1"><a class="header-anchor" href="#does-openmadness-work-with-other-libraries-like-lodash-or-numjs"><span>Does OpenMadness work with other libraries like Lodash or NumJS?</span></a></h4>
<p>Yes, OpenMadness can be used alongside libraries like Lodash or NumJS, but there may be overlap in functionality (e.g., array operations). To avoid conflicts:</p>
<ul>
<li>Use OpenMadness for simpler, math-focused tasks (e.g., statistics, vector operations).</li>
<li>Use Lodash for utility functions (e.g., deep cloning, object manipulation).</li>
<li>Use NumJS for advanced numerical computing (e.g., multi-dimensional arrays).</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">'lodash'</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> nj <span class="token keyword">from</span> <span class="token string">'numjs'</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> omArray <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span>  </span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  </span>
<span class="line"></span>
<span class="line"><span class="token comment">// Lodash (utility)  </span></span>
<span class="line"><span class="token keyword">const</span> shuffled <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">shuffle</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"></span>
<span class="line"><span class="token comment">// NumJS (advanced math)  </span></span>
<span class="line"><span class="token keyword">const</span> matrix <span class="token operator">=</span> nj<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"></span>
<span class="line"><span class="token comment">// OpenMadness (simpler math ops)  </span></span>
<span class="line"><span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="how-can-i-contribute-to-openmadness" tabindex="-1"><a class="header-anchor" href="#how-can-i-contribute-to-openmadness"><span>How can I contribute to OpenMadness?</span></a></h4>
<p>To contribute or report a bug, visit the <a href="https://github.com/Dev-Liz/Product-docs-cohort-1" target="_blank" rel="noopener noreferrer">OpenMadness GitHub repository</a>. Check the contributing.md file for guidelines on submitting pull requests or issues. For bugs, provide a minimal reproducible example, your environment details (e.g., Node.js version, browser), and expected vs. actual behaviour.</p>
<h4 id="is-openmadness-compatible-with-older-browsers" tabindex="-1"><a class="header-anchor" href="#is-openmadness-compatible-with-older-browsers"><span>Is OpenMadness compatible with older browsers?</span></a></h4>
<p>OpenMadness is built for modern JavaScript environments. Some features may not work in older browsers (e.g., IE11) without polyfills. If targeting older browsers, include polyfills for modern JavaScript features (e.g., <code v-pre>Array.prototype.includes</code>) or use a transpiler like Babel.</p>
<h4 id="why-am-i-getting-a-module-not-found-error-when-importing-openmadness" tabindex="-1"><a class="header-anchor" href="#why-am-i-getting-a-module-not-found-error-when-importing-openmadness"><span>Why am I getting a &quot;Module not found&quot; error when importing OpenMadness?</span></a></h4>
<p>This error typically occurs if OpenMadness is not installed correctly or the import path is incorrect. Ensure you’ve run <code v-pre>npm install openmadness</code> and check that your import statement matches the library’s module name (e.g., <code v-pre>import OpenMadness from 'openmadness'</code>). Verify that the library is listed in your <code v-pre>package.json</code> dependencies. If using a CDN or script tag, confirm the file path or URL is correct</p>
<h4 id="where-can-i-report-bugs-or-request-new-features" tabindex="-1"><a class="header-anchor" href="#where-can-i-report-bugs-or-request-new-features"><span>Where can I report bugs or request new features?</span></a></h4>
<p>You can submit issues, bug reports, or feature requests on the <a href="https://github.com/Dev-Liz/Product-docs-cohort-1" target="_blank" rel="noopener noreferrer">official GitHub repository</a></p>
<p><strong>Before submitting</strong>:</p>
<ul>
<li>
<p>Check existing issues to avoid duplicates.</p>
</li>
<li>
<p>For bugs, include:</p>
<ul>
<li>Steps to reproduce</li>
<li>Expected vs. actual behavior</li>
<li>Browser/Node.js version &amp; OpenMadness version</li>
</ul>
</li>
<li>
<p>For feature requests, explain:</p>
<ul>
<li>The problem it solves</li>
<li>Suggested implementation (if possible)</li>
</ul>
</li>
</ul>
<p>Contributions (PRs) are welcome! 🎉 Follow the repo’s guidelines for code submissions.</p>
<h4 id="does-openmadness-support-asynchronous-operations" tabindex="-1"><a class="header-anchor" href="#does-openmadness-support-asynchronous-operations"><span>Does OpenMadness support asynchronous operations?</span></a></h4>
<p>OpenMadness is primarily designed for synchronous array and math operations. If you need to handle asynchronous data (e.g., fetching data from an API), process the data after the promise resolves and then pass it to OpenMadness methods. For example: <code v-pre>fetch(url).then(data =&gt; OpenMadness.filter(data, condition))</code>.</p>
<h4 id="i-installed-openmadness-but-it-s-not-recognized-in-my-project-what-should-i-check" tabindex="-1"><a class="header-anchor" href="#i-installed-openmadness-but-it-s-not-recognized-in-my-project-what-should-i-check"><span>I installed OpenMadness, but it's not recognized in my project. What should I check?</span></a></h4>
<p>If OpenMadness isn’t recognized after installation, here are a few things to check:</p>
<ol>
<li>Check the installation path:</li>
</ol>
<p>Make sure you’ve installed the library in the correct project folder. Run:
<code v-pre>npm install openmadness</code></p>
<p>Then confirm that it appears in your <code v-pre>node_modules</code> directory and is listed in your <code v-pre>package.json</code>.</p>
<ol start="2">
<li>Check your import statement:</li>
</ol>
<p>Depending on how the library is structured, you might need to import it correctly. Try:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> openmadness <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'openmadness'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// For CommonJS</span></span>
<span class="line"><span class="token comment">// OR</span></span>
<span class="line"><span class="token keyword">import</span> openmadness <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span> <span class="token comment">// For ES Modules</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Also, ensure your runtime supports ES Modules if using import.</p>
<ol start="3">
<li>Check the module name and spelling:</li>
</ol>
<p>Ensure the import name matches the actual package or file name. Sometimes a typo like openmadnness (with an extra &quot;n&quot;) can cause issues.</p>
<ol start="4">
<li>Restart your development environment:</li>
</ol>
<p>Sometimes, your editor needs a restart to recognize new modules.</p>
<h2 id="glossary" tabindex="-1"><a class="header-anchor" href="#glossary"><span>Glossary</span></a></h2>
<p>The glossary section provides definitions for key terms and concepts used in the OpenMadness JavaScript library, designed to help you understand its functionality for fast and intuitive array and math operations. Terms are listed alphabetically for easy reference.</p>
<h4 id="array" tabindex="-1"><a class="header-anchor" href="#array"><span>Array</span></a></h4>
<p>A data structure in JavaScript that stores an ordered collection of elements, which can be of any data type (e.g., numbers, strings, objects). OpenMadness provides methods to perform operations like filtering, sorting, and mapping on arrays efficiently.</p>
<h4 id="array-operation" tabindex="-1"><a class="header-anchor" href="#array-operation"><span>Array Operation</span></a></h4>
<p>A function or method that manipulates or processes an array, such as transforming elements, selecting subsets, or computing aggregate values. OpenMadness simplifies array operations with intuitive methods optimized for performance.</p>
<h4 id="asynchronous-operation" tabindex="-1"><a class="header-anchor" href="#asynchronous-operation"><span>Asynchronous Operation</span></a></h4>
<p>A task that runs independently of the main program flow, allowing other code to execute while waiting for completion (e.g., fetching data). OpenMadness focuses on synchronous array and math operations but can work with asynchronous data after resolution (e.g., using Promises).</p>
<h4 id="element" tabindex="-1"><a class="header-anchor" href="#element"><span>Element</span></a></h4>
<p>An individual item stored in an array, accessed by its index (a zero-based numerical position). OpenMadness methods often operate on array elements to perform tasks like filtering or transformation.</p>
<h4 id="filter" tabindex="-1"><a class="header-anchor" href="#filter"><span>Filter</span></a></h4>
<p>An array operation that creates a new array containing only elements that satisfy a specified condition. OpenMadness likely includes a filter method to select elements based on a user-defined criterion.</p>
<h4 id="index" tabindex="-1"><a class="header-anchor" href="#index"><span>Index</span></a></h4>
<p>A numerical position (starting at 0) that identifies an element’s location in an array. OpenMadness methods use indices to access or manipulate specific array elements.</p>
<h4 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript"><span>JavaScript</span></a></h4>
<p>A high-level, interpreted programming language used for web development and other applications. OpenMadness is built in JavaScript, leveraging its native array and math capabilities for ease of use.
Library</p>
<p>A collection of pre-written code (functions, methods, or classes) that developers can use to perform common tasks. OpenMadness is a JavaScript library designed to simplify array and mathematical operations for beginners.</p>
<h4 id="map" tabindex="-1"><a class="header-anchor" href="#map"><span>Map</span></a></h4>
<p>An array operation that creates a new array by applying a function to each element of the original array. OpenMadness likely provides a map method to transform array elements efficiently.</p>
<h4 id="math-operation" tabindex="-1"><a class="header-anchor" href="#math-operation"><span>Math Operation</span></a></h4>
<p>A function that performs mathematical computations, such as addition, averaging, or statistical calculations. OpenMadness includes methods for fast and intuitive math operations on numbers or arrays.</p>
<h4 id="method" tabindex="-1"><a class="header-anchor" href="#method"><span>Method</span></a></h4>
<p>A function that belongs to an object or library, designed to perform a specific task. OpenMadness methods (e.g., for filtering or summing arrays) are accessible via the OpenMadness object.</p>
<h4 id="module" tabindex="-1"><a class="header-anchor" href="#module"><span>Module</span></a></h4>
<p>A reusable piece of JavaScript code, often exported as a single unit. OpenMadness is distributed as a module, installable via npm (e.g., npm install openmadness) or included via a script tag.</p>
<h4 id="npm" tabindex="-1"><a class="header-anchor" href="#npm"><span>npm</span></a></h4>
<p>Node Package Manager, a tool for installing and managing JavaScript libraries. OpenMadness can be installed using npm install openmadness for use in Node.js or browser projects.</p>
<h4 id="promise" tabindex="-1"><a class="header-anchor" href="#promise"><span>Promise</span></a></h4>
<p>A JavaScript object representing the eventual completion (or failure) of an asynchronous operation. While OpenMadness primarily handles synchronous operations, it can process data resolved from Promises.</p>
<h4 id="sort" tabindex="-1"><a class="header-anchor" href="#sort"><span>Sort</span></a></h4>
<p>An array operation that rearranges elements in a specified order (e.g., ascending or descending). OpenMadness includes a sort method to organize array elements based on user-defined criteria.</p>
<h4 id="synchronous-operation" tabindex="-1"><a class="header-anchor" href="#synchronous-operation"><span>Synchronous Operation</span></a></h4>
<p>A task that executes immediately and blocks further code execution until complete. OpenMadness focuses on synchronous operations for straightforward array and math processing.</p>
</div></template>


