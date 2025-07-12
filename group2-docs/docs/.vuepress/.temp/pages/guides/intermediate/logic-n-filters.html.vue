<template><div><h1 id="logic-and-filters-extracting-what-you-need" tabindex="-1"><a class="header-anchor" href="#logic-and-filters-extracting-what-you-need"><span>Logic and Filters: Extracting What You Need</span></a></h1>
<p>Sometimes, you only want part of your data, such as a slice, a condition, or a masked result. Openmadness is designed to make this intuitive.</p>
<h3 id="example-filter-values" tabindex="-1"><a class="header-anchor" href="#example-filter-values"><span>Example: Filter Values</span></a></h3>
<p>Let’s find all values greater than 15:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> filtered <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=></span> val <span class="token operator">></span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>filtered<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token comment">// ➝ [20, 30]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example-logical-masking-coming-soon" tabindex="-1"><a class="header-anchor" href="#example-logical-masking-coming-soon"><span>Example: Logical Masking (Coming Soon)</span></a></h3>
<p>Logical masking will allow you to create a &quot;mask&quot; from conditions and apply it across your array:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Pseudo-code for upcoming features</span></span>
<span class="line"><span class="token keyword">const</span> mask <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">greaterThan</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">mask</span><span class="token punctuation">(</span>mask<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// ➝ [20, 30]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example-slicing-planned" tabindex="-1"><a class="header-anchor" href="#example-slicing-planned"><span>Example: Slicing (Planned)</span></a></h3>
<p>Want every second item, or a specific row/column? Openmadness will support slicing soon to help you navigate arrays more easily.</p>
</div></template>


