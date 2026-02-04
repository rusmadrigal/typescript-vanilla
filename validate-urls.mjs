#!/usr/bin/env node
/**
 * Valida URLs: solo 200 OK, descarta 404 u otros errores.
 * Uso: node validate-urls.mjs
 */

const URLS_FILE = './urls-clean.txt';
const OUT_FILE = './urls-200-ok.txt';

const urls = (await import('fs')).readFileSync(URLS_FILE, 'utf-8')
  .split('\n')
  .map((u) => u.trim())
  .filter(Boolean);

const browserHeaders = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml',
};

const results = { ok: [], notOk: [] };

for (const url of urls) {
  try {
    const res = await fetch(url, { method: 'HEAD', headers: browserHeaders, redirect: 'follow' });
    if (res.ok) {
      results.ok.push(url);
      console.log(`200 OK: ${url}`);
    } else {
      results.notOk.push({ url, status: res.status });
      console.log(`${res.status} (no OK): ${url}`);
    }
  } catch (err) {
    results.notOk.push({ url, status: err.message });
    console.log(`Error: ${url} - ${err.message}`);
  }
}

const fs = await import('fs');
fs.writeFileSync(OUT_FILE, results.ok.join('\n') + (results.ok.length ? '\n' : ''), 'utf-8');

console.log('\n--- Resumen ---');
console.log(`200 OK: ${results.ok.length}`);
console.log(`No OK / error: ${results.notOk.length}`);
console.log(`URLs válidas guardadas en: ${OUT_FILE}`);
