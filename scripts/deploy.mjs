// Deploy to Cloudflare Workers, supplying the account ID from `.env` so it stays
// out of the (public) repo. If CLOUDFLARE_ACCOUNT_ID isn't already in the shell
// environment, load it from `.env`, then run `wrangler deploy`. Passing the account
// ID via process env (rather than wrangler.jsonc) also bypasses the `/memberships`
// lookup that this account's OAuth token isn't permitted to perform.
import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

if (!process.env.CLOUDFLARE_ACCOUNT_ID && existsSync('.env')) {
  process.loadEnvFile('.env');
}

if (!process.env.CLOUDFLARE_ACCOUNT_ID) {
  console.error(
    'CLOUDFLARE_ACCOUNT_ID is not set.\n' +
      'Copy .env.example to .env and fill in your Cloudflare account ID,\n' +
      'or export CLOUDFLARE_ACCOUNT_ID in your shell before deploying.',
  );
  process.exit(1);
}

const result = spawnSync('wrangler', ['deploy', ...process.argv.slice(2)], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
});
process.exit(result.status ?? 1);
