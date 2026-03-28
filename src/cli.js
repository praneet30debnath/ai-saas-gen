#!/usr/bin/env node

const { generate, listVerticals } = require('./index');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const flags = {};
const positional = [];

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--help' || args[i] === '-h') { flags.help = true; }
  else if (args[i] === '--list' || args[i] === '-l') { flags.list = true; }
  else if (args[i] === '--budget' || args[i] === '-b') { flags.budget = args[++i]; }
  else if (args[i] === '--audience' || args[i] === '-a') { flags.audience = args[++i]; }
  else if (args[i] === '--problem' || args[i] === '-p') { flags.problem = args[++i]; }
  else if (args[i] === '--region' || args[i] === '-r') { flags.region = args[++i]; }
  else if (args[i] === '--output' || args[i] === '-o') { flags.output = args[++i]; }
  else if (args[i] === '--format' || args[i] === '-f') { flags.format = args[++i]; }
  else if (args[i] === '--json') { flags.format = 'json'; }
  else if (args[i] === '--markdown' || args[i] === '--md') { flags.format = 'markdown'; }
  else if (args[i] === '--html') { flags.format = 'html'; }
  else if (!args[i].startsWith('-')) { positional.push(args[i]); }
}

const BOLD = '\x1b[1m';
const DIM = '\x1b[2m';
const BLUE = '\x1b[34m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const MAGENTA = '\x1b[35m';
const RESET = '\x1b[0m';

if (flags.help) {
  console.log(`
${BOLD}ai-saas-gen${RESET} — Generate a complete vertical SaaS business plan from a niche

${BOLD}USAGE${RESET}
  npx ai-saas-gen "pet grooming"
  npx ai-saas-gen "dental" --budget funded --format json
  npx ai-saas-gen --list

${BOLD}OPTIONS${RESET}
  ${GREEN}-b, --budget${RESET}    Budget tier: bootstrap, seed, funded, enterprise ${DIM}(default: seed)${RESET}
  ${GREEN}-a, --audience${RESET}  Target audience ${DIM}(default: auto-detected)${RESET}
  ${GREEN}-p, --problem${RESET}   Key problem to solve ${DIM}(default: auto-detected)${RESET}
  ${GREEN}-r, --region${RESET}    Market region: global, us, eu, asia, latam, mena ${DIM}(default: global)${RESET}
  ${GREEN}-o, --output${RESET}    Output directory ${DIM}(default: ./<name>-saas-plan/)${RESET}
  ${GREEN}-f, --format${RESET}    Output format: pretty, json, markdown, html ${DIM}(default: pretty)${RESET}
  ${GREEN}--json${RESET}          Shorthand for --format json
  ${GREEN}--md${RESET}            Shorthand for --format markdown
  ${GREEN}--html${RESET}          Shorthand for --format html
  ${GREEN}-l, --list${RESET}      List all known industry verticals
  ${GREEN}-h, --help${RESET}      Show this help

${BOLD}EXAMPLES${RESET}
  ${DIM}# Generate a SaaS plan for pet grooming${RESET}
  npx ai-saas-gen "pet grooming"

  ${DIM}# Output as JSON${RESET}
  npx ai-saas-gen "dental" --json

  ${DIM}# Save all outputs to a directory${RESET}
  npx ai-saas-gen "fitness" -o my-fitness-saas/

  ${DIM}# Funded startup with custom audience${RESET}
  npx ai-saas-gen "logistics" -b funded -a "Enterprise shippers"

${BOLD}OUTPUT${RESET}
  When using -o/--output, generates:
    plan.json          Complete business plan data
    plan.md            Markdown business plan document
    landing.html       Ready-to-deploy landing page
    deploy-guide.md    Step-by-step deployment guide

${BOLD}25 INDUSTRIES${RESET} with built-in market data. Any niche works — unknown
  niches get smart defaults. Run ${GREEN}--list${RESET} to see known verticals.
`);
  process.exit(0);
}

if (flags.list) {
  const verticals = listVerticals();
  console.log(`\n${BOLD}Known Industry Verticals${RESET} (${verticals.length})\n`);
  console.log(`${'Industry'.padEnd(22)} ${'Market'.padEnd(10)} ${'CAGR'.padEnd(8)} Competitors`);
  console.log(`${'─'.repeat(22)} ${'─'.repeat(10)} ${'─'.repeat(8)} ${'─'.repeat(40)}`);
  verticals.forEach(v => {
    console.log(`${CYAN}${v.name.padEnd(22)}${RESET} ${v.market.padEnd(10)} ${GREEN}${v.cagr.padEnd(8)}${RESET} ${DIM}${v.competitors.join(', ')}${RESET}`);
  });
  console.log(`\n${DIM}Any niche works — unknown niches get smart defaults.${RESET}\n`);
  process.exit(0);
}

const niche = positional.join(' ');
if (!niche) {
  console.error(`${BOLD}Error:${RESET} Please provide a niche.\n`);
  console.error(`Usage: npx ai-saas-gen "pet grooming"`);
  console.error(`       npx ai-saas-gen --help`);
  process.exit(1);
}

const plan = generate(niche, {
  budget: flags.budget || 'seed',
  audience: flags.audience,
  problem: flags.problem,
  region: flags.region || 'global',
});

const format = flags.format || 'pretty';

if (format === 'json') {
  const output = {
    business: plan.business,
    features: plan.features,
    techStack: plan.techStack,
    pricing: plan.pricing,
    competitive: plan.competitive,
  };
  console.log(JSON.stringify(output, null, 2));
} else if (format === 'markdown' || format === 'md') {
  console.log(plan.markdown);
} else if (format === 'html') {
  console.log(plan.landingHTML);
} else {
  // Pretty terminal output
  const b = plan.business;
  console.log(`
${BOLD}${MAGENTA}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}
${BOLD}  ${b.name}${RESET} — ${b.niche} SaaS Business Plan
${BOLD}${MAGENTA}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}

${BOLD}${BLUE}EXECUTIVE SUMMARY${RESET}
  ${b.positioning}

${BOLD}${BLUE}MARKET${RESET}
  TAM: ${GREEN}${b.tam}${RESET}  |  CAGR: ${GREEN}${b.cagr}${RESET}  |  Region: ${b.region}  |  Budget: ${b.budget}

${BOLD}${BLUE}THE PROBLEM${RESET}
  ${b.pain}

${BOLD}${BLUE}COMPETITORS${RESET}
  ${b.competitors.map(c => `${YELLOW}${c}${RESET}`).join('  |  ')}

${BOLD}${BLUE}COMPETITIVE MOAT${RESET}
${b.moat.map(m => `  ${GREEN}✓${RESET} ${m}`).join('\n')}

${BOLD}${BLUE}FEATURES${RESET} (${plan.features.length} total)
${plan.features.map(f => {
  const badge = f.priority === 'must' ? `${BLUE}[MUST]${RESET}` : f.priority === 'should' ? `${GREEN}[SHOULD]${RESET}` : `${YELLOW}[NICE]${RESET}`;
  return `  ${badge} ${BOLD}${f.name}${RESET} — ${DIM}${f.desc}${RESET}  ${DIM}(Phase ${f.phase}, Effort ${f.effort}/5)${RESET}`;
}).join('\n')}

${BOLD}${BLUE}TECH STACK${RESET}
  Frontend:  ${CYAN}${plan.techStack.frontend}${RESET}
  Backend:   ${CYAN}${plan.techStack.backend}${RESET}
  Database:  ${CYAN}${plan.techStack.db}${RESET}
  Hosting:   ${CYAN}${plan.techStack.hosting}${RESET}
  Auth:      ${CYAN}${plan.techStack.auth}${RESET}
  Payments:  ${CYAN}${plan.techStack.payments}${RESET}
  Extras:    ${DIM}${plan.techStack.extras.join(', ')}${RESET}

${BOLD}${BLUE}PRICING${RESET}
${plan.pricing.map(p => {
  const star = p.highlighted ? ` ${MAGENTA}★ RECOMMENDED${RESET}` : '';
  return `  ${BOLD}${p.name}${RESET} — ${GREEN}${p.price}${p.period}${RESET}${star}\n${p.features.map(f => `    • ${f}`).join('\n')}`;
}).join('\n\n')}

${BOLD}${BLUE}REVENUE STREAMS${RESET}
${b.revenueStreams.map(r => `  ${r.pct.padEnd(4)} ${BOLD}${r.stream}${RESET} — ${DIM}${r.desc}${RESET}`).join('\n')}

${BOLD}${BLUE}KEY METRICS${RESET}
  Target MRR:    ${GREEN}${b.kpis.targetMRR}${RESET}
  Target Users:  ${GREEN}${b.kpis.targetUsers}${RESET}
  Churn Target:  ${b.kpis.churnTarget}
  LTV:           ${GREEN}${b.kpis.ltv}${RESET}
  CAC:           ${b.kpis.cac}

${BOLD}${MAGENTA}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}
${DIM}  Generated by ai-saas-gen | https://github.com/kurtnebiev-elvis4/ai-saas-gen${RESET}
`);
}

// Save to directory if --output specified
if (flags.output) {
  const dir = flags.output;
  fs.mkdirSync(dir, { recursive: true });

  const jsonData = {
    business: plan.business,
    features: plan.features,
    techStack: plan.techStack,
    pricing: plan.pricing,
    competitive: plan.competitive,
  };

  fs.writeFileSync(path.join(dir, 'plan.json'), JSON.stringify(jsonData, null, 2));
  fs.writeFileSync(path.join(dir, 'plan.md'), plan.markdown);
  fs.writeFileSync(path.join(dir, 'landing.html'), plan.landingHTML);
  fs.writeFileSync(path.join(dir, 'deploy-guide.md'), plan.deployGuide);

  console.log(`\n${GREEN}✓${RESET} Saved to ${BOLD}${dir}/${RESET}`);
  console.log(`  ${DIM}plan.json${RESET}       — Business plan data`);
  console.log(`  ${DIM}plan.md${RESET}         — Markdown document`);
  console.log(`  ${DIM}landing.html${RESET}    — Landing page`);
  console.log(`  ${DIM}deploy-guide.md${RESET} — Deployment guide\n`);
}
