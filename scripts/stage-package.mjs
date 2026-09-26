import { copyFile, mkdir } from 'node:fs/promises';

await mkdir('package-dist', { recursive: true });
await copyFile('package/package.json', 'package-dist/package.json');
await copyFile('package/README.md', 'package-dist/README.md');
await copyFile('LICENSE', 'package-dist/LICENSE');
await copyFile('package/.npmrc', 'package-dist/.npmrc');
