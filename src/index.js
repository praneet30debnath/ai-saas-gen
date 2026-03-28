/**
 * ai-saas-gen — Generate a complete vertical SaaS business plan from a niche.
 *
 * Usage:
 *   const { generate } = require('ai-saas-gen');
 *   const plan = generate('pet grooming', { budget: 'seed' });
 */

const { VERTICALS, FEATURE_DB, TECH_STACKS, PRICING_TEMPLATES } = require('./data');

const NAME_PREFIXES = ["Nova", "Apex", "Pulse", "Flux", "Vibe", "Core", "Sync", "Flow", "Forge", "Orbit", "Aura", "Nexus", "Peak", "Wave", "Zen"];
const NAME_SUFFIXES = ["ly", "fy", "io", "hub", "kit", "ops", "pad", "lab", "hq", "base", "go", "stack", "deck", "works", "pro"];

function findVertical(niche) {
  const n = niche.toLowerCase().trim();
  if (VERTICALS[n]) return { key: n, ...VERTICALS[n] };
  for (const [key, val] of Object.entries(VERTICALS)) {
    if (n.includes(key) || key.includes(n)) return { key, ...val };
  }
  for (const [key, val] of Object.entries(VERTICALS)) {
    if (key.split(/\s+/).some(w => n.includes(w))) return { key, ...val };
  }
  return null;
}

function generateName() {
  const p = NAME_PREFIXES[Math.floor(Math.random() * NAME_PREFIXES.length)];
  const s = NAME_SUFFIXES[Math.floor(Math.random() * NAME_SUFFIXES.length)];
  return p + s;
}

function generateBusinessModel(niche, options = {}) {
  const { audience, problem, region = "global", budget = "seed" } = options;
  const vertical = findVertical(niche);
  const name = generateName();
  const tam = vertical ? vertical.market : "$" + (Math.floor(Math.random() * 20) + 2) + "." + Math.floor(Math.random() * 9) + "B";
  const cagr = vertical ? vertical.cagr : (Math.floor(Math.random() * 15) + 5) + "." + Math.floor(Math.random() * 9) + "%";
  const pain = problem || (vertical ? vertical.pain : "Manual processes, lack of visibility, poor coordination");
  const competitors = vertical ? vertical.competitors : ["Generic Tool A", "Generic Tool B", "Spreadsheets"];

  return {
    name, niche, tam, cagr, pain, competitors, region, budget,
    audience: audience || "Small to medium businesses in " + niche,
    positioning: `${name} is the modern, AI-powered ${niche} management platform that eliminates ${pain.split(",")[0].toLowerCase()} and helps ${(audience || "businesses").toLowerCase()} save 10+ hours per week.`,
    moat: [
      "Vertical-specific AI trained on " + niche + " data patterns",
      "All-in-one platform reduces tool sprawl (replaces 3-5 tools)",
      "Mobile-first design for on-the-go " + niche + " professionals",
      "Privacy-first: data never sold, GDPR/CCPA compliant",
    ],
    revenueStreams: [
      { stream: "SaaS Subscriptions", pct: "70%", desc: "Monthly/annual recurring revenue" },
      { stream: "Transaction Fees", pct: "15%", desc: "Small % on payments processed" },
      { stream: "API Access", pct: "10%", desc: "Usage-based API for integrations" },
      { stream: "Marketplace", pct: "5%", desc: "Third-party plugin/integration fees" },
    ],
    kpis: {
      targetMRR: budget === "bootstrap" ? "$10K" : budget === "seed" ? "$50K" : budget === "funded" ? "$500K" : "$2M",
      targetUsers: budget === "bootstrap" ? "500" : budget === "seed" ? "2,000" : budget === "funded" ? "10,000" : "50,000",
      churnTarget: "< 5% monthly",
      ltv: budget === "bootstrap" ? "$580" : budget === "seed" ? "$1,200" : budget === "funded" ? "$3,600" : "$12,000",
      cac: budget === "bootstrap" ? "$50" : budget === "seed" ? "$120" : budget === "funded" ? "$300" : "$800",
    },
  };
}

function generateFeatures(niche) {
  const vertical = findVertical(niche);
  if (!vertical || !vertical.features) {
    return Object.values(FEATURE_DB).slice(0, 8);
  }
  return vertical.features.map(fKey => {
    const f = FEATURE_DB[fKey];
    return f ? { ...f, key: fKey } : { key: fKey, name: fKey.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()), desc: "Core feature for this vertical", priority: "should", phase: 1, effort: 3 };
  });
}

