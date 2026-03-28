# Show HN: ai-saas-gen – Generate a vertical SaaS business plan from the CLI (zero dependencies)

Hi HN,

I built `ai-saas-gen`, a CLI tool that generates a complete vertical SaaS business plan from a single niche input. No API keys, no signup, no network requests. Runs entirely offline.

```bash
npx ai-saas-gen "dental"
```

In ~2 seconds you get:
- Executive summary with a generated brand name
- Market sizing (TAM, CAGR) from curated industry data
- Prioritized feature roadmap with effort estimates
- Full tech stack recommendation based on budget tier
- Tiered pricing model (Free/Pro/Business/Enterprise)
- Competitive analysis matrix vs real incumbents
- A ready-to-deploy landing page (HTML)
- Deployment guide
- Shareable markdown report

It has 25 built-in industry verticals with real market data (pet grooming, healthcare, restaurant, real estate, etc.), but any niche works — unknown niches get smart defaults based on market patterns.

The key differentiator vs ChatGPT/VentureKit/LivePlan: it's free, offline, and generates structured, actionable output (not just text). The landing page is actually deployable. The competitive matrix uses real competitors.

Built with zero dependencies. Works on Node 16+. MIT license.

Live demo: https://tool-factory-prod.web.app/saas-generator/
GitHub: https://github.com/kurtnebiev-elvis4/ai-saas-gen
API docs: https://tool-factory-prod.web.app/api-docs/

Would love feedback on:
1. What industries should we add next?
2. Is the output detailed enough for actual decision-making?
3. Would you use a Pro API that generates AI-enhanced plans with deeper market research?
