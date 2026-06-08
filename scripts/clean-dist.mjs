// Remove Slidev's generated `_redirects` after build.
// On Cloudflare Workers Static Assets, SPA fallback is handled by
// `assets.not_found_handling: "single-page-application"` in wrangler.jsonc.
// The `/* /index.html 200` rule in `_redirects` conflicts with that and is
// rejected as an infinite-loop redirect, so we strip it here.
import { rmSync } from 'node:fs';

rmSync(new URL('../dist/_redirects', import.meta.url), { force: true });
console.log('postbuild: removed dist/_redirects (SPA fallback handled by wrangler not_found_handling)');