function generateCompetitiveAnalysis(business, features) {
  const competitors = business.competitors;
  const featureNames = features.slice(0, 6).map(f => f.name);
  const rows = featureNames.map(fname => {
    const row = { feature: fname };
    competitors.forEach(c => {
      row[c] = Math.random() > 0.3 ? (Math.random() > 0.5 ? "full" : "partial") : "no";
    });
    row[business.name] = "full";
    return row;
  });
  ["AI-Powered Insights", "No-Code Customization", "Privacy-First (No Data Selling)", "Mobile-First UX"].forEach(diff => {
    const row = { feature: diff };
    competitors.forEach(c => { row[c] = Math.random() > 0.7 ? "partial" : "no"; });
    row[business.name] = "full";
    rows.push(row);
  });
  return { competitors: [...competitors, business.name], rows };
}

function generateLandingHTML(business, features, pricing) {
  const phase1 = features.filter(f => f.phase === 1).slice(0, 6);
  const pricingHTML = pricing.map(p => `
    <div style="background:${p.highlighted ? 'linear-gradient(135deg,#3b82f6,#8b5cf6)' : '#1a1a1a'};border-radius:16px;padding:32px;flex:1;min-width:240px;${p.highlighted ? 'transform:scale(1.05);color:#fff' : 'border:1px solid #333;color:#e5e5e5'}">
      <div style="font-size:.9rem;opacity:.8">${p.name}</div>
      <div style="font-size:2.5rem;font-weight:800;margin:8px 0">${p.price}<span style="font-size:.9rem;font-weight:400">${p.period}</span></div>
      <ul style="list-style:none;padding:0;margin:16px 0;font-size:.9rem;line-height:2">${p.features.map(f => '<li>&#10003; ' + f + '</li>').join('')}</ul>
      <a href="#" style="display:block;text-align:center;padding:12px;border-radius:100px;font-weight:600;${p.highlighted ? 'background:#fff;color:#3b82f6' : 'background:#3b82f6;color:#fff'};text-decoration:none">${p.cta}</a>
    </div>`).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${business.name} — ${business.niche} Management Platform</title>
<meta name="description" content="${business.positioning}">
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#0a0a0a;color:#e5e5e5;line-height:1.6}
.container{max-width:1100px;margin:0 auto;padding:0 24px}
</style>
</head>
<body>
<section style="padding:120px 0 80px;text-align:center">
<div class="container">
  <p style="color:#888;font-size:.9rem;margin-bottom:16px">The modern ${business.niche} platform</p>
  <h1 style="font-size:clamp(2.5rem,5vw,4rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;margin-bottom:16px">
    Run your <span style="background:linear-gradient(135deg,#3b82f6,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent">${business.niche}</span> business<br>like a tech company
  </h1>
  <p style="color:#888;font-size:1.1rem;max-width:600px;margin:0 auto 32px">${business.positioning}</p>
  <a href="#pricing" style="display:inline-block;padding:14px 32px;background:linear-gradient(135deg,#3b82f6,#8b5cf6);color:#fff;border-radius:100px;font-weight:600;text-decoration:none">Start Free Trial</a>
</div>
</section>
<section style="padding:80px 0">
<div class="container">
  <h2 style="text-align:center;font-size:2rem;margin-bottom:48px">Everything you need to grow</h2>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:24px">
    ${phase1.map(f => `<div style="background:#111;border:1px solid #222;border-radius:12px;padding:24px"><h3 style="font-size:1.1rem;margin-bottom:8px">${f.name}</h3><p style="color:#888;font-size:.9rem">${f.desc}</p></div>`).join('')}
  </div>
</div>
</section>
<section id="pricing" style="padding:80px 0">
<div class="container">
  <h2 style="text-align:center;font-size:2rem;margin-bottom:48px">Simple, transparent pricing</h2>
  <div style="display:flex;gap:20px;flex-wrap:wrap;justify-content:center">${pricingHTML}</div>
</div>
</section>
<section style="padding:80px 0;text-align:center">
<div class="container">
  <h2 style="font-size:2rem;margin-bottom:16px">Ready to modernize your ${business.niche} business?</h2>
  <p style="color:#888;margin-bottom:32px">Join ${business.kpis.targetUsers}+ businesses already using ${business.name}</p>
  <a href="#" style="display:inline-block;padding:14px 32px;background:linear-gradient(135deg,#3b82f6,#8b5cf6);color:#fff;border-radius:100px;font-weight:600;text-decoration:none">Get Started Free</a>
</div>
</section>
</body>
</html>`;
}

function generateDeployGuide(business, techStack, budget) {
  const name = business.name.toLowerCase();
  if (budget === "bootstrap") {
    return `# Deploy ${business.name} — Bootstrap Guide

## 1. Project Setup
\`\`\`bash
npx create-react-app ${name}-app
cd ${name}-app
npm install firebase tailwindcss
\`\`\`

## 2. Firebase Setup
\`\`\`bash
npm install -g firebase-tools
firebase login
firebase init hosting firestore auth
\`\`\`

## 3. Deploy
\`\`\`bash
npm run build
firebase deploy
\`\`\`

Estimated Cost: $0-25/month (Firebase free tier)
`;
  }
  return `# Deploy ${business.name} — ${budget.charAt(0).toUpperCase() + budget.slice(1)} Guide

## 1. Project Setup
\`\`\`bash
npx create-next-app@latest ${name}-app --typescript --tailwind --app
cd ${name}-app
npm install @supabase/supabase-js stripe next-auth
\`\`\`

## 2. Database (Supabase)
\`\`\`bash
npx supabase init
npx supabase db push
\`\`\`

## 3. Deploy to Vercel
\`\`\`bash
npx vercel --prod
\`\`\`

Estimated Monthly Cost: ~$50/month + transaction fees
`;
}

