<template><div><h2 id="utilities" tabindex="-1"><a class="header-anchor" href="#utilities"><span>Utilities</span></a></h2>
<p>These functions assist with array handling and display tasks:</p>
<h3 id="_1-mad-clone-array" tabindex="-1"><a class="header-anchor" href="#_1-mad-clone-array"><span>1. <code v-pre>mad.clone(array)</code></span></a></h3>
<p>Creates a deep copy of an array:</p>
<table>
<thead>
<tr>
<th style="text-align:center">Parameter</th>
<th style="text-align:center">Type</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">array</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">The array to copy</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">A deep-cloned array</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Reshaped array</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> clone <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> newArray <span class="token operator">=</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [1, 2, 3]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-mad-print-array" tabindex="-1"><a class="header-anchor" href="#_2-mad-print-array"><span>2. <code v-pre>mad.print(array)</code></span></a></h3>
<p>Prints the array to the console in a readable format:</p>
<table>
<thead>
<tr>
<th style="text-align:center">Parameter</th>
<th style="text-align:center">Type</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">array</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Array to display</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">void</td>
<td style="text-align:center">No return value</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Reshaped array</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> print <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Console: [ [1, 2], [3, 4] ]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-mad-toarray-madarray" tabindex="-1"><a class="header-anchor" href="#_3-mad-toarray-madarray"><span>3. <code v-pre>mad.toArray(madArray)</code></span></a></h3>
<p>Converts a mad array into a plain JavaScript array:</p>
<table>
<thead>
<tr>
<th style="text-align:center">Parameter</th>
<th style="text-align:center">Type</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">madArray</td>
<td style="text-align:center">Mad Object</td>
<td style="text-align:center">Internal mad representation</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Plain JavaScript array</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> toArray<span class="token punctuation">,</span> zeros <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> jsArray <span class="token operator">=</span> <span class="token function">toArray</span><span class="token punctuation">(</span><span class="token function">zeros</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [[0, 0], [0, 0]]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


