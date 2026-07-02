import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const sitemap = new SitemapStream({
  hostname: "https://cuemoda.com",
});

const writeStream = createWriteStream("./public/sitemap.xml");

sitemap.pipe(writeStream);

[
  {
    url: "/",
    changefreq: "weekly",
    priority: 1.0,
  },
  {
    url: "/actualidad/nueva-coleccion",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    url: "/actualidad/campana-cue",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/actualidad/rebajas",
    changefreq: "daily",
    priority: 0.9,
  },
].forEach((route) => sitemap.write(route));

sitemap.end();

streamToPromise(sitemap);