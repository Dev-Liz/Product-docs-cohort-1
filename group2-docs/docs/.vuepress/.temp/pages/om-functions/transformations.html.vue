<template><div><h1 id="transformations" tabindex="-1"><a class="header-anchor" href="#transformations"><span>Transformations</span></a></h1>
<p>These functions are used to reshape or reformat arrays:</p>
<h3 id="_1-mad-reshape-array-newshape" tabindex="-1"><a class="header-anchor" href="#_1-mad-reshape-array-newshape"><span>1. <code v-pre>mad.reshape(array, newShape)</code></span></a></h3>
<p>Reshapes an array to the specified shape:</p>
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
<td style="text-align:center">The original array</td>
</tr>
<tr>
<td style="text-align:center">newShape</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">New shape, e.g., [2, 2]</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Reshaped array</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> reshape <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">reshape</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [[1, 2], [3, 4]]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-mad-flatten-array" tabindex="-1"><a class="header-anchor" href="#_2-mad-flatten-array"><span>2. <code v-pre>mad.flatten(array)</code></span></a></h3>
<p>Flattens a nested array into a 1D array:</p>
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
<td style="text-align:center">A nested array</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Flattened 1D array</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Reshaped array</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> flatten <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">flatten</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [1, 2, 3, 4]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-mad-transpose-array" tabindex="-1"><a class="header-anchor" href="#_3-mad-transpose-array"><span>3. <code v-pre>mad.transpose(array)</code></span></a></h3>
<p>Transposes a 2D array (rows become columns):</p>
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
<td style="text-align:center">2D Array</td>
<td style="text-align:center">The matrix to flip</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Transposed matrix</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Reshaped array</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> transpose <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">transpose</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [[1, 3], [2, 4]]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


