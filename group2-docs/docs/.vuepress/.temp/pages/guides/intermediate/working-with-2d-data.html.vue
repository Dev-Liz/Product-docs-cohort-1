<template><div><p>Now that you're familiar with the basics of Openmadness, let’s explore some of the library's powerful features in more depth. This guide will help you learn how to reshape your data, understand its statistical properties, and extract the specific information you need.</p>
<p>We'll walk through three concepts:</p>
<ul>
<li>Reshaping 2D data</li>
<li>Making sense of data with statistics</li>
<li>Using logic and filters to extract what you need</li>
</ul>
<h2 id="reshaping-reality-working-with-2d-data" tabindex="-1"><a class="header-anchor" href="#reshaping-reality-working-with-2d-data"><span>Reshaping Reality: Working with 2D Data</span></a></h2>
<p>When your data grows beyond simple lists, it often makes sense to structure it as a matrix (or 2D array). Openmadness makes it easy to reshape and transform your data layout.</p>
<h3 id="example-reshape-a-list-into-a-matrix" tabindex="-1"><a class="header-anchor" href="#example-reshape-a-list-into-a-matrix"><span>Example: Reshape a List into a Matrix</span></a></h3>
<p>Imagine you have a list of numbers that you want to arrange into a grid, like a spreadsheet. With <strong>omArray()</strong>, you can create a 2D array, which is essentially a grid of rows and columns.</p>
<p>Let's say you have a single list of numbers:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> omArray <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> flatData <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can use the <strong>.reshape()</strong> operation to turn this flat list into a grid. You just tell it how many rows and columns you want. For example, to make it a 2x3 grid (2 rows, 3 columns):</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> reshapedData <span class="token operator">=</span> flatData<span class="token punctuation">.</span><span class="token function">reshape</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reshapedData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Expected output:</span></span>
<span class="line"><span class="token comment">// [[1, 2, 3],</span></span>
<span class="line"><span class="token comment">//  [4, 5, 6]]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example-flatten-a-matrix" tabindex="-1"><a class="header-anchor" href="#example-flatten-a-matrix"><span>Example: Flatten a Matrix</span></a></h3>
<p>What if you have a grid and you want to turn it back into a single, flat list? That's where .flatten() comes in handy!</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> matrix <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> flattenedData <span class="token operator">=</span> matrix<span class="token punctuation">.</span><span class="token function">flatten</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>flattenedData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Expected output: [1, 2, 3, 4, 5, 6]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example-transpose-a-matrix" tabindex="-1"><a class="header-anchor" href="#example-transpose-a-matrix"><span>Example: Transpose a Matrix</span></a></h3>
<p>Sometimes, you might want to switch the rows and columns of your grid. This is called transposing, and Openmadness makes it simple with <strong>.transpose()</strong>. Think of it like rotating your data so the rows become columns and the columns become rows.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> originalMatrix <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> transposedMatrix <span class="token operator">=</span> originalMatrix<span class="token punctuation">.</span><span class="token function">transpose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>transposedMatrix<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Expected output:</span></span>
<span class="line"><span class="token comment">// [[1, 3],</span></span>
<span class="line"><span class="token comment">//  [2, 4]]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


