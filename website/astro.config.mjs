// @ts-check
import { defineConfig } from 'astro/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('.', import.meta.url)), '..');

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  // Set base to '/repo-name/' if deploying to GitHub project pages
  base: '/',
  vite: {
    server: {
      fs: {
        allow: [root, path.join(root, 'website')],
      },
    },
  },
});
