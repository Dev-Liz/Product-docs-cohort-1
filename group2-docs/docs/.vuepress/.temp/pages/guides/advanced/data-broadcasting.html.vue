<template><div><h1 id="advanced-guide" tabindex="-1"><a class="header-anchor" href="#advanced-guide"><span>Advanced Guide</span></a></h1>
<p>This advanced guide will show you how to perform operations on arrays of different sizes and dive into some core linear algebra concepts.</p>
<p>We’ll explore three powerful concepts:</p>
<ul>
<li>Broadcasting like a pro</li>
<li>Mini Linear Algebra with Openmadness</li>
<li>Building a tiny neural net prototype</li>
</ul>
<h2 id="broadcasting-like-a-pro" tabindex="-1"><a class="header-anchor" href="#broadcasting-like-a-pro"><span>Broadcasting like a pro</span></a></h2>
<p>Imagine you have a list of numbers and you want to add 10 to every single one of them. You could loop through the list and add 10 to each number one by one, but that's a lot of work. <strong>Broadcasting</strong> lets you do this in a single, simple operation.</p>
<p>In Openmadness, broadcasting allows you to perform operations between arrays of different shapes. The smaller array &quot;stretches&quot; to match the shape of the larger one so the operation can happen.</p>
<h3 id="add-a-number-to-every-item-in-an-array" tabindex="-1"><a class="header-anchor" href="#add-a-number-to-every-item-in-an-array"><span>Add a number to every item in an array</span></a></h3>
<p>Let's say you want to add a single number to every element in an array.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> omArray <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> scores <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">85</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> boostedScores <span class="token operator">=</span> scores<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Add 5 to each element</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>boostedScores<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Expected output: [90, 95, 100]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here, the number <code v-pre>5</code> is &quot;broadcast&quot; across the entire <code v-pre>scores</code> array. This saves you from writing a loop and keeps your code clean and readable.</p>
<h3 id="add-two-arrays-of-the-same-shape" tabindex="-1"><a class="header-anchor" href="#add-two-arrays-of-the-same-shape"><span>Add two arrays of the same shape</span></a></h3>
<p>This also works with arrays of different shapes, as long as their dimensions are compatible. The library automatically handles the stretching of the smaller array to fit the larger one. For example, you can add a simple list to a 2D grid:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> matrix <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> rowToAdd <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> matrix<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>rowToAdd<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Expected output:</span></span>
<span class="line"><span class="token comment">// [[11, 22, 33],</span></span>
<span class="line"><span class="token comment">//  [14, 25, 36]]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, the <code v-pre>rowToAdd</code> array is broadcast to each row of the <code v-pre>matrix</code>. This is useful for applying a consistent change across your data.</p>
<h3 id="add-a-row-vector-to-a-matrix" tabindex="-1"><a class="header-anchor" href="#add-a-row-vector-to-a-matrix"><span>Add a row vector to a matrix</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> matrix <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> vector <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> matrix<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>vector<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// ➝ [[11, 22], [13, 24]]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Behind the scenes, Openmadness stretches <code v-pre>vector</code> across each row. You get readable code and fewer loops.</p>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>Keep in mind: shapes must be compatible for broadcasting.
You’ll get helpful errors if they’re not.</p>
</div>
</div></template>


