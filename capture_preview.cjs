const puppeteer = require('C:\\Users\\Home\\.gemini\\antigravity\\brain\\c55b4a83-f61b-4f10-b22e-1f9734de523f\\scratch\\node_modules\\puppeteer-core');
const path = require('path');
const fs = require('fs');

const OUT_DIR = 'C:\\Users\\Home\\.gemini\\antigravity\\brain\\10217430-8e11-441f-a201-6ee4a4a4ef9c';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  
  // 1. Desktop Viewport
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 2000));

  // Screenshot 1: Desktop Hero & Top
  await page.screenshot({ path: path.join(OUT_DIR, 'preview_godmode_hero.png'), clip: { x: 0, y: 0, width: 1440, height: 950 } });
  console.log('✅ Captured preview_godmode_hero.png');

  // Screenshot 2: YouTube Section
  const ytSection = await page.$('#youtube');
  if (ytSection) {
    const box = await ytSection.boundingBox();
    if (box) {
      await page.screenshot({ path: path.join(OUT_DIR, 'preview_godmode_youtube.png'), clip: { x: 0, y: box.y, width: 1440, height: Math.min(box.height, 900) } });
      console.log('✅ Captured preview_godmode_youtube.png');
    }
  }

  // Screenshot 3: The 4 Pillars
  const featSection = await page.$('#features');
  if (featSection) {
    const box = await featSection.boundingBox();
    if (box) {
      await page.screenshot({ path: path.join(OUT_DIR, 'preview_godmode_features.png'), clip: { x: 0, y: box.y, width: 1440, height: Math.min(box.height, 950) } });
      console.log('✅ Captured preview_godmode_features.png');
    }
  }

  // 4. Mobile Viewport (iPhone 14 - 390x844)
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(OUT_DIR, 'preview_godmode_mobile.png'), clip: { x: 0, y: 0, width: 390, height: 844 } });
  console.log('✅ Captured preview_godmode_mobile.png');

  await browser.close();
  console.log('🏁 All screenshots captured successfully!');
})().catch(console.error);
