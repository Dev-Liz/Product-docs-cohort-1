<template><div><h1 id="contributing-to-open-madness-📘" tabindex="-1"><a class="header-anchor" href="#contributing-to-open-madness-📘"><span>Contributing to Open Madness 📘</span></a></h1>
<p>Thank you for your interest in contributing to <strong>Open Madness</strong>! Whether you're spotting typos, improving docs, or adding new features, your help is greatly appreciated. 😊</p>
<h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents"><span>Table of Contents</span></a></h2>
<ul>
<li><a href="#how-can-i-contribute">How Can I Contribute?</a></li>
<li><a href="#good-first-issues--where-to-look">Good First Issues &amp; Where to Look</a></li>
<li><a href="#reporting-bugs-or-typos">Reporting Bugs or Typos</a></li>
<li><a href="#submitting-changes-pull-requests">Submitting Changes (Pull Requests)</a></li>
<li><a href="#development-setup">Development Setup</a></li>
<li><a href="#coding--formatting-standards">Coding &amp; Formatting Standards</a></li>
<li><a href="#commit-message-guidelines">Commit Message Guidelines</a></li>
<li><a href="#review-process">Review Process</a></li>
<li><a href="#non%E2%80%91code-contributions">Non‑Code Contributions</a></li>
<li><a href="#code-of-conduct">Code of Conduct</a></li>
<li><a href="#contact--communication">Contact &amp; Communication</a></li>
</ul>
<hr>
<h2 id="how-can-i-contribute" tabindex="-1"><a class="header-anchor" href="#how-can-i-contribute"><span>How Can I Contribute?</span></a></h2>
<p>There are many ways to help:</p>
<ul>
<li>Fixing typos or documentation errors</li>
<li>Adding examples, tutorials, or clarifying explanations</li>
<li>Implementing missing features or expanding existing ones</li>
<li>Proposing improvements to layout, navigation, or style</li>
</ul>
<p>We welcome and value all contributions—small fixes are just as important as large additions.</p>
<hr>
<h2 id="good-first-issues-where-to-look" tabindex="-1"><a class="header-anchor" href="#good-first-issues-where-to-look"><span>Good First Issues &amp; Where to Look</span></a></h2>
<p>To help you get started, issues tagged <strong>good first issue</strong> or <strong>help wanted</strong> are ideal. Check the issue tracker and comment if you'd like to take one on.</p>
<hr>
<h2 id="reporting-bugs-or-typos" tabindex="-1"><a class="header-anchor" href="#reporting-bugs-or-typos"><span>Reporting Bugs or Typos</span></a></h2>
<p>Please open an <a href="URL-to-issues">Issue</a> with:</p>
<ul>
<li>A descriptive title</li>
<li>Steps to reproduce the bug or typo</li>
<li>Suggested correction or documentation link (if applicable)</li>
</ul>
<p>Use the issue template if available.</p>
<hr>
<h2 id="submitting-changes-pull-requests" tabindex="-1"><a class="header-anchor" href="#submitting-changes-pull-requests"><span>Submitting Changes (Pull Requests)</span></a></h2>
<ol>
<li>Fork the repo</li>
<li>Create a new branch: <code v-pre>git checkout -b my-feature</code></li>
<li>Make commits with clear, concise messages (see guidelines below)</li>
<li>Push to your fork: <code v-pre>git push origin my-feature</code></li>
<li>Open a PR against the <code v-pre>main</code> branch</li>
</ol>
<p>PRs should reference related issues (e.g., “Fixes #123”) and include a helpful description. Expect review feedback and please respond positively to suggestions.</p>
<hr>
<h2 id="development-setup" tabindex="-1"><a class="header-anchor" href="#development-setup"><span>Development Setup</span></a></h2>
<p>To work on the docs locally:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> clone https://github.com/YourOrg/open-madness-docs.git</span>
<span class="line"><span class="token builtin class-name">cd</span> open-madness-docs</span>
<span class="line"><span class="token comment"># If built with a static-site generator:</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"><span class="token function">npm</span> run dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Adjust with your specific build or test setup.</p>
<hr>
<h2 id="coding-formatting-standards" tabindex="-1"><a class="header-anchor" href="#coding-formatting-standards"><span>Coding &amp; Formatting Standards</span></a></h2>
<ul>
<li>Markdown files: follow <a href="https://commonmark.org/" target="_blank" rel="noopener noreferrer">CommonMark</a> conventions</li>
<li>Use meaningful headings and consistent structure</li>
<li>Run a linter or formatter (e.g., Prettier) if configured</li>
</ul>
<hr>
<h2 id="commit-message-guidelines" tabindex="-1"><a class="header-anchor" href="#commit-message-guidelines"><span>Commit Message Guidelines</span></a></h2>
<p>Write commit messages that are clear and descriptive. Use this format:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;type>: Short summary</span>
<span class="line"></span>
<span class="line">Detailed explanation, if needed.</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Types</strong> include: <code v-pre>feat</code>, <code v-pre>fix</code>, <code v-pre>docs</code>, <code v-pre>style</code>, <code v-pre>refactor</code>, <code v-pre>test</code>, <code v-pre>chore</code>.</p>
<p>Example:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">docs: correct typo in getting-started guide</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h2 id="review-process" tabindex="-1"><a class="header-anchor" href="#review-process"><span>Review Process</span></a></h2>
<ul>
<li>PRs will be reviewed in 1–2 weeks</li>
<li>You may be asked for changes—please don’t be discouraged!</li>
<li>Once approved, your PR will be merged and linked to the corresponding issue</li>
</ul>
<hr>
<h2 id="non‐code-contributions" tabindex="-1"><a class="header-anchor" href="#non‐code-contributions"><span>Non‑Code Contributions</span></a></h2>
<p>Contributions beyond code are welcome:</p>
<ul>
<li>📄 Writing or improving documentation, tutorials</li>
<li>🎨 Enhancing design, layout, or UX</li>
<li>🧪 Creating examples or test cases</li>
<li>📢 Sharing Open Madness with others</li>
</ul>
<p>Let us know how you'd like to help!</p>
<hr>
<h2 id="code-of-conduct" tabindex="-1"><a class="header-anchor" href="#code-of-conduct"><span>Code of Conduct</span></a></h2>
<p>Please follow our <a href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/" target="_blank" rel="noopener noreferrer">CODE_OF_CONDUCT.md</a> to help maintain a respectful, inclusive community.</p>
<hr>
<h2 id="contact-communication" tabindex="-1"><a class="header-anchor" href="#contact-communication"><span>Contact &amp; Communication</span></a></h2>
<p>Need help or want to suggest something?</p>
<ul>
<li>Join us on Discord/Slack: [invite link]</li>
<li>Post an issue with the <strong>discussion</strong> or <strong>help wanted</strong> label</li>
<li>Reach out to maintainers: wisdom@openmadness.com</li>
</ul>
<p>Let’s make Open Madness amazing—together!</p>
<hr>
<p><strong>Add to README.md</strong>: Under “Contributing” in your README, link to this file:<br>
<code v-pre>See [CONTRIBUTING.md](CONTRIBUTING.md) to get started contributing!</code></p>
</div></template>


