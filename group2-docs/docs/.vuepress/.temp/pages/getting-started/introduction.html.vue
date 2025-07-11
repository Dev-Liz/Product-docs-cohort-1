<template><div><h1 id="👋-introduction" tabindex="-1"><a class="header-anchor" href="#👋-introduction"><span>👋 Introduction</span></a></h1>
<p><img src="/openmadness-banner.png" alt="openmadness-banner"></p>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<p>Openmadness is a fun and beginner-friendly JavaScript tool that helps you do math and work with arrays (lists of numbers) without stress.
It was built for learners, tinkerers, and developers who enjoy working with data in a simple and creative way.</p>
<h2 id="in-this-guide-you-ll-learn" tabindex="-1"><a class="header-anchor" href="#in-this-guide-you-ll-learn"><span>In this guide you'll learn:</span></a></h2>
<ul>
<li>
<p>What Openmadness is and why it exists</p>
</li>
<li>
<p>Who the tool is built for</p>
</li>
<li>
<p>What you can to do with it</p>
</li>
<li>
<p>Where to go next after this guide</p>
</li>
</ul>
<h2 id="who-should-use-this-guide" tabindex="-1"><a class="header-anchor" href="#who-should-use-this-guide"><span>Who Should Use This Guide</span></a></h2>
<hr>
<p>This guide is perfect for:</p>
<ul>
<li>
<p>New developers learning JavaScript</p>
</li>
<li>
<p>People working with arrays or numbers who want easier tools</p>
</li>
<li>
<p>Anyone looking for a lightweight library with a &quot;NumPy feel&quot; in JavaScript</p>
</li>
</ul>
<hr>
<p>Before You Begin</p>
<p>To get the most out of this guide, it helps to:</p>
<p>Know a little JavaScript (functions and arrays)</p>
<p>Have Node.js installed</p>
<p>Be ready to try out some code and have fun!</p>
<h2 id="tipyou-don-t-need-to-be-a-math-expert-openmadness-is-made-to-be-simple-friendly-and-easy-to-use-—-even-if-you-re-new-to-code" tabindex="-1"><a class="header-anchor" href="#tipyou-don-t-need-to-be-a-math-expert-openmadness-is-made-to-be-simple-friendly-and-easy-to-use-—-even-if-you-re-new-to-code"><span>tip
You don’t need to be a math expert. Openmadness is made to be simple, friendly, and easy to use — even if you’re new to code.</span></a></h2>
<p>What Is Openmadness?</p>
<p>Openmadness is not a copy of NumPy, but it was inspired by it.</p>
<p>It gives you helpful tools like:</p>
<p>.sum(), .mean(), .transpose(), .flatten()</p>
<p>All written in clean, readable JavaScript.</p>
<p>exampleHere’s a quick example of what Openmadness can do:</p>
<p>const matrix = omArray([
[1, 2],
[3, 4]
]);</p>
<p>const result = matrix.transpose().sum();</p>
<p>example
Here’s a quick example of what Openmadness can do:</p>
<p>const matrix = omArray([
[1, 2],
[3, 4]
]);</p>
<p>const result = matrix.transpose().sum();</p>
<div class="language-infoThe line-numbers-mode" data-highlighter="prismjs" data-ext="infoThe"><pre v-pre><code><span class="line">info</span>
<span class="line">The code above transposes the matrix (flips the rows and columns) and adds up all the numbers.tipOpenmadness works best when you learn by doing — try things out and explore how the functions behave.</span>
<span class="line">tip</span>
<span class="line">Openmadness works best when you learn by doing — try things out and explore how the functions behave.</span>
<span class="line">---</span>
<span class="line">success  </span>
<span class="line">Next Steps</span>
<span class="line">&lt;p style=&quot;margin-bottom: 0.5rem;&quot;&gt;</span>
<span class="line">  &lt;a href=&quot;./quickstart.md&quot; style=&quot;padding: 8px 16px; background-color: #3eaf7c; color: white; text-decoration: none; border-radius: 4px;&quot;&gt;</span>
<span class="line">    Try the Quickstart Guide</span>
<span class="line">  &lt;/a&gt;</span>
<span class="line">&lt;/p&gt;&lt;p&gt;</span>
<span class="line">  &lt;a href=&quot;https://github.com/yourusername/openmadness/blob/main/CONTRIBUTING.md&quot; style=&quot;padding: 8px 16px; background-color: #007acc; color: white; text-decoration: none; border-radius: 4px;&quot;&gt;</span>
<span class="line">    View the CONTRIBUTING Guide</span>
<span class="line">  &lt;/a&gt;</span>
<span class="line">&lt;/p&gt;success </span>
<span class="line">Next Steps</span>
<span class="line">&lt;p style=&quot;margin-bottom: 0.5rem;&quot;&gt;</span>
<span class="line">  &lt;a href=&quot;./quickstart.md&quot; style=&quot;padding: 8px 16px; background-color: #3eaf7c; color: white; text-decoration: none; border-radius: 4px;&quot;&gt;</span>
<span class="line">    Try the Quickstart Guide</span>
<span class="line">  &lt;/a&gt;</span>
<span class="line">&lt;/p&gt;</span>
<span class="line">&lt;p&gt;</span>
<span class="line">  &lt;a href=&quot;https://github.com/yourusername/openmadness/blob/main/CONTRIBUTING.md&quot; style=&quot;padding: 8px 16px; background-color: #007acc; color: white; text-decoration: none; border-radius: 4px;&quot;&gt;</span>
<span class="line">    View the CONTRIBUTING Guide</span>
<span class="line">  &lt;/a&gt;</span>
<span class="line">&lt;/p&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


