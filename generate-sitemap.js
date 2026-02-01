import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";

const sitemap = new SitemapStream({
  hostname: "https://propertylordspatna.in",
});

const pages = [
  "/",
  "/about",
  "/contact",
  "/projects",
];

(async () => {
  for (const page of pages) {
    sitemap.write({ url: page, changefreq: "weekly", priority: 0.8 });
  }

  sitemap.end();

  const data = await streamToPromise(sitemap);

  fs.writeFileSync("./dist/sitemap.xml", data.toString());
  console.log("✅ Sitemap Generated");
})();
