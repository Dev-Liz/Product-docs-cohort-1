<template><div><h1 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#what-s-the-difference-between-openmadness-and-vanilla-javascript-array-methods">What’s the difference between OpenMadness and vanilla JavaScript array methods?</router-link></li><li><router-link to="#what-should-i-do-if-a-specific-openmadness-method-is-not-working-as-expected">What should I do if a specific OpenMadness method is not working as expected?</router-link></li><li><router-link to="#does-openmadness-work-with-other-libraries-like-lodash-or-numjs">Does OpenMadness work with other libraries like Lodash or NumJS?</router-link></li><li><router-link to="#how-can-i-contribute-to-openmadness">How can I contribute to OpenMadness?</router-link></li><li><router-link to="#is-openmadness-compatible-with-older-browsers">Is OpenMadness compatible with older browsers?</router-link></li><li><router-link to="#why-am-i-getting-a-module-not-found-error-when-importing-openmadness">Why am I getting a &quot;Module not found&quot; error when importing OpenMadness?</router-link></li><li><router-link to="#where-can-i-report-bugs-or-request-new-features">Where can I report bugs or request new features?</router-link></li><li><router-link to="#does-openmadness-support-asynchronous-operations">Does OpenMadness support asynchronous operations?</router-link></li><li><router-link to="#i-installed-openmadness-but-it-s-not-recognized-in-my-project-what-should-i-check">I installed OpenMadness, but it&#39;s not recognized in my project. What should I check?</router-link></li></ul></nav>
<h2 id="what-s-the-difference-between-openmadness-and-vanilla-javascript-array-methods" tabindex="-1"><a class="header-anchor" href="#what-s-the-difference-between-openmadness-and-vanilla-javascript-array-methods"><span>What’s the difference between OpenMadness and vanilla JavaScript array methods?</span></a></h2>
<p>OpenMadness simplifies array and math operations with intuitive, chainable methods (like <code v-pre>sum()</code> or <code v-pre>filterEven()</code>) and built-in utilities (e.g., statistics or matrix ops), while vanilla JS requires manual coding for these tasks.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Vanilla js</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"></span>
<span class="line"><span class="token comment">// OpenMadness  </span></span>
<span class="line"><span class="token function">omArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filterEven</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">square</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="what-should-i-do-if-a-specific-openmadness-method-is-not-working-as-expected" tabindex="-1"><a class="header-anchor" href="#what-should-i-do-if-a-specific-openmadness-method-is-not-working-as-expected"><span>What should I do if a specific OpenMadness method is not working as expected?</span></a></h2>
<p>First, verify your inputs match the method’s requirements (e.g., correct data types, array structure). Check the <RouteLink to="/tutorials.html">Openmadnness documentation</RouteLink> for specific method and examples. If the issue persists, search the GitHub Issues page for similar problems or file a new issue with details about your code, environment, and error messages.</p>
<h2 id="does-openmadness-work-with-other-libraries-like-lodash-or-numjs" tabindex="-1"><a class="header-anchor" href="#does-openmadness-work-with-other-libraries-like-lodash-or-numjs"><span>Does OpenMadness work with other libraries like Lodash or NumJS?</span></a></h2>
<p>Yes, OpenMadness can be used alongside libraries like Lodash or NumJS, but there may be overlap in functionality (e.g., array operations). To avoid conflicts:</p>
<ul>
<li>Use OpenMadness for simpler, math-focused tasks (e.g., statistics, vector operations).</li>
<li>Use Lodash for utility functions (e.g., deep cloning, object manipulation).</li>
<li>Use NumJS for advanced numerical computing (e.g., multi-dimensional arrays).</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">'lodash'</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> nj <span class="token keyword">from</span> <span class="token string">'numjs'</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> omArray <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span>  </span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  </span>
<span class="line"></span>
<span class="line"><span class="token comment">// Lodash (utility)  </span></span>
<span class="line"><span class="token keyword">const</span> shuffled <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">shuffle</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"></span>
<span class="line"><span class="token comment">// NumJS (advanced math)  </span></span>
<span class="line"><span class="token keyword">const</span> matrix <span class="token operator">=</span> nj<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"></span>
<span class="line"><span class="token comment">// OpenMadness (simpler math ops)  </span></span>
<span class="line"><span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token function">omArray</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="how-can-i-contribute-to-openmadness" tabindex="-1"><a class="header-anchor" href="#how-can-i-contribute-to-openmadness"><span>How can I contribute to OpenMadness?</span></a></h2>
<p>To contribute or report a bug, visit the <a href="https://github.com/Dev-Liz/Product-docs-cohort-1" target="_blank" rel="noopener noreferrer">OpenMadness GitHub repository</a>. Check the contributing.md file for guidelines on submitting pull requests or issues. For bugs, provide a minimal reproducible example, your environment details (e.g., Node.js version, browser), and expected vs. actual behaviour.</p>
<h2 id="is-openmadness-compatible-with-older-browsers" tabindex="-1"><a class="header-anchor" href="#is-openmadness-compatible-with-older-browsers"><span>Is OpenMadness compatible with older browsers?</span></a></h2>
<p>OpenMadness is built for modern JavaScript environments. Some features may not work in older browsers (e.g., IE11) without polyfills. If targeting older browsers, include polyfills for modern JavaScript features (e.g., <code v-pre>Array.prototype.includes</code>) or use a transpiler like Babel.</p>
<h2 id="why-am-i-getting-a-module-not-found-error-when-importing-openmadness" tabindex="-1"><a class="header-anchor" href="#why-am-i-getting-a-module-not-found-error-when-importing-openmadness"><span>Why am I getting a &quot;Module not found&quot; error when importing OpenMadness?</span></a></h2>
<p>This error typically occurs if OpenMadness is not installed correctly or the import path is incorrect. Ensure you’ve run <code v-pre>npm install openmadness</code> and check that your import statement matches the library’s module name (e.g., <code v-pre>import OpenMadness from 'openmadness'</code>). Verify that the library is listed in your <code v-pre>package.json</code> dependencies. If using a CDN or script tag, confirm the file path or URL is correct</p>
<h2 id="where-can-i-report-bugs-or-request-new-features" tabindex="-1"><a class="header-anchor" href="#where-can-i-report-bugs-or-request-new-features"><span>Where can I report bugs or request new features?</span></a></h2>
<p>You can submit issues, bug reports, or feature requests on the <a href="https://github.com/Dev-Liz/Product-docs-cohort-1" target="_blank" rel="noopener noreferrer">official GitHub repository</a></p>
<p><strong>Before submitting</strong>:</p>
<ul>
<li>
<p>Check existing issues to avoid duplicates.</p>
</li>
<li>
<p>For bugs, include:</p>
<ul>
<li>Steps to reproduce</li>
<li>Expected vs. actual behavior</li>
<li>Browser/Node.js version &amp; OpenMadness version</li>
</ul>
</li>
<li>
<p>For feature requests, explain:</p>
<ul>
<li>The problem it solves</li>
<li>Suggested implementation (if possible)</li>
</ul>
</li>
</ul>
<p>Contributions (PRs) are welcome! 🎉 Follow the repo’s guidelines for code submissions.</p>
<h2 id="does-openmadness-support-asynchronous-operations" tabindex="-1"><a class="header-anchor" href="#does-openmadness-support-asynchronous-operations"><span>Does OpenMadness support asynchronous operations?</span></a></h2>
<p>OpenMadness is primarily designed for synchronous array and math operations. If you need to handle asynchronous data (e.g., fetching data from an API), process the data after the promise resolves and then pass it to OpenMadness methods. For example: <code v-pre>fetch(url).then(data =&gt; OpenMadness.filter(data, condition))</code>.</p>
<h2 id="i-installed-openmadness-but-it-s-not-recognized-in-my-project-what-should-i-check" tabindex="-1"><a class="header-anchor" href="#i-installed-openmadness-but-it-s-not-recognized-in-my-project-what-should-i-check"><span>I installed OpenMadness, but it's not recognized in my project. What should I check?</span></a></h2>
<p>If OpenMadness isn’t recognized after installation, here are a few things to check:</p>
<ol>
<li>Check the installation path:</li>
</ol>
<p>Make sure you’ve installed the library in the correct project folder. Run:
<code v-pre>npm install openmadness</code></p>
<p>Then confirm that it appears in your <code v-pre>node_modules</code> directory and is listed in your <code v-pre>package.json</code>.</p>
<ol start="2">
<li>Check your import statement:</li>
</ol>
<p>Depending on how the library is structured, you might need to import it correctly. Try:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> openmadness <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'openmadness'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// For CommonJS</span></span>
<span class="line"><span class="token comment">// OR</span></span>
<span class="line"><span class="token keyword">import</span> openmadness <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span> <span class="token comment">// For ES Modules</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Also, ensure your runtime supports ES Modules if using import.</p>
<ol start="3">
<li>Check the module name and spelling:</li>
</ol>
<p>Ensure the import name matches the actual package or file name. Sometimes a typo like openmadnness (with an extra &quot;n&quot;) can cause issues.</p>
<ol start="4">
<li>Restart your development environment:</li>
</ol>
<p>Sometimes, your editor needs a restart to recognize new modules.</p>
</div></template>


