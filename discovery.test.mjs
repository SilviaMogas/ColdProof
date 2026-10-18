import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import sitemap from './app/sitemap.ts';
import robots from './app/robots.ts';

const read = path => readFileSync(new URL(path, import.meta.url), 'utf8');

test('only the two existing public documents are in discovery', () => {
  assert.deepEqual(sitemap().map(({ url }) => url), [
    'https://cold-proof.vercel.app/',
    'https://cold-proof.vercel.app/brand-book.html',
  ]);
  assert.deepEqual(robots(), {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://cold-proof.vercel.app/sitemap.xml',
  });
});

test('metadata preserves prototype status and document-specific canonicals', () => {
  assert.match(read('./app/layout.tsx'), /metadataBase: new URL\("https:\/\/cold-proof\.vercel\.app"\)/);
  assert.match(read('./app/layout.tsx'), /ColdProof is a cold-chain assurance proof of concept/);
  assert.match(read('./app/page.tsx'), /alternates: \{ canonical: "\/" \}/);
  assert.match(read('./public/brand-book.html'), /rel="canonical" href="https:\/\/cold-proof\.vercel\.app\/brand-book\.html"/);
});
