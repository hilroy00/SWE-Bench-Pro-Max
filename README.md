# SWE-Bench Pro Max

A 7-slide presentation built with [Slidev](https://sli.dev) (Markdown-driven slides) and deployed to Cloudflare Workers Static Assets.

**Live:** https://swe-bench-pro-max.davidhliu16.workers.dev

## Develop

```bash
npm install
npm run dev      # http://localhost:3030 — edit slides.md, hot-reloads
```

Slides live in [`slides.md`](slides.md). Each `---` separator starts a new slide; the per-slide `layout:` frontmatter picks the layout (`cover`, `two-cols`, `image-right`, `center`, …). See the [Slidev docs](https://sli.dev).

## Build & deploy

First-time setup — provide your Cloudflare account ID (kept out of the repo):

```bash
cp .env.example .env   # then edit .env and set CLOUDFLARE_ACCOUNT_ID
```

Then:

```bash
npm run build    # outputs static SPA to dist/ (postbuild strips dist/_redirects)
npm run deploy   # loads .env, then `wrangler deploy` -> Cloudflare Workers
```

Deploy config is in [`wrangler.jsonc`](wrangler.jsonc). The account ID is supplied
via the `CLOUDFLARE_ACCOUNT_ID` env var (loaded from `.env` by
[`scripts/deploy.mjs`](scripts/deploy.mjs)), not committed. SPA routing is handled by
`assets.not_found_handling: "single-page-application"`, so deep links / refreshes
resolve to `index.html`.
