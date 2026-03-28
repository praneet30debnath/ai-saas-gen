---
title: I built a CLI that generates a complete SaaS business plan in 2 seconds
published: false
description: No API keys, no signup, zero dependencies. Just npx and a niche.
tags: opensource, startup, cli, javascript
cover_image: 
---

## The Problem

Every founder goes through the same process: you have a niche idea, and you need to figure out market size, features, pricing, tech stack, and competition. This usually means:

- Hours on Google researching TAM/CAGR
- Asking ChatGPT to "write a business plan" (getting generic walls of text)
- Manually building a feature comparison matrix
- Designing a landing page from scratch
- Figuring out a pricing model

What if all of this took 2 seconds?

## The Solution

```bash
npx ai-saas-gen "dental"
```

That's it. One command, one niche. You get:

1. **Executive Summary** — generated brand name, positioning, value prop
2. **Market Data** — TAM, CAGR, growth trends from curated industry research
3. **Feature Roadmap** — prioritized (must/should/nice) with effort estimates and phases
4. **Tech Stack** — adapted to your budget tier (bootstrap → enterprise)
5. **Pricing Model** — 4-tier pricing with feature breakdown
6. **Competitive Analysis** — real competitors with feature comparison matrix
7. **Landing Page** — ready-to-deploy HTML
8. **Deploy Guide** — step-by-step instructions

## How It Works

No AI APIs. No network requests. The tool uses a curated knowledge base of **25 industry verticals** with real market data. Each vertical includes:

- TAM and CAGR from market research reports
- Real competitor names and their actual weaknesses
- Industry-specific features with realistic effort estimates
- Pain points validated by industry experts

For unknown niches, the tool applies market patterns to generate sensible defaults.

## Output Formats

```bash
# Terminal (pretty-printed)
npx ai-saas-gen "pet grooming"

# JSON (pipe to jq, use in scripts)
npx ai-saas-gen "dental" --json

# Markdown (paste into Notion, docs)
npx ai-saas-gen "fitness" --md

# HTML landing page
npx ai-saas-gen "restaurant" --html > landing.html

# Save everything to a directory
npx ai-saas-gen "logistics" -o my-saas/
```

## Why Zero Dependencies?

I wanted this to be:
- **Instant** — no `npm install` wait
- **Private** — your ideas never leave your machine
- **Reliable** — no API keys to expire, no services to go down
- **Universal** — works on any system with Node 16+

## vs. Alternatives

| Feature | ai-saas-gen | ChatGPT | VentureKit | LivePlan |
|---------|:-----------:|:-------:|:----------:|:--------:|
| Price | **Free** | $20/mo | $29/mo | $20/mo |
| Offline | **Yes** | No | No | No |
| Landing Page | **Generated** | No | No | No |
| Industry Data | **25 verticals** | Generic | Generic | Generic |
| Tech Stack | **Specific** | Vague | No | No |
| Competitive Matrix | **Auto** | Manual | Partial | No |
| Privacy | **100% local** | Cloud | Cloud | Cloud |

## Who Uses This?

- **Founders** — exploring niches before committing
- **Indie hackers** — validating ideas in minutes, not weeks
- **Agencies** — pitching vertical SaaS to clients
- **Hackathon teams** — business plan in 5 minutes
- **Investors** — quick market sizing

## What's Next

- More industry verticals (community contributions welcome!)
- Pro API for AI-enhanced plans with deeper research
- Integration with pitch deck generators

## Try It

```bash
npx ai-saas-gen "your-niche-here"
```

GitHub: [kurtnebiev-elvis4/ai-saas-gen](https://github.com/kurtnebiev-elvis4/ai-saas-gen)
Live Demo: [tool-factory-prod.web.app/saas-generator](https://tool-factory-prod.web.app/saas-generator/)

Feedback welcome! What industry vertical should be added next?
