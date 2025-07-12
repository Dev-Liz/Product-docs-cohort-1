<template><div><h1 id="what-is-openmadness" tabindex="-1"><a class="header-anchor" href="#what-is-openmadness"><span>What is Openmadness?</span></a></h1>
<p><img src="/openmadness-banner.png" alt="openmadness-banner"></p>
<p><strong>Openmadness</strong> is a lightweight JavaScript library that clarifies array-based and mathematical operations. Inspired by the <a href="https://numpy.org/" target="_blank" rel="noopener noreferrer">NumPy</a> library in Python, this library offers a JavaScript-first approach to everyday data manipulation tasks.</p>
<p>At its core, Openmadness offers:</p>
<ul>
<li>Add up all the numbers in an array</li>
<li>Find the average of numbers in an array</li>
<li>Transpose a matrix (like turning rows into columns)</li>
<li>Flatten a multi-dimensional array into a single one</li>
</ul>
<p>For example, if you want to add two arrays together, you can use Openmadness like this:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> add <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [4, 6]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="how-to-use-the-docs" tabindex="-1"><a class="header-anchor" href="#how-to-use-the-docs"><span>How to use the docs</span></a></h2>
<p>The docs are organized into 4 sections:</p>
<ol>
<li><RouteLink to="/getting-started/introduction.html"><strong>Getting Started</strong></RouteLink>: This is where you learn how to install and use Openmadness.</li>
<li><RouteLink to="/om-functions/introduction.html"><strong>OM-Functions</strong></RouteLink>: This is where you learn about the functions available in Openmadness.</li>
<li><RouteLink to="/tutorials/fundamentals/basic-arithmetics.html"><strong>Tutorials</strong></RouteLink>: This is where you learn how to use Openmadness to solve real-world problems.</li>
<li><RouteLink to="/resources/faq.html"><strong>Resources</strong></RouteLink>: This is where you learn about the resources available to you.</li>
</ol>
<div class="hint-container important">
<p class="hint-container-title">Prequisites</p>
<p>To follow along with Openmadness, you should:</p>
<ul>
<li>
<p>Basic knowledge of JavaScript (arrays, functions, etc.)</p>
</li>
<li>
<p><a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer">Node.js 18 +</a></p>
</li>
</ul>
</div>
<h2 id="who-should-use-this-guide" tabindex="-1"><a class="header-anchor" href="#who-should-use-this-guide"><span>Who Should Use This Guide</span></a></h2>
<p>This guide is for:</p>
<ul>
<li>Data scientists and analysts who want to use JavaScript for data manipulation</li>
<li>Developers who want to use JavaScript for numerical computing</li>
<li>Anyone who wants to learn about JavaScript-based numerical computing</li>
</ul>

<hr>
<p>Before You Begin</p>
<p>To get the most out of this guide, it helps to:</p>
<p>Know a little JavaScript (functions and arrays)</p>
<p>Have Node.js installed</p>
<p>Be ready to try out some code and have fun!</p>
<h2 id="tipyou-don-t-need-to-be-a-math-expert-openmadness-is-made-to-be-simple-friendly-and-easy-to-use-—-even-if-you-re-new-to-code" tabindex="-1"><a class="header-anchor" href="#tipyou-don-t-need-to-be-a-math-expert-openmadness-is-made-to-be-simple-friendly-and-easy-to-use-—-even-if-you-re-new-to-code"><span>tip
You don’t need to be a math expert. Openmadness is made to be simple, friendly, and easy to use — even if you’re new to code.</span></a></h2>
<p>What Is Openmadness?</p>
<p>Openmadness is not a copy of NumPy, but it was inspired by it.</p>
<p>It gives you helpful tools like:</p>
<p>.sum(), .mean(), .transpose(), .flatten()</p>
<p>All written in clean, readable JavaScript.</p>
<p>exampleHere’s a quick example of what Openmadness can do:</p>
<p>const matrix = omArray([
[1, 2],
[3, 4]
]);</p>
<p>const result = matrix.transpose().sum();</p>
<p>example
Here’s a quick example of what Openmadness can do:</p>
<p>const matrix = omArray([
[1, 2],
[3, 4]
]);</p>
<p>const result = matrix.transpose().sum();</p>
<div class="language-infoThe line-numbers-mode" data-highlighter="prismjs" data-ext="infoThe"><pre v-pre><code><span class="line">info</span>
<span class="line">The code above transposes the matrix (flips the rows and columns) and adds up all the numbers.tipOpenmadness works best when you learn by doing — try things out and explore how the functions behave.</span>
<span class="line">tip</span>
<span class="line">Openmadness works best when you learn by doing — try things out and explore how the functions behave.</span>
<span class="line">---</span>
<span class="line">success  </span>
<span class="line">Next Steps</span>
<span class="line">&lt;p style=&quot;margin-bottom: 0.5rem;&quot;&gt;</span>
<span class="line">  &lt;a href=&quot;./quickstart.md&quot; style=&quot;padding: 8px 16px; background-color: #3eaf7c; color: white; text-decoration: none; border-radius: 4px;&quot;&gt;</span>
<span class="line">    Try the Quickstart Guide</span>
<span class="line">  &lt;/a&gt;</span>
<span class="line">&lt;/p&gt;&lt;p&gt;</span>
<span class="line">  &lt;a href=&quot;https://github.com/yourusername/openmadness/blob/main/CONTRIBUTING.md&quot; style=&quot;padding: 8px 16px; background-color: #007acc; color: white; text-decoration: none; border-radius: 4px;&quot;&gt;</span>
<span class="line">    View the CONTRIBUTING Guide</span>
<span class="line">  &lt;/a&gt;</span>
<span class="line">&lt;/p&gt;success </span>
<span class="line">Next Steps</span>
<span class="line">&lt;p style=&quot;margin-bottom: 0.5rem;&quot;&gt;</span>
<span class="line">  &lt;a href=&quot;./quickstart.md&quot; style=&quot;padding: 8px 16px; background-color: #3eaf7c; color: white; text-decoration: none; border-radius: 4px;&quot;&gt;</span>
<span class="line">    Try the Quickstart Guide</span>
<span class="line">  &lt;/a&gt;</span>
<span class="line">&lt;/p&gt;</span>
<span class="line">&lt;p&gt;</span>
<span class="line">  &lt;a href=&quot;https://github.com/yourusername/openmadness/blob/main/CONTRIBUTING.md&quot; style=&quot;padding: 8px 16px; background-color: #007acc; color: white; text-decoration: none; border-radius: 4px;&quot;&gt;</span>
<span class="line">    View the CONTRIBUTING Guide</span>
<span class="line">  &lt;/a&gt;</span>
<span class="line">&lt;/p&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



