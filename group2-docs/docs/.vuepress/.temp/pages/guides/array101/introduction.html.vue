<template><div><h1 id="introduction-to-array" tabindex="-1"><a class="header-anchor" href="#introduction-to-array"><span>Introduction to Array</span></a></h1>
<p>An array is a data structure that allows you to store a collection of items with the same data type. This data type includes integers, characters, floats, doubles, etc. With an array, you can store multiple numbers or letters in a single variable.</p>
<p>Here is a simple example of an array that stores five different numbers:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">  <span class="token keyword">const</span> myArray<span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="importance-of-arrays" tabindex="-1"><a class="header-anchor" href="#importance-of-arrays"><span>Importance of Arrays</span></a></h2>
<p>Arrays offer several advantages, which include:</p>
<ol>
<li>
<p><strong>Efficient Data Storage and Retrieval</strong>: Arrays store multiple data in a sequential order in the computer memory, which makes it easier to directly retrieve elements using their index. I.e., a unique ID that indicates the position of each element in the array</p>
</li>
<li>
<p><strong>Enhanced Organization</strong>: Arrays store multiple items of the same data type in a single variable, which makes it easier to organize and manage large sets of data.</p>
</li>
<li>
<p><strong>Memory Efficiency</strong>: Arrays store elements in a contiguous memory, i.e., each element is stored next to the previous ones in a single block, which reduces memory usage.</p>
</li>
<li>
<p><strong>Code Reusability</strong>: Data stored in arrays can be used multiple times in different parts of the program, which prevents code duplication.</p>
</li>
<li>
<p><strong>Iteration and Manipulation</strong>: Data stored in an array is iterable, which makes it easy to process each item in the array and manipulate data effectively.</p>
</li>
</ol>
<h2 id="types-of-arrays" tabindex="-1"><a class="header-anchor" href="#types-of-arrays"><span>Types of Arrays</span></a></h2>
<p>There are different types of arrays in OpenMadness, which include:</p>
<p><strong>1. 1-D Arrays</strong>: This array type contains a sequence of elements, and they have only one dimension.</p>
<p><strong>Example</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> omArray <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">oneDArray <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, the <code v-pre>omArray</code> function was imported from the <code v-pre>openMadness</code> library to use the array method. Then, three items of the same data type (1, 7, 4) were stored in the <code v-pre>oneDArray</code> variable.</p>
<p><strong>2. 2-D Arrays</strong>: This array type stores data in rows and columns similar to a spreadsheet.</p>
<p><strong>Example</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> omArray <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">twoDArray <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Explanation</strong>:</p>
<p>In this example, the <code v-pre>omArray</code> function was imported from the <code v-pre>Openmadness</code> library to use the array method. The array [[1, 7], [4, 3]] is a 2-dimensional array made up of two rows: The first row is [1, 7]. The second row is [4, 3].
Each inner array represents a row, and the values inside each row represent the columns. So the <code v-pre>twoDArray</code> variable stores a 2x2 array (2 rows and 2 columns) of numbers.</p>
<p><strong>3. Multi-Dimensional Arrays</strong>: These array types have three or more dimensions and are used for representing complex data structures like images or volumetric data.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> omArray <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">threeDArray <span class="token operator">=</span> <span class="token function">omAarray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Explanation</strong>:</p>
<p>In this example, the <code v-pre>omArray</code> function was imported from the <code v-pre>Openmadness</code> library. The <code v-pre>threeDArray</code> variable stores a 3-D array with:</p>
<ul>
<li>2 layers, each a 2-D array.</li>
<li>Each layer has 2 rows and 2 columns. It forms a 2 × 2 × 2 array, representing data in depth, rows, and columns.</li>
</ul>
</div></template>


