<template><div><h2 id="om-functions" tabindex="-1"><a class="header-anchor" href="#om-functions"><span>OM-Functions</span></a></h2>
<p>The main functions in the OpenMadness JavaScript library are used for:</p>
<ol>
<li>Array creation and manipulation</li>
<li>Arithmetic Operation</li>
<li>Logic</li>
<li>Statistics</li>
<li>Transformations</li>
<li>Utilities</li>
</ol>
<h2 id="array-operations" tabindex="-1"><a class="header-anchor" href="#array-operations"><span>Array Operations</span></a></h2>
<p>These functions are available for creating or manipulating arrays:</p>
<h3 id="_1-mad-ones-shape" tabindex="-1"><a class="header-anchor" href="#_1-mad-ones-shape"><span>1. <code v-pre>mad.ones(shape)</code></span></a></h3>
<p>This creates an array filled with ones:</p>
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
<td style="text-align:center">shape</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Shape of the new array, e.g., [2, 3] or 2</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">A new array filled with ones</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Create a 3x1 array of ones</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ones <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> onesColumn <span class="token operator">=</span> <span class="token function">ones</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [[1], [1], [1]]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-mad-zeros-shape" tabindex="-1"><a class="header-anchor" href="#_2-mad-zeros-shape"><span>2. <code v-pre>mad.zeros(shape)</code></span></a></h3>
<p>This creates an array filled with zeros:</p>
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
<td style="text-align:center">shape</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Shape of the new array, e.g., [2, 3] or 2</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">A new array filled with zeros</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Create a 2x2 array of zeroes</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> zeros <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> zeroMatrix <span class="token operator">=</span> <span class="token function">zeros</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [[0, 0], [0, 0]]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-mad-range-start-end-step" tabindex="-1"><a class="header-anchor" href="#_3-mad-range-start-end-step"><span>3. <code v-pre>mad.range(start, end, step)</code></span></a></h3>
<p>This generates an array containing a sequence of numbers:</p>
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
<td style="text-align:center">start</td>
<td style="text-align:center">number</td>
<td style="text-align:center">Start of the range</td>
</tr>
<tr>
<td style="text-align:center">end</td>
<td style="text-align:center">number</td>
<td style="text-align:center">End of the range</td>
</tr>
<tr>
<td style="text-align:center">step</td>
<td style="text-align:center">number</td>
<td style="text-align:center">Step increment. Default is 1</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">A new array with the number range</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> range <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> sequence <span class="token operator">=</span> <span class="token function">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Result: [0, 2, 4, 6, 8]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-mad-random-shape" tabindex="-1"><a class="header-anchor" href="#_4-mad-random-shape"><span>4. <code v-pre>mad.random(shape)</code></span></a></h3>
<p>Generates an array of the given shape with random values between 0 and 1:</p>
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
<td style="text-align:center">shape</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">Shape of the new array</td>
</tr>
<tr>
<td style="text-align:center">Returns</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">A new array filled with random values</td>
</tr>
</tbody>
</table>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> random <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> randomArray <span class="token operator">=</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Example output: [[0.13, 0.85], [0.42, 0.67]]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


