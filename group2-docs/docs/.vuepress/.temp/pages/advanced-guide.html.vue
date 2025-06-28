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
<h2 id="mini-linear-algebra-with-openmadness" tabindex="-1"><a class="header-anchor" href="#mini-linear-algebra-with-openmadness"><span>Mini Linear Algebra with Openmadness</span></a></h2>
<p>Linear algebra is a branch of mathematics that helps us work with vectors, matrices, and other multi-dimensional data. Openmadness provides some key operations that let you explore this world without needing a deep math background.</p>
<h3 id="dot-product" tabindex="-1"><a class="header-anchor" href="#dot-product"><span>Dot Product</span></a></h3>
<p>The <strong>dot product</strong> is a fundamental operation in linear algebra. It's a way to multiply two vectors or matrices and get a single number. You'll often see it in machine learning and data science. In Openmadness, you can use <code v-pre>.dot()</code> to calculate it.</p>
<h4 id="dot-product-of-two-vectors" tabindex="-1"><a class="header-anchor" href="#dot-product-of-two-vectors"><span>Dot product of two vectors</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> omArray <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> vectorA <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> vectorB <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> dotProduct <span class="token operator">=</span> vectorA<span class="token punctuation">.</span><span class="token function">dot</span><span class="token punctuation">(</span>vectorB<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dotProduct<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ➝ (1*4 + 2*5 + 3*6) = 4 + 10 + 18 = 32</span></span>
<span class="line"><span class="token comment">// Expected output: 32</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="matrix-multiplication" tabindex="-1"><a class="header-anchor" href="#matrix-multiplication"><span>Matrix multiplication</span></a></h3>
<p>The dot product is also essential for matrix multiplication. If you have two matrices, you can use <code v-pre>.dot()</code> to multiply them.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> matrixA <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> matrixB <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> productMatrix <span class="token operator">=</span> matrixA<span class="token punctuation">.</span><span class="token function">dot</span><span class="token punctuation">(</span>matrixB<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>productMatrix<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Expected output:</span></span>
<span class="line"><span class="token comment">// [[(1*5 + 2*7), (1*6 + 2*8)],</span></span>
<span class="line"><span class="token comment">//  [(3*5 + 4*7), (3*6 + 4*8)]]</span></span>
<span class="line"><span class="token comment">// which simplifies to:</span></span>
<span class="line"><span class="token comment">// [[19, 22],</span></span>
<span class="line"><span class="token comment">//  [43, 50]]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, Openmadness gives you a simple, chainable way to perform these powerful linear algebra calculations.</p>
<h3 id="multiply-a-matrix-by-a-scalar" tabindex="-1"><a class="header-anchor" href="#multiply-a-matrix-by-a-scalar"><span>Multiply a matrix by a scalar</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token constant">M</span> <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token constant">M</span><span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// ➝ [[10, 20], [30, 40]]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This scales every element of the matrix. It is perfect for normalizing or transforming data.</p>
<h2 id="building-a-tiny-neural-network" tabindex="-1"><a class="header-anchor" href="#building-a-tiny-neural-network"><span>Building a Tiny Neural Network</span></a></h2>
<p>You can use Openmadness to build a basic neural network prototype — just enough to demonstrate a forward pass using matrix operations.</p>
<p>This section walks you through creating a simple, 3-layer neural net: one input layer, one hidden layer, and one output layer. There's no training involved — this is a static prototype for understanding how data flows through layers.</p>
<p><strong>Step 1: Import and Define Inputs</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> omArray <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> inputs <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Each row represents one input sample with two features.</p>
<p><strong>Step 2: Define Random Weights</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> weights1 <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> weights2 <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>weights1</code> connects the input layer to the hidden layer (2x2)</li>
<li><code v-pre>weights2</code> connects the hidden layer to the output layer (2x1)</li>
</ul>
<p><strong>Step 3: Add Sigmoid Function</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">sigmoid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">exp</span><span class="token punctuation">(</span><span class="token operator">-</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Step 4: Forward Pass</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> hidden <span class="token operator">=</span> inputs</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">dot</span><span class="token punctuation">(</span>weights1<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">row</span> <span class="token operator">=></span> row<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>sigmoid<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> output <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span>hidden<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">dot</span><span class="token punctuation">(</span>weights2<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">row</span> <span class="token operator">=></span> row<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>sigmoid<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Output:'</span><span class="token punctuation">,</span> output<span class="token punctuation">.</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Run the Code</strong></p>
<p>To run the script:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">node</span> tiny-net.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Example output:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">Output: <span class="token punctuation">[</span> <span class="token punctuation">[</span> <span class="token number">0.74</span> <span class="token punctuation">]</span>, <span class="token punctuation">[</span> <span class="token number">0.68</span> <span class="token punctuation">]</span> <span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Each output value corresponds to a prediction for the input sample.</p>
<h3 id="next-steps" tabindex="-1"><a class="header-anchor" href="#next-steps"><span>Next Steps</span></a></h3>
<p>This forward-pass prototype can be expanded by:</p>
<ul>
<li>Adding more hidden layers</li>
<li>Replacing sigmoid with ReLU or another activation</li>
<li>Implementing error calculation and training via backpropagation</li>
</ul>
</div></template>


