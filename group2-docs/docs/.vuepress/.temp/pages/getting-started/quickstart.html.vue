<template><div><h2 id="🚀-quick-start" tabindex="-1"><a class="header-anchor" href="#🚀-quick-start"><span>🚀 Quick Start</span></a></h2>
<p>This quickstart tutorial is intended for users new to <strong>Openmadness</strong>. It introduces the core concepts of the library and demonstrates how to perform basic operations. Whether you're building a game, creating a simulation, or experimenting with procedural generation, this guide will help you get started quickly.</p>
<div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>This guide assumes that you have a basic knowledge of JavaScript</p>
</div>
<h2 id="what-is-openmadness" tabindex="-1"><a class="header-anchor" href="#what-is-openmadness"><span>What is Openmadness?</span></a></h2>
<p><strong>Openmadness</strong> is a lightweight JavaScript library that clarifies array-based and mathematical operations. Inspired by the <a href="https://numpy.org/" target="_blank" rel="noopener noreferrer">NumPy</a> library in Python, this project offers a JavaScript-first approach to everyday data manipulation tasks.</p>
<p>At its core, Openmadness offers:</p>
<ul>
<li>
<p>A flexible <strong>map system</strong> for defining walkable terrain and obstacles</p>
</li>
<li>
<p><strong>Entities</strong> that can move and act based on logic or randomness</p>
</li>
<li>
<p>A <strong>simulation loop</strong> that drives turn-based behavior</p>
</li>
<li>
<p>Hooks for adding custom rules, triggers, and effects</p>
</li>
</ul>
<h2 id="creating-your-first-simulation" tabindex="-1"><a class="header-anchor" href="#creating-your-first-simulation"><span>Creating Your First Simulation</span></a></h2>
<p>To begin, we’ll set up a simple simulation world with one entity that moves randomly. This will introduce you to the basic structure of an Openmadness program.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Engine<span class="token punctuation">,</span> World<span class="token punctuation">,</span> Entity<span class="token punctuation">,</span> RandomMover <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Step 1: Create a simple 5x5 world with open terrain (represented by 0s)</span></span>
<span class="line"><span class="token keyword">const</span> terrain <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> world <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">World</span><span class="token punctuation">(</span>terrain<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Step 2: Create an entity with a simple random movement behavior</span></span>
<span class="line"><span class="token keyword">const</span> player <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entity</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Player'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">RandomMover</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Step 3: Add the entity to the world</span></span>
<span class="line">world<span class="token punctuation">.</span><span class="token function">addEntity</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Step 4: Create an engine and run the simulation for a few turns</span></span>
<span class="line"><span class="token keyword">const</span> engine <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Engine</span><span class="token punctuation">(</span>world<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  engine<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Turn </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: Player is at (</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>player<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>player<span class="token punctuation">.</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, we:</p>
<ul>
<li>
<p>Defined a <strong>5x5 grid</strong> of walkable terrain (where <code v-pre>0</code> might represent a floor tile).</p>
</li>
<li>
<p>Placed an entity at the center with a <code v-pre>RandomMover</code> behavior, which means it will move randomly to adjacent tiles each turn.</p>
</li>
<li>
<p>Ran the simulation for 5 turns using <code v-pre>engine.update()</code>, printing the entity's position after each move.</p>
</li>
</ul>
<h2 id="next-steps" tabindex="-1"><a class="header-anchor" href="#next-steps"><span><strong>Next Steps</strong></span></a></h2>
<p>Congratulations! You just created your first simulation! 👍 Now that you have gotten the basics down, consider picking the following:</p>
<ul>
<li><RouteLink to="/group2-docs/docs/guides.html">Guides</RouteLink></li>
<li><RouteLink to="/group2-docs/docs/tutorials.html">Tutorials</RouteLink></li>
</ul>
<p>Got any ideas to improve the guide, check out our CONTRIBUTING guide on GitHub.</p>
<contributors /></div></template>


