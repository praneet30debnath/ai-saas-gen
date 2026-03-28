# Deploy Vibehub — Seed Guide

## 1. Project Setup
```bash
npx create-next-app@latest vibehub-app --typescript --tailwind --app
cd vibehub-app
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
