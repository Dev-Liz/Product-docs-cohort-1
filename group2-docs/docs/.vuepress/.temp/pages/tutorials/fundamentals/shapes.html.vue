<template><div><h1 id="understanding-array-shapes" tabindex="-1"><a class="header-anchor" href="#understanding-array-shapes"><span>Understanding Array Shapes</span></a></h1>
<p>In Openmadness, the <strong>shape</strong> of an array defines its dimensions and structure. It's like a blueprint that describes how your data is organized in space.</p>
<h2 id="what-is-shape" tabindex="-1"><a class="header-anchor" href="#what-is-shape"><span>What is Shape?</span></a></h2>
<p>The shape property returns an array where each element represents the size of a dimension:</p>
<ul>
<li>For a 1D array (vector): shape is <code v-pre>[length]</code></li>
<li>For a 2D array (matrix): shape is <code v-pre>[rows, columns]</code></li>
<li>For a 3D array (cube): shape is <code v-pre>[depth, rows, columns]</code></li>
</ul>
<h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h2>
<ul>
<li>1D Array (Vector)</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> temperatures <span class="token operator">=</span> om<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">72</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">68</span><span class="token punctuation">,</span> <span class="token number">71</span><span class="token punctuation">,</span> <span class="token number">69</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Temperatures shape:"</span><span class="token punctuation">,</span> temperatures<span class="token punctuation">.</span>shape<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: [5]</span></span>
<span class="line"><span class="token comment">// A single dimension with 5 elements</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>2D Array (Matrix)</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> monthlyRevenue <span class="token operator">=</span> om<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">45000</span><span class="token punctuation">,</span> <span class="token number">52000</span><span class="token punctuation">,</span> <span class="token number">49000</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Q1 revenue for 3 products</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">48000</span><span class="token punctuation">,</span> <span class="token number">51000</span><span class="token punctuation">,</span> <span class="token number">47000</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Q2 revenue for 3 products</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">50000</span><span class="token punctuation">,</span> <span class="token number">53000</span><span class="token punctuation">,</span> <span class="token number">51000</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Q3 revenue for 3 products</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Monthly Revenue shape:"</span><span class="token punctuation">,</span> monthlyRevenue<span class="token punctuation">.</span>shape<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: [3, 3]</span></span>
<span class="line"><span class="token comment">// 3 rows and 3 columns</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>3D Array (Cube)</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> yearlyData <span class="token operator">=</span> om<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token comment">// Year 1</span></span>
<span class="line">  <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Product A, regions 1-3</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Product B, regions 1-3</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// Year 2</span></span>
<span class="line">  <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Product A, regions 1-3</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">37</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Product B, regions 1-3</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Yearly Data shape:"</span><span class="token punctuation">,</span> yearlyData<span class="token punctuation">.</span>shape<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: [2, 2, 3]</span></span>
<span class="line"><span class="token comment">// 2 years, 2 products, 3 regions</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="why-shapes-matter" tabindex="-1"><a class="header-anchor" href="#why-shapes-matter"><span>Why Shapes Matter</span></a></h2>
<p>Understanding shapes is essential because:</p>
<ol>
<li><strong>Operation Compatibility</strong>: Many operations require arrays with compatible shapes</li>
<li><strong>Broadcasting</strong>: OpenMadness can automatically expand smaller arrays to match larger ones</li>
<li><strong>Performance</strong>: Knowing your data's shape helps optimize memory usage and computation</li>
</ol>
<h2 id="reshaping-arrays" tabindex="-1"><a class="header-anchor" href="#reshaping-arrays"><span>Reshaping Arrays</span></a></h2>
<p>You can transform an array's shape while preserving its data using the <code v-pre>reshape()</code> method:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> om <span class="token keyword">from</span> <span class="token string">"openmadness"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> data <span class="token operator">=</span> om<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Original shape:"</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>shape<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: [6]</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> reshaped <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">reshape</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Reshaped data:"</span><span class="token punctuation">,</span> reshaped<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Output: [[1, 2, 3], [4, 5, 6]]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"New shape:"</span><span class="token punctuation">,</span> reshaped<span class="token punctuation">.</span>shape<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: [2, 3]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Remember</p>
<p>When reshaping, the total number of elements must remain the same (2×3=6 in the example above).</p>
</div>
</div></template>


