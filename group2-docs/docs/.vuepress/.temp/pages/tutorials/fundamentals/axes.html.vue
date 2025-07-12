<template><div><h1 id="axes" tabindex="-1"><a class="header-anchor" href="#axes"><span>Axes</span></a></h1>
<p>Axes
Axes refer to the different dimensions along which you can perform operations in your data. In a 2D array (like a grid), you have two main axes:
Axis 0: Runs vertically, down the rows.
Axis 1: Runs horizontally, across the columns.
Why does this matter? Many Openmadness functions (like average() or sum()) allow you to specify an axis to operate on that particular dimension, rather than on the entire dataset.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> om <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> examScores <span class="token operator">=</span> om<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">85</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Student 1 scores (Math, Science, History)</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">]</span>  <span class="token comment">// Student 2 scores</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Exam Scores:\n"</span><span class="token punctuation">,</span> examScores<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Sum of all scores (no axis specified)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Total sum of all scores:"</span><span class="token punctuation">,</span> examScores<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: 513</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Sum along axis 0 (down the columns) - sum for each subject</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> subjectTotals <span class="token operator">=</span> examScores<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Sum per Subject (Axis 0):"</span><span class="token punctuation">,</span> subjectTotals<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: [155, 175, 178]</span></span>
<span class="line"><span class="token comment">// (80+75), (85+90), (90+88)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Sum along axis 1 (across the rows) - sum for each student</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> studentTotals <span class="token operator">=</span> examScores<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Sum per Student (Axis 1):"</span><span class="token punctuation">,</span> studentTotals<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: [255, 253]</span></span>
<span class="line"><span class="token comment">// (80+85+90), (75+90+88)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Don't worry if the axis seems tricky at first. It becomes clearer as you use it in practice for operations like calculating averages or sums.</p>
</div></template>


