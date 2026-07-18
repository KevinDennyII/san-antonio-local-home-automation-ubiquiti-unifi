import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url)); // website/scripts
const siteDir = path.resolve(scriptDir, '..'); // website
const repoRoot = path.resolve(siteDir, '..'); // repo root
const outDir = path.join(siteDir, 'content');

const dirs = ['sales', 'delivery', 'legal', 'operations', 'pilots', 'pipeline'];

const marker = path.join(repoRoot, 'sales', 'notion-pilot-one-pager.md');
if (!existsSync(marker)) {
  throw new Error(`sync-content: missing ${marker} (cwd=${process.cwd()})`);
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

for (const dir of dirs) {
  const from = path.join(repoRoot, dir);
  const to = path.join(outDir, dir);
  if (!existsSync(from)) {
    console.warn(`sync-content: skip missing ${from}`);
    continue;
  }
  cpSync(from, to, { recursive: true });
  console.log(`synced ${dir}/`);
}

console.log(`sync-content: wrote ${outDir}`);
