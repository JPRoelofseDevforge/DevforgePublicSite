import fs from 'node:fs';
import path from 'node:path';
import { policies } from './policy-content.mjs';

const root = path.resolve(import.meta.dirname, '..');
const homepagePath = path.join(root, 'dist/index.html');
const homepage = fs.readFileSync(homepagePath, 'utf8');
const headShared = homepage.match(/  <link rel="icon"[\s\S]*?  <script src="\/app.js" defer><\/script>/)[0];
const header = homepage.match(/  <header class="site-header">[\s\S]*?<\/header>/)[0].replaceAll('href="#"', 'href="/"').replaceAll('href="#', 'href="/#');
const footer = `  <footer class="site-footer"><div class="footer-identity"><a class="brand" href="/" aria-label="DevForge home"><span class="brand-symbol" aria-hidden="true">&lt;/&gt;</span>DevForge<span class="brand-period">.</span></a><span>© <span id="year">2026</span> DevForge. All rights reserved.</span></div><nav class="footer-policies" aria-label="Legal policies">${policies.map(p=>`<a href="/${p.slug}/">${p.label}</a>`).join('')}</nav><a class="footer-top" href="#">Back to top ↑</a></footer>`;
const sources = {
  terms: [['Consumer Protection Act', 'https://www.gov.za/documents/consumer-protection-act'], ['Electronic Communications and Transactions Act', 'https://www.gov.za/documents/electronic-communications-and-transactions-act']],
  privacy: [['Protection of Personal Information Act', 'https://www.justice.gov.za/legislation/acts/2013-004.pdf'], ['POPIA request forms', 'https://inforegulator.org.za/popia-forms/'], ['Information Regulator', 'https://inforegulator.org.za/']],
  refunds: [['Consumer Protection Act', 'https://www.gov.za/sites/default/files/gcis_document/201409/321864670.pdf'], ['ECTA: consumer protections', 'https://www.gov.za/sites/default/files/gcis_document/201409/a25-02.pdf'], ['CPA Regulations', 'https://www.gov.za/sites/default/files/gcis_document/201409/34180rg9515gon293.pdf']]
};
for (const policy of policies) {
  const url = `https://devforge-next.adored-gnome-3899.chatgpt.site/${policy.slug}/`;
  const html = `<!doctype html>
<html lang="en-ZA">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#0a0d0c">
  <meta name="robots" content="noindex">
  <title>${policy.title} | DevForge</title>
  <meta name="description" content="${policy.description}">
  <meta property="og:title" content="${policy.title} | DevForge">
  <meta property="og:description" content="${policy.description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <link rel="canonical" href="${url}">
${headShared}
  <link rel="stylesheet" href="/legal.css">
  <script src="/legal.js" defer></script>
  <noscript><style>.menu-toggle{display:none!important}@media(max-width:700px){.site-header{height:auto;min-height:80px;flex-wrap:wrap;padding-top:20px}.mobile-nav[hidden]{display:flex!important;position:static;flex-direction:row;flex-wrap:wrap;width:100%;padding-inline:0}}</style></noscript>
</head>
<body class="legal-page">
  <a class="skip-link" href="#main">Skip to policy</a>
${header}
  <main id="main">
    <div class="legal-hero">
      <a class="legal-back" href="/">← Back to DevForge</a>
      <div class="eyebrow section-label"><span>${policy.number} /</span> OUR POLICIES</div>
      <h1>${policy.title}</h1>
      <p>${policy.description}</p>
      <div class="legal-meta"><span class="draft-badge">REVIEW DRAFT</span><span>Prepared <time datetime="2026-09-14">14 September 2026</time></span><span>South Africa</span></div>
      <nav class="policy-switcher" aria-label="Policy pages">${policies.map(p=>`<a href="/${p.slug}/"${p.slug===policy.slug?' aria-current="page"':''}>${p.label}<span aria-hidden="true">↗</span></a>`).join('')}</nav>
    </div>
    <div class="legal-layout">
      <aside class="legal-sidebar"><details class="policy-contents" open><summary>On this page <span aria-hidden="true">⌄</span></summary><nav aria-label="On this page">${policy.sections.map((s,i)=>`<a href="#${s[0]}"><span>${String(i+1).padStart(2,'0')}</span>${s[1]}</a>`).join('')}</nav></details><div class="policy-help"><span class="eyebrow">LET’S TALK</span><p>Need clarity on a policy?</p><a href="mailto:peter@devforge.co.za">Contact Peter ↗</a><a href="mailto:jp@devforge.co.za">Contact JP ↗</a></div></aside>
      <article class="policy-document" aria-label="${policy.title}">
        <div class="policy-introduction"><span class="eyebrow">CLEAR TERMS. STRONGER PARTNERSHIPS.</span><p>${policy.summary}</p></div>
        <div class="review-note"><strong>Prepared for review.</strong><p>Company identity, privacy administration and existing commercial terms still need confirmation before adoption. This draft does not amend a signed client agreement.</p></div>
        ${policy.sections.map((s,i)=>`<section class="policy-section" id="${s[0]}"><h2><span>${String(i+1).padStart(2,'0')}</span>${s[1]}</h2>${s[2]}</section>`).join('\n        ')}
        <div class="policy-sources"><h2>Related legislation & resources</h2><p>Official sources used when preparing this draft.</p><ul>${sources[policy.slug].map(s=>`<li><a href="${s[1]}">${s[0]} <span aria-hidden="true">↗</span></a></li>`).join('')}</ul></div>
        <div class="policy-end"><span>DEVFORGE / ${policy.title.toUpperCase()}</span><a href="#main">Back to top ↑</a></div>
      </article>
    </div>
  </main>
${footer}
</body>
</html>
`;
  const directory = path.join(root, 'dist', policy.slug);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), html);
}
fs.writeFileSync(homepagePath, homepage.replace(/  <footer class="site-footer">[\s\S]*?<\/footer>/, footer));
console.log('Generated three policy pages and updated the shared footer.');
