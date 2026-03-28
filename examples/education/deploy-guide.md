# Deploy Novahub — Seed Guide

## 1. Project Setup
```bash
npx create-next-app@latest novahub-app --typescript --tailwind --app
cd novahub-app
npm install @supabase/supabase-js stripe next-auth
```

## 2. Database (Supabase)
```bash
npx supabase init
npx supabase db push
```

## 3. Deploy to Vercel
```bash
npx vercel --prod
```

Estimated Monthly Cost: ~$50/month + transaction fees
