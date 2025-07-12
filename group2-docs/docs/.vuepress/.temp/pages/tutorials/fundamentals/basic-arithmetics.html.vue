<template><div><h1 id="basic-arithmetic" tabindex="-1"><a class="header-anchor" href="#basic-arithmetic"><span>Basic Arithmetic</span></a></h1>
<p>OpenMadness makes performing common math operations on arrays easier and more efficient. Instead of performing calculations one by one, OM lets you apply operations to entire arrays at once.</p>
<p>When you use an arithmetic method like <code v-pre>add()</code> or <code v-pre>multiply()</code> on an array, it applies that operation to every corresponding number in the array. If you add a single number (a scalar), it's added to every element in the array.</p>
<p>For example, if you have an array of daily sales for each day using this data:</p>
<table>
<thead>
<tr>
<th>Day</th>
<th>Sales</th>
<th>Marketing Spend</th>
</tr>
</thead>
<tbody>
<tr>
<td>Day 1</td>
<td>100</td>
<td>10</td>
</tr>
<tr>
<td>Day 2</td>
<td>150</td>
<td>25</td>
</tr>
<tr>
<td>Day 3</td>
<td>200</td>
<td>40</td>
</tr>
</tbody>
</table>
<p>you can easily perform the following operations on it:</p>
<ol>
<li>Create arrays for daily sales and marketing spend:</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> omArray <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create arrays</span></span>
<span class="line"><span class="token keyword">const</span> dailySales <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> marketingSpend <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Daily Sales:"</span><span class="token punctuation">,</span> dailySales<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: [100, 150, 200]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Marketing Spend:"</span><span class="token punctuation">,</span> marketingSpend<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: [10, 25, 40]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>To calculate the total revenue by adding the marketing spend to each sale:</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Add two arrays (element-wise)</span></span>
<span class="line"><span class="token keyword">const</span> totalRevenue <span class="token operator">=</span> dailySales<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>marketingSpend<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Total Revenue (Sales + Spend):"</span><span class="token punctuation">,</span> totalRevenue<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: [110, 175, 240]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>To calculate the net sales by subtracting the marketing spend from each sale:</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> netSales <span class="token operator">=</span> dailySales<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>marketingSpend<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Net Sales (Sales - Spend):"</span><span class="token punctuation">,</span> netSales<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: [90, 125, 160]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>To Calculate the sales after each day increased using this data:</li>
</ol>
<table>
<thead>
<tr>
<th>Day</th>
<th>Sales Increase</th>
</tr>
</thead>
<tbody>
<tr>
<td>Day 1</td>
<td>50</td>
</tr>
<tr>
<td>Day 2</td>
<td>75</td>
</tr>
<tr>
<td>Day 3</td>
<td>20</td>
</tr>
</tbody>
</table>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> salesIncrease <span class="token operator">=</span> dailySales<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Sales after increase:"</span><span class="token punctuation">,</span> salesIncrease<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: [140, 200, 180 ]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>To calculate the doubled sales by multiplying each sale by 2:</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> doubledSales <span class="token operator">=</span> dailySales<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Doubled Sales:"</span><span class="token punctuation">,</span> doubledSales<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: [280, 400, 360]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>To calculate the sales ratio by dividing each sale by the corresponding marketing spend:</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> salesRatio <span class="token operator">=</span> dailySales<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span>marketingSpend<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Sales Ratio (Sales / Spend):"</span><span class="token punctuation">,</span> salesRatio<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: [10, 6, 5]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


