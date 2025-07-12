<template><div><h1 id="statistics" tabindex="-1"><a class="header-anchor" href="#statistics"><span>Statistics</span></a></h1>
<h2 id="minimum-and-maximum-values" tabindex="-1"><a class="header-anchor" href="#minimum-and-maximum-values"><span>Minimum and Maximum Values</span></a></h2>
<p>Openmadness provides simple methods to quickly find the extreme values in your dataset: the smallest number using min() and the largest using max(). This helps you quickly see how high and low your numbers go.</p>
<ul>
<li>min()
Get the lowest value in your Openmadness array.</li>
<li>max()
Get the highest value in your Openmadness array.</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> om <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> stockPrices <span class="token operator">=</span> om<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">120.50</span><span class="token punctuation">,</span> <span class="token number">122.10</span><span class="token punctuation">,</span> <span class="token number">119.80</span><span class="token punctuation">,</span> <span class="token number">125.00</span><span class="token punctuation">,</span> <span class="token number">121.75</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Stock Prices:"</span><span class="token punctuation">,</span> stockPrices<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> lowestPrice <span class="token operator">=</span> stockPrices<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Lowest price:"</span><span class="token punctuation">,</span> lowestPrice<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: 119.8</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> highestPrice <span class="token operator">=</span> stockPrices<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Highest price:"</span><span class="token punctuation">,</span> highestPrice<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: 125</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sum" tabindex="-1"><a class="header-anchor" href="#sum"><span>sum()</span></a></h4>
<p>Calculate the total sum of all numbers in your array. We saw this earlier with axes, but here's a simple example.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> om <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> monthlyExpenses <span class="token operator">=</span> om<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Monthly Expenses:"</span><span class="token punctuation">,</span> monthlyExpenses<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> totalExpenses <span class="token operator">=</span> monthlyExpenses<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Total Monthly Expenses:"</span><span class="token punctuation">,</span> totalExpenses<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: 845</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


