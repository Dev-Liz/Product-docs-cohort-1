<template><div><h1 id="data-types" tabindex="-1"><a class="header-anchor" href="#data-types"><span>Data Types</span></a></h1>
<p>In OM, numbers are the primary data type. They can be whole numbers e.g <code v-pre>10</code>, <code v-pre>500</code> or numbers with decimal points e.g <code v-pre>3.14</code>, <code v-pre>0.5</code>.
While JavaScript has other data types e.g <strong>strings for text</strong> or <strong>booleans for true/false values</strong>, OM functions are designed for numerical calculations. If you try to include non-numbers, OM might convert them to <code v-pre>NaN</code> meaning it can't understand them or throw an error.</p>
<p>For example:</p>
<p>You can calculate an array of prices that contains both float and integer:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> add <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"openmadness"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> prices <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">24.99</span><span class="token punctuation">,</span> <span class="token number">12.50</span><span class="token punctuation">,</span> <span class="token number">5.00</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Numeric prices:"</span><span class="token punctuation">,</span> prices<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>What happens if you try to include a string?</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> add <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"openmadness"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> mixedItems <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">'apple'</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Mixed data:"</span><span class="token punctuation">,</span> mixedItems<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: [10, NaN, 20]</span></span>
<span class="line"><span class="token comment">// 'apple' can't be converted to a number, so it becomes NaN.</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>For reliable results, always provide numbers to Openmadness arrays.</p>
</div>
</div></template>


