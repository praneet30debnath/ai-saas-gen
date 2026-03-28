<p align="center">
  <h1 align="center">ai-saas-gen</h1>
  <p align="center"><strong>Generate a complete vertical SaaS business plan in seconds. No API keys. No signup. Runs locally.</strong></p>
</p>

<p align="center">
  <a href="https://github.com/kurtnebiev-elvis4/ai-saas-gen/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT"></a>
  <a href="https://github.com/kurtnebiev-elvis4/ai-saas-gen"><img src="https://img.shields.io/badge/node-%3E%3D16-brightgreen.svg" alt="Node >= 16"></a>
  <a href="https://github.com/kurtnebiev-elvis4/ai-saas-gen"><img src="https://img.shields.io/badge/dependencies-0-success.svg" alt="Zero Dependencies"></a>
  <a href="https://tool-factory-prod.web.app/saas-generator/"><img src="https://img.shields.io/badge/demo-live-ff69b4.svg" alt="Live Demo"></a>
</p>

---

```bash
npx ai-saas-gen "pet grooming"
```

> **Try the web version:** [tool-factory-prod.web.app/saas-generator](https://tool-factory-prod.web.app/saas-generator/) — no install needed

---

## What You Get

From a single niche input, you get a **complete SaaS business plan**:

| Output | Description |
|--------|-------------|
| **Business Model** | Name, positioning, TAM, CAGR, competitive moat, KPIs |
| **Feature Roadmap** | Prioritized features (must/should/nice) with effort estimates and phases |
| **Tech Stack** | Full stack recommendation adapted to your budget tier |
| **Pricing Model** | Tiered pricing (Free / Pro / Business / Enterprise) |
| **Competitive Analysis** | Feature comparison matrix vs real industry incumbents |
| **Landing Page** | Ready-to-deploy HTML landing page |
| **Deploy Guide** | Step-by-step deployment instructions |
| **Financial Projections** | 5-year revenue/cost model with unit economics |

## Demo

```
$ npx ai-saas-gen "dental"

  ╔══════════════════════════════════════════════╗
  ║  Corepad — AI-Powered Dental Management      ║
  ╚══════════════════════════════════════════════╝

  Market:  $3.7B (11.4% CAGR)
  Problem: Insurance claim complexity, appointment no-shows
  Moat:    Vertical AI + All-in-one platform + HIPAA-first

  Features (12):
    MUST-HAVE    Smart Scheduling         Phase 1   2 weeks
    MUST-HAVE    Insurance Auto-Claims    Phase 1   3 weeks
    SHOULD-HAVE  Patient Portal           Phase 2   2 weeks
    ...

  Pricing:
    Free     $0/mo    Up to 50 patients, basic scheduling
    Pro      $49/mo   Unlimited, insurance integration, API
    Business $129/mo  Multi-location, analytics, priority support

  Competitors: Dentrix, Open Dental, CareStack
  ✓ Feature matrix generated (12 features x 4 competitors)
  ✓ Landing page generated (1,847 lines)
  ✓ Deploy guide generated
```

## 25 Built-In Industries

<details>
<summary>Click to expand full list</summary>

| Industry | Market Size | CAGR | Key Pain Point |
|----------|------------|------|----------------|
| Pet Grooming | $14.5B | 6.2% | Manual scheduling, no-show clients |
| Real Estate | $12.8B | 12.1% | Lead management chaos |
| Fitness | $16.4B | 14.8% | Class scheduling, membership churn |
| Dental | $3.7B | 11.4% | Insurance claims, no-shows |
| Restaurant | $7.2B | 15.3% | Order management, inventory waste |
| Legal | $1.8B | 9.7% | Time tracking, document chaos |
| Education | $21.6B | 18.2% | Student engagement, progress tracking |
| Healthcare | $28.5B | 13.6% | Patient scheduling, EHR complexity |
| Construction | $10.3B | 11.8% | Project delays, budget overruns |
| Salon | $1.3B | 8.5% | Double bookings, client retention |
| Accounting | $18.3B | 8.6% | Data entry errors, tax deadlines |
| Logistics | $8.9B | 17.4% | Route inefficiency, shipment visibility |
| Agriculture | $4.1B | 12.9% | Crop monitoring, weather dependency |
| Recruiting | $3.2B | 10.3% | Resume screening overload |
| Event Management | $6.4B | 11.1% | Ticket sales, vendor coordination |
| Property Management | $5.6B | 9.8% | Rent collection, maintenance chaos |
| Veterinary | $1.9B | 10.7% | Patient records, inventory |
| Auto Repair | $2.1B | 7.9% | Estimate accuracy, parts ordering |
| Photography | $0.8B | 6.1% | Gallery management, booking |
| Nonprofit | $3.4B | 9.2% | Donor management, fundraising |
| Cleaning Services | $2.4B | 8.1% | Booking, quality consistency |
| Therapy | $5.8B | 13.2% | Session notes, insurance billing |
| Church/Ministry | $1.2B | 5.4% | Member engagement, donations |
| E-Commerce | $6.3B | 16.7% | Inventory sync, abandoned carts |
| Home Services | $3.8B | 11.5% | Lead management, scheduling |

</details>

**Any niche works** — unknown niches get smart defaults based on market patterns.

## Installation

```bash
# Use directly (no install)
npx ai-saas-gen "your niche"

# Or install globally
npm i -g ai-saas-gen

# Or install from GitHub
npm i -g github:kurtnebiev-elvis4/ai-saas-gen
```

## Usage

### Output Formats

```bash
# Pretty terminal output (default)
npx ai-saas-gen "dental"

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

const plan = generate('dental', { budget: 'seed', region: 'us' });

console.log(plan.business.name);     // "Nexusfy"
console.log(plan.business.tam);      // "$3.7B"
console.log(plan.features);          // [{name, desc, priority, phase, effort}, ...]
console.log(plan.techStack);         // {frontend, backend, db, hosting, auth, payments}
console.log(plan.pricing);           // [{name, price, period, features}, ...]
console.log(plan.competitive);       // {competitors, rows}
console.log(plan.landingHTML);       // Full HTML string
console.log(plan.markdown);          // Full Markdown document

const verticals = listVerticals();   // [{name, market, cagr, pain, competitors}, ...]
```

## Why This Exists

There are AI business plan generators ($10-50/mo). There are SaaS boilerplates. But there's **nothing that combines vertical SaaS business intelligence with instant, offline generation** of a complete plan + landing page + deploy guide.

| | ai-saas-gen | ChatGPT | VentureKit ($29/mo) | LivePlan ($20/mo) |
|---|---|---|---|---|
| Vertical SaaS focus | Yes | No | No | No |
| Real market data | 25 industries | Hallucinated | Generic | Generic |
| Landing page output | Yes | No | No | No |
| Works offline | Yes | No | No | No |
| Price | Free | $20/mo | $29/mo | $20/mo |
| Open source | Yes | No | No | No |

**Built for:**
- Founders exploring niche SaaS ideas
- Indie hackers validating before building
- Agencies pitching vertical SaaS to clients
- Hackathon teams needing a business plan in 5 minutes

## Zero Dependencies

No API keys. No accounts. No network requests. Runs entirely locally using a curated knowledge base of 25 industry verticals with real market data.

## Web Version

Don't want to use the CLI? Try the full web app with interactive UI, financial projections, and more:

**[tool-factory-prod.web.app/saas-generator](https://tool-factory-prod.web.app/saas-generator/)**

## Contributing

PRs welcome. To add a new industry vertical, edit `src/data.js` and add an entry to the `VERTICALS` object.

## License

MIT
