const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const distDir = path.join(baseDir, 'dist');
const publicDir = path.join(baseDir, 'public');

if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

const filesToSync = [
  'index.html',
  'styles.css',
  'script.js',
  'favicon.svg',
  'manifest.json',
  'sw.js',
  'offline.html',
  'icon-192.png',
  'icon-512.png',
  '_headers',
  '_redirects'
];

filesToSync.forEach(file => {
  const src = path.join(baseDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(distDir, file));
    fs.copyFileSync(src, path.join(publicDir, file));
  }
});

console.log('✅ Arquivos compilados e sincronizados com sucesso para dist/ e public/!');
