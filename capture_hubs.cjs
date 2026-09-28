const puppeteer = require('C:\\Users\\Home\\.gemini\\antigravity\\brain\\c55b4a83-f61b-4f10-b22e-1f9734de523f\\scratch\\node_modules\\puppeteer-core');
const path = require('path');

const OUT_DIR = 'C:\\Users\\Home\\.gemini\\antigravity\\brain\\10217430-8e11-441f-a201-6ee4a4a4ef9c';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--window-size=1440,1200']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1200 });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 2000));

  // Screenshot: The 10 Hubs Grid
  const hubsSection = await page.$('#hubs');
  if (hubsSection) {
    await hubsSection.scrollIntoView();
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(OUT_DIR, 'preview_10_hubs_grid.png') });
    console.log('✅ Captured preview_10_hubs_grid.png');
  }

  // Screenshot: Comparison Table
  const compSection = await page.$('#comparison');
  if (compSection) {
    await compSection.scrollIntoView();
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(OUT_DIR, 'preview_comparison_table.png') });
    console.log('✅ Captured preview_comparison_table.png');
  }

  await browser.close();
  console.log('🏁 Captured Hubs and Comparison table successfully!');
})().catch(console.error);
