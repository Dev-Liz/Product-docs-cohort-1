<template><div><h1 id="building-a-tiny-neural-network" tabindex="-1"><a class="header-anchor" href="#building-a-tiny-neural-network"><span>Building a Tiny Neural Network</span></a></h1>
<p>You can use Openmadness to build a basic neural network prototype — just enough to demonstrate a forward pass using matrix operations.</p>
<p>This section walks you through creating a simple, 3-layer neural net: one input layer, one hidden layer, and one output layer. There's no training involved — this is a static prototype for understanding how data flows through layers.</p>
<p><strong>Step 1: Import and Define Inputs</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> omArray <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> inputs <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Each row represents one input sample with two features.</p>
<p><strong>Step 2: Define Random Weights</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> weights1 <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> weights2 <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>weights1</code> connects the input layer to the hidden layer (2x2)</li>
<li><code v-pre>weights2</code> connects the hidden layer to the output layer (2x1)</li>
</ul>
<p><strong>Step 3: Add Sigmoid Function</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">sigmoid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">exp</span><span class="token punctuation">(</span><span class="token operator">-</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Step 4: Forward Pass</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> hidden <span class="token operator">=</span> inputs</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">dot</span><span class="token punctuation">(</span>weights1<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">row</span> <span class="token operator">=></span> row<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>sigmoid<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> output <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span>hidden<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">dot</span><span class="token punctuation">(</span>weights2<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">row</span> <span class="token operator">=></span> row<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>sigmoid<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Output:'</span><span class="token punctuation">,</span> output<span class="token punctuation">.</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Run the Code</strong></p>
<p>To run the script:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">node</span> tiny-net.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Example output:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">Output: <span class="token punctuation">[</span> <span class="token punctuation">[</span> <span class="token number">0.74</span> <span class="token punctuation">]</span>, <span class="token punctuation">[</span> <span class="token number">0.68</span> <span class="token punctuation">]</span> <span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Each output value corresponds to a prediction for the input sample.</p>
<h3 id="next-steps" tabindex="-1"><a class="header-anchor" href="#next-steps"><span>Next Steps</span></a></h3>
<p>This forward-pass prototype can be expanded by:</p>
<ul>
<li>Adding more hidden layers</li>
<li>Replacing sigmoid with ReLU or another activation</li>
<li>Implementing error calculation and training via backpropagation.</li>
</ul>
</div></template>


