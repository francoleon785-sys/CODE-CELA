const path = require("path");
const { pathToFileURL } = require("url");

const puppeteerPath = "C:\\Users\\Franc\\OneDrive\\Documentos\\Default Project\\hyperframes\\node_modules\\.bun\\node_modules\\puppeteer";
const puppeteer = require(puppeteerPath);

const postsDir = __dirname;
const posts = ["post1", "post2", "post3"];

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-gpu", "--font-render-hinting=none"],
  });
  try {
    for (const name of posts) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 1 });
      const fileUrl = pathToFileURL(path.join(postsDir, `${name}.html`)).href;
      await page.goto(fileUrl, { waitUntil: "networkidle0" });
      await page.evaluate(() => document.fonts.ready);
      await new Promise((r) => setTimeout(r, 300));
      const out = path.join(postsDir, `${name}.png`);
      await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1080, height: 1080 } });
      console.log(`OK ${out}`);
      await page.close();
    }
  } finally {
    await browser.close();
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
