import { spawnSync } from 'node:child_process';
import { access } from 'node:fs/promises';

if (!process.env.PUBLIC_NPM_ACCESS_TOKEN) {
  throw new Error('Falta PUBLIC_NPM_ACCESS_TOKEN en .env');
}

await access('package-dist/package.json');

const result = spawnSync('pnpm', ['--dir', 'package-dist', 'publish', '--access', 'public', '--no-git-checks'], {
  env: process.env,
  stdio: 'inherit',
});

if (result.error) throw result.error;
process.exitCode = result.status ?? 1;
