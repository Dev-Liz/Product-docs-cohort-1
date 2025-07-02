<template><div><h2 id="👋-introduction" tabindex="-1"><a class="header-anchor" href="#👋-introduction"><span>👋 Introduction</span></a></h2>
<h3 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h3>
<p>Openmadness is a fun and beginner-friendly JavaScript tool that helps you do math and work with arrays (lists of numbers) without stress.</p>
<p>abstract
Openmadness is a fun and beginner-friendly JavaScript tool that helps you do math and work with arrays (lists of numbers) without stress.It was built for learners, tinkerers, and developers who enjoy working with data in a simple and creative way.</p>
<div class="hint-container tip">
<p class="hint-container-title">In this guide, you’ll learn:</p>
<ul>
<li>
<p>What Openmadness is and why it exists</p>
</li>
<li>
<p>Who the tool is built for</p>
</li>
<li>
<p>What you can do with it</p>
</li>
<li>
<p>Where to go next after this guide</p>
</li>
</ul>
</div>
<hr>
<div class="hint-container info">
<p class="hint-container-title">Who Should Use This Guide</p>
<p>This guide is perfect for:</p>
<ul>
<li>
<p>New developers learning JavaScript</p>
</li>
<li>
<p>People working with arrays or numbers who want easier tools</p>
</li>
<li>
<p>Anyone looking for a lightweight library with a &quot;NumPy feel&quot; in JavaScript</p>
</li>
</ul>
</div>
<hr>
<div class="hint-container warning">
<p class="hint-container-title">Before You Begin</p>
<p>To get the most out of this guide, it helps to:</p>
<ul>
<li>
<p>Know a little JavaScript (functions and arrays)</p>
</li>
<li>
<p>Have Node.js installed</p>
</li>
<li>
<p>Be ready to try out some code and have fun!</p>
</li>
</ul>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>You don’t need to be a math expert. Openmadness is made to be simple, friendly, and easy to use — even if you’re new to code.</p>
</div>
<hr>
<h3 id="what-is-openmadness" tabindex="-1"><a class="header-anchor" href="#what-is-openmadness"><span>What Is Openmadness?</span></a></h3>
<p>Openmadness is not a copy of NumPy, but it was inspired by it.</p>
<p>It gives you helpful tools like:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">.sum(), .mean(), .transpose(), .flatten()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>All written in clean, readable JavaScript.</p>
<p>Here’s a quick example of what Openmadness can do:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> matrix <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> matrix<span class="token punctuation">.</span><span class="token function">transpose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The code above transposes the matrix (flips the rows and columns) and adds up all the numbers.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Openmadness works best when you learn by doing. Try things out and explore how the functions behave.</p>
</div>
<hr>
<p><strong>Next Steps</strong></p>
<p style="margin-bottom: 0.5rem;">
  <a href="./quickstart.md" style="padding: 8px 16px; background-color: #3eaf7c; color: white; text-decoration: none; border-radius: 4px;">
    Try the Quickstart Guide
  </a>
</p><p>
  <a href="https://github.com/yourusername/openmadness/blob/main/CONTRIBUTING.md" style="padding: 8px 16px; background-color: #007acc; color: white; text-decoration: none; border-radius: 4px;">
    View the CONTRIBUTING Guide
  </a>
</p>
<h1 id="🛠️-installation" tabindex="-1"><a class="header-anchor" href="#🛠️-installation"><span>🛠️ Installation</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">In this guide, you’ll learn how to install and run Openmadness. Whether you’re using it in a project or just want to try it out on your computer, we’ve got you covered.</p>
</div>
<p>Having a test file like <code v-pre>play.js</code> makes it easier to experiment with Openmadness features as you go.</p>
<h2 id="install-options" tabindex="-1"><a class="header-anchor" href="#install-options"><span>Install Options</span></a></h2>
<p>You can install Openmadness in two main ways:</p>
<h3 id="option-1-use-npm-recommended" tabindex="-1"><a class="header-anchor" href="#option-1-use-npm-recommended"><span>Option 1: Use NPM (Recommended)</span></a></h3>
<p>Use this if you're building a project with Node.js or any bundler.</p>
<ul>
<li>
<p>Open your terminal</p>
</li>
<li>
<p>Run the command below:</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">npm install openmadness</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>Then use Openmadness in your code like this:</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> omArray <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> sample <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sample<span class="token punctuation">.</span><span class="token function">mean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: 20</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This method is best if you’re using Openmadness in a Node, Vite, or Webpack project.</p>
<h3 id="option-2-run-it-locally" tabindex="-1"><a class="header-anchor" href="#option-2-run-it-locally"><span>Option 2: Run It Locally</span></a></h3>
<p>Use this option if you want to test things out or contribute to the project.</p>
<ul>
<li>Clone the project</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">git clone https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>yourusername<span class="token operator">/</span>openmadness<span class="token punctuation">.</span>git</span>
<span class="line">cd openmadness</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Install the dependencies</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">npm install</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>Create a test file (e.g. play.js)</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> omArray <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: 10</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Run the script</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">node play<span class="token punctuation">.</span>js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>(Optional) Run the test suite</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">npm run test</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>This method is great if you want to explore how the functions work before writing documentation or contributing to the code.</p>
</div>
</div></template>


