<template><div><h1 id="mini-linear-algebra-with-openmadness" tabindex="-1"><a class="header-anchor" href="#mini-linear-algebra-with-openmadness"><span>Mini Linear Algebra with Openmadness</span></a></h1>
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
</div></template>


