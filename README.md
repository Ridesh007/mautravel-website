# MauTravel — Mauritius Tour Operator Website

Official website for MauTravel, a licensed Tour Operator based in Mauritius.

**Live site:** [https://mautravel-website.pages.dev](https://mautravel-website.pages.dev)

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- TypeScript + Tailwind CSS v4
- Deployed on Cloudflare via `@opennextjs/cloudflare`

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
# Standard Next.js build
npm run build

# Build for Cloudflare Workers deployment
npm run build:cf
```

## Deploy

Deployment is handled automatically via GitHub Actions on every push to `main`. The workflow builds the project with `npm run build:cf` and deploys to Cloudflare Workers using `wrangler deploy`.

To deploy manually:

```bash
npm run deploy:cf
```

Requires `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` environment variables.
