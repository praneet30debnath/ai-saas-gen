<![CDATA[<p align="center">
  <h1 align="center">ai-saas-gen</h1>
  <p align="center"><strong>Generate a complete vertical SaaS business plan in seconds. No API keys. No signup. Runs locally.</strong></p>
</p>

<p align="center">
  <a href="https://github.com/kurtnebiev-elvis4/ai-saas-gen/actions/workflows/ci.yml"><img src="https://github.com/kurtnebiev-elvis4/ai-saas-gen/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://github.com/kurtnebiev-elvis4/ai-saas-gen/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT"></a>
  <a href="https://github.com/kurtnebiev-elvis4/ai-saas-gen"><img src="https://img.shields.io/github/stars/kurtnebiev-elvis4/ai-saas-gen?style=social" alt="GitHub Stars"></a>
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
| **Markdown Report** | Complete business plan as a shareable document |

## Demo

```
$ npx ai-saas-gen "dental"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Aurapad — dental SaaS Business Plan
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EXECUTIVE SUMMARY
  Aurapad is the modern, AI-powered dental management
  platform that eliminates insurance claim complexity
  and helps businesses save 10+ hours per week.

MARKET
  TAM: $3.7B  |  CAGR: 11.4%  |  Region: global

THE PROBLEM
  Insurance claim complexity, appointment no-shows,
  patient records fragmentation

COMPETITORS
  Dentrix  |  Open Dental  |  CareStack

FEATURES (7 total)
  [MUST]   Smart Scheduling        Phase 1  Effort 3/5
  [MUST]   Patient Records         Phase 1  Effort 4/5
  [MUST]   Insurance Auto-Claims   Phase 1  Effort 4/5
  [MUST]   Automated Reminders     Phase 1  Effort 2/5
  [SHOULD] Treatment Plans         Phase 2  Effort 3/5
  [NICE]   Patient Portal          Phase 2  Effort 3/5
  [MUST]   Billing & Payments      Phase 1  Effort 4/5

PRICING
  Starter       $0/forever
  Professional  $49/month    ★ RECOMMENDED
  Business      $149/month
  Enterprise    Custom

KEY METRICS
  Target MRR:   $50K
  Target Users: 2,000
  LTV:          $1,200
  CAC:          $120

✓ Saved to dental-saas-plan/
  plan.json       — Business plan data
  plan.md         — Markdown document
  landing.html    — Landing page
  deploy-guide.md — Deployment guide
```

## Examples

Check the [`examples/`](examples/) directory for complete generated outputs:

| Niche | Business Plan | Landing Page |
|-------|--------------|--------------|
| [Pet Grooming](examples/pet-grooming/) | [plan.md](examples/pet-grooming/plan.md) | [landing.html](examples/pet-grooming/landing.html) |
| [Fitness](examples/fitness/) | [plan.md](examples/fitness/plan.md) | [landing.html](examples/fitness/landing.html) |
| [Real Estate](examples/real-estate/) | [plan.md](examples/real-estate/plan.md) | [landing.html](examples/real-estate/landing.html) |
| [Healthcare](examples/healthcare/) | [plan.md](examples/healthcare/plan.md) | [landing.html](examples/healthcare/landing.html) |
| [Restaurant](examples/restaurant/) | [plan.md](examples/restaurant/plan.md) | [landing.html](examples/restaurant/landing.html) |
| [Education](examples/education/) | [plan.md](examples/education/plan.md) | [landing.html](examples/education/landing.html) |

## 26 Built-In Industries

<details>
<summary>Click to expand full list with market data</summary>

| Industry | Market Size | CAGR | Key Pain Point |
|----------|------------|------|----------------|
| Pet Grooming | $14.5B | 6.2% | Manual scheduling, no-show clients |
| Real Estate | $12.8B | 12.1% | Lead management chaos |
| Fitness | $16.4B | 14.8% | Class scheduling, membership churn |
| Dental | $3.7B | 11.4% | Insurance claims, no-shows |
| Restaurant | $7.2B | 15.3% | Order management, inventory waste |
| Legal | $1.8B | 9.7% | Time tracking, document chaos |
| Education | $8.3B | 16.1% | Student engagement, grading |
| Healthcare | $15.6B | 13.2% | Patient records, compliance |
| Construction | $2.1B | 10.5% | Project delays, budget overruns |
| Salon | $6.9B | 7.8% | Appointment booking, inventory |
| Accounting | $3.2B | 8.9% | Manual reconciliation, tax prep |
| Logistics | $4.8B | 12.7% | Route optimization, tracking |
| Agriculture | $1.9B | 14.2% | Crop monitoring, market access |
| Recruiting | $5.4B | 11.8% | Resume screening, pipeline tracking |
| Event Management | $3.6B | 13.4% | Vendor coordination, budgeting |
| Property Management | $2.8B | 9.3% | Tenant communication, maintenance |
| Veterinary | $2.4B | 8.1% | Records management, scheduling |
| Auto Repair | $1.7B | 6.8% | Work orders, parts inventory |
| Photography | $1.2B | 7.4% | Client gallery, booking |
| Nonprofit | $2.1B | 10.2% | Donor management, impact tracking |
| Cleaning Services | $1.4B | 8.6% | Job scheduling, quality control |
| Therapy | $4.2B | 15.6% | Session notes, HIPAA compliance |
| Church/Ministry | $1.1B | 5.4% | Member engagement, donations |
| E-Commerce | $18.7B | 17.3% | Inventory sync, multi-channel |
| Home Services | $3.8B | 11.1% | Dispatching, customer management |
| Insurance Agency | $3.5B | 8.5% | Commission tracking, renewal leakage |

</details>

**Any niche works** — unknown niches get smart defaults based on market patterns.

## vs. Alternatives

| Feature | ai-saas-gen | ChatGPT | VentureKit | LivePlan |
|---------|:-----------:|:-------:|:----------:|:--------:|
| Price | **Free** | $20/mo | $29/mo | $20/mo |
| Offline | **Yes** | No | No | No |
| Landing Page | **Generated** | No | No | No |
| Deploy Guide | **Included** | No | No | No |
| Industry Data | **26 verticals** | Generic | Generic | Generic |
| Tech Stack | **Specific** | Vague | No | No |
| Competitive Matrix | **Auto** | Manual | Partial | No |
| Feature Roadmap | **Phased** | Unstructured | Basic | No |
| API | **Yes** | API separate | No | No |
| Privacy | **100% local** | Cloud | Cloud | Cloud |

## Quick Start

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

### Advanced Examples

```bash
# Funded startup targeting enterprise in the US
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

console.log(plan.business.name);     // "Aurapad"
console.log(plan.business.tam);      // "$3.7B"
console.log(plan.features);          // [{name, desc, priority, phase, effort}, ...]
console.log(plan.techStack);         // {frontend, backend, db, hosting, auth, payments}
console.log(plan.pricing);           // [{name, price, period, features}, ...]
console.log(plan.competitive);       // {competitors, rows}
console.log(plan.landingHTML);       // Full HTML string
console.log(plan.markdown);          // Full Markdown document
console.log(plan.deployGuide);       // Deployment instructions

const verticals = listVerticals();   // [{name, market, cagr, pain, competitors}, ...]
```

## Who Is This For?

- **Founders** exploring vertical SaaS opportunities before committing
- **Indie hackers** validating niche ideas in minutes, not weeks
- **Agencies** pitching vertical SaaS solutions to clients
- **Hackathon teams** who need a business plan in 5 minutes
- **Investors** doing quick market sizing on vertical niches

## Why Zero Dependencies?

No API keys. No accounts. No network requests. No build step.

Everything runs locally using a curated knowledge base of 26 industry verticals with real market data (TAM, CAGR, competitors, pain points). Your data never leaves your machine.

## Contributing

PRs welcome! The easiest way to contribute is adding a new industry vertical. See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

MIT
]]>