function generateMarkdown(plan) {
  const { business, features, techStack, pricing, competitive, deployGuide } = plan;

  const featuresMd = features.map(f => {
    const badge = f.priority === "must" ? "MUST" : f.priority === "should" ? "SHOULD" : "NICE";
    return `| ${f.name} | ${f.desc} | ${badge} | Phase ${f.phase} | ${f.effort}/5 |`;
  }).join("\n");

  const compRows = competitive.rows.map(r => {
    const cells = competitive.competitors.map(c => {
      const v = r[c];
      return v === "full" ? "Yes" : v === "partial" ? "Partial" : "No";
    });
    return `| ${r.feature} | ${cells.join(" | ")} |`;
  }).join("\n");

  const compHeader = competitive.competitors.map(c => c).join(" | ");
  const compSep = competitive.competitors.map(() => "---").join(" | ");

  return `# ${business.name} — ${business.niche} SaaS Business Plan

## Executive Summary

**${business.positioning}**

- **Market Size:** ${business.tam} (CAGR: ${business.cagr})
- **Target Audience:** ${business.audience}
- **Region:** ${business.region}
- **Budget Tier:** ${business.budget}

## The Problem

${business.pain}

## Competitive Moat

${business.moat.map(m => "- " + m).join("\n")}

## Features

| Feature | Description | Priority | Phase | Effort |
|---------|-------------|----------|-------|--------|
${featuresMd}

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | ${techStack.frontend} |
| Backend | ${techStack.backend} |
| Database | ${techStack.db} |
| Hosting | ${techStack.hosting} |
| Auth | ${techStack.auth} |
| Payments | ${techStack.payments} |

Extras: ${techStack.extras.join(", ")}

## Pricing

${pricing.map(p => `### ${p.name} — ${p.price}${p.period}\n${p.features.map(f => "- " + f).join("\n")}`).join("\n\n")}

## Revenue Streams

${business.revenueStreams.map(r => `- **${r.stream}** (${r.pct}): ${r.desc}`).join("\n")}

## KPIs

| Metric | Target |
|--------|--------|
| Target MRR | ${business.kpis.targetMRR} |
| Target Users | ${business.kpis.targetUsers} |
| Churn Rate | ${business.kpis.churnTarget} |
| LTV | ${business.kpis.ltv} |
| CAC | ${business.kpis.cac} |

## Competitive Analysis

| Feature | ${compHeader} |
|---------|${compSep}|
${compRows}

## Deployment

${deployGuide}

---
Generated by [ai-saas-gen](https://github.com/kurtnebiev-elvis4/ai-saas-gen)
`;
}

function generate(niche, options = {}) {
  const budget = options.budget || "seed";
  const business = generateBusinessModel(niche, options);
  const features = generateFeatures(niche);
  const techStack = TECH_STACKS[budget] || TECH_STACKS.seed;
  const pricing = PRICING_TEMPLATES[budget] || PRICING_TEMPLATES.seed;
  const competitive = generateCompetitiveAnalysis(business, features);
  const landingHTML = generateLandingHTML(business, features, pricing);
  const deployGuide = generateDeployGuide(business, techStack, budget);

  const plan = { business, features, techStack, pricing, competitive, landingHTML, deployGuide };
  plan.markdown = generateMarkdown(plan);

  return plan;
}

function listVerticals() {
  return Object.entries(VERTICALS).map(([name, data]) => ({
    name,
    market: data.market,
    cagr: data.cagr,
    pain: data.pain,
    competitors: data.competitors,
  }));
}

module.exports = { generate, listVerticals, findVertical, VERTICALS };
