# Contributing to ai-saas-gen

Thanks for your interest in contributing! This project thrives on community contributions, especially new industry verticals.

## Adding a New Industry Vertical

This is the most impactful contribution you can make. Each vertical needs real market data.

### Steps

1. Fork the repo and create a branch: `git checkout -b vertical/your-industry`
2. Add your vertical data to `src/data.js` following the existing format
3. Generate an example: `node src/cli.js "your-industry" -o examples/your-industry/`
4. Run tests: `node test.js`
5. Submit a PR

### Vertical Data Format

Each vertical in `src/data.js` needs:

```javascript
{
  name: 'industry-name',
  displayName: 'Industry Name',
  market: { tam: '$X.XB', cagr: 'X.X%', region: 'global' },
  painPoints: ['Pain 1', 'Pain 2', 'Pain 3'],
  competitors: [
    { name: 'Competitor 1', weakness: 'Their main weakness' },
    // ...
  ],
  features: [
    { name: 'Feature', desc: 'Description', priority: 'must|should|nice', phase: 1, effort: 3 },
    // ...
  ]
}
```

### Quality Checklist for Verticals

- [ ] TAM sourced from reputable market research (include source in PR)
- [ ] At least 3 real competitors with actual weaknesses
- [ ] At least 5 features with realistic effort estimates
- [ ] Pain points reflect actual industry problems (not generic)
- [ ] Generated landing page looks professional

## Bug Fixes and Features

1. Check existing issues first
2. For bugs: include steps to reproduce
3. For features: open an issue to discuss before coding
4. Keep PRs focused — one change per PR
5. All tests must pass: `node test.js`

## Code Style

- No external dependencies (this is a core principle)
- ES modules compatible with Node 16+
- Clear variable names over comments

## Questions?

Open an issue with the `question` label.
