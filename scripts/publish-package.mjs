import { spawnSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';

if (!process.env.PUBLIC_NPM_ACCESS_TOKEN) {
  throw new Error('Falta PUBLIC_NPM_ACCESS_TOKEN en .env');
}

const manifest = JSON.parse(await readFile('package-dist/package.json', 'utf8'));
const expectedUser = manifest.name.split('/')[0].slice(1);
const childEnv = {
  ...process.env,
  'pnpm_config_//registry.npmjs.org/:_authToken': process.env.PUBLIC_NPM_ACCESS_TOKEN,
};

const identity = spawnSync('pnpm', ['--dir', 'package-dist', 'whoami'], {
  env: childEnv,
  encoding: 'utf8',
});

if (identity.status !== 0) {
  throw new Error('El token no autenticó en npm. Revisá PUBLIC_NPM_ACCESS_TOKEN.');
}

if (identity.stdout.trim() !== expectedUser) {
  throw new Error(`El token autentica como ${identity.stdout.trim()}, pero el paquete usa @${expectedUser}.`);
}

const result = spawnSync('pnpm', ['--dir', 'package-dist', 'publish', '--access', 'public', '--no-git-checks'], {
  env: childEnv,
  stdio: 'inherit',
});

if (result.error) throw result.error;
process.exitCode = result.status ?? 1;
