# MauTravel — Mauritius Tour Operator Website

Official website for MauTravel, a licensed Tour Operator based in Mauritius.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- TypeScript + Tailwind CSS v4
- Multilingual via [`next-intl`](https://next-intl.dev) (16 locales)
- Deployed on [Vercel](https://vercel.com)

## Development

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to see the result.

## Build

```bash
npm run build
```

## Deploy

The project is connected to [Vercel](https://vercel.com) via its GitHub integration — every push to `main` deploys automatically, no extra configuration or GitHub Actions workflow required. Vercel auto-detects the Next.js app, runs `npm run build`, and serves it (including the `proxy.ts` locale-detection middleware) on its Edge Network.
