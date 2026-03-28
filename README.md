# ai-saas-gen

Generate a complete vertical SaaS business plan from a niche description. No API keys needed. Runs locally.

```
npx ai-saas-gen "pet grooming"
```

## What You Get

From a single niche input, you get:

- **Business Model** — name, positioning, TAM, CAGR, competitive moat
- **Features** — prioritized feature list (must/should/nice) with effort estimates and phases
- **Tech Stack** — full stack recommendation based on budget tier
- **Pricing** — tiered pricing model (Free → Pro → Business → Enterprise)
- **Competitive Analysis** — feature comparison matrix vs real incumbents
- **Landing Page** — ready-to-deploy HTML landing page
- **Deploy Guide** — step-by-step deployment instructions

## 25 Built-In Industries

Pet Grooming, Real Estate, Fitness, Dental, Restaurant, Legal, Education, Healthcare, Construction, Salon, Accounting, Logistics, Agriculture, Recruiting, Event Management, Property Management, Veterinary, Auto Repair, Photography, Nonprofit, Cleaning Services, Therapy, Church, E-Commerce, Home Services

Each includes real market data, competitors, pain points, and industry-specific features. **Any niche works** — unknown niches get smart defaults.

## Usage

### Quick Start

```bash
# Pretty terminal output
npx ai-saas-gen "pet grooming"

# List all known industries
npx ai-saas-gen --list
```

### Output Formats

```bash
# JSON (pipe to jq, use in scripts)
npx ai-saas-gen "dental" --json

# Markdown (paste into docs, Notion, GitHub)
npx ai-saas-gen "fitness" --md

# HTML landing page (open in browser)
npx ai-saas-gen "restaurant" --html > landing.html
```

### Save All Outputs

```bash
npx ai-saas-gen "logistics" -o my-logistics-saas/
```

Creates:
```
my-logistics-saas/
  plan.json          # Complete business plan data
  plan.md            # Markdown business plan document
  landing.html       # Ready-to-deploy landing page
  deploy-guide.md    # Step-by-step deployment guide
```

### Options

| Flag | Description | Default |
|------|-------------|---------|
| `-b, --budget` | Budget tier: `bootstrap`, `seed`, `funded`, `enterprise` | `seed` |
| `-a, --audience` | Target audience | Auto-detected |
| `-p, --problem` | Key problem to solve | Auto-detected |
| `-r, --region` | Market: `global`, `us`, `eu`, `asia`, `latam`, `mena` | `global` |
| `-o, --output` | Output directory | stdout |
| `-f, --format` | Format: `pretty`, `json`, `markdown`, `html` | `pretty` |
| `-l, --list` | List all known verticals | |

### Examples

```bash
# Funded startup targeting enterprise
npx ai-saas-gen "logistics" -b funded -a "Enterprise shippers" -r us

# Bootstrap with custom problem statement
npx ai-saas-gen "photography" -b bootstrap -p "Client gallery sharing is terrible"

# Generate everything for a pitch deck
npx ai-saas-gen "healthcare" -b seed -o healthcare-pitch/
```

## Programmatic API

```javascript
const { generate, listVerticals } = require('ai-saas-gen');

// Generate a plan
const plan = generate('dental', { budget: 'seed', region: 'us' });

console.log(plan.business.name);        // "Nexusfy"
console.log(plan.business.tam);         // "$3.7B"
console.log(plan.features);             // [{name, desc, priority, phase, effort}, ...]
console.log(plan.techStack);            // {frontend, backend, db, hosting, auth, payments}
console.log(plan.pricing);              // [{name, price, period, features}, ...]
console.log(plan.competitive);          // {competitors, rows}
console.log(plan.landingHTML);           // Full HTML string
console.log(plan.markdown);             // Full Markdown document

// List known verticals
const verticals = listVerticals();
// [{name, market, cagr, pain, competitors}, ...]
```

## Why This Exists

There are many AI business plan generators ($10-50/mo). There are many SaaS boilerplates. But there's nothing that combines **vertical SaaS business intelligence** with **instant, offline generation** of a complete plan + landing page + deploy guide.

This tool is for:
- **Founders** exploring niche SaaS ideas
- **Indie hackers** who want to validate before building
- **Agencies** pitching vertical SaaS solutions to clients
- **Hackathon teams** who need a business plan in 5 minutes

## Zero Dependencies

No API keys. No accounts. No network requests. Runs entirely locally using a curated knowledge base of 25 industry verticals with real market data.

## License

MIT
