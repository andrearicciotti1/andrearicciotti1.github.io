import type { APIRoute } from "astro";
import { projects } from "../data/projects";
import { LANGS, localize } from "../i18n/ui";

const site = "https://andrearicciotti.netlify.app";
const paths = ["/", "/works", "/bio", "/contact", ...projects.map((p) => `/works/${p.slug}`)];

export const GET: APIRoute = () => {
  const urls = paths
    .flatMap((path) =>
      LANGS.map((lang) => {
        const alts = LANGS.map(
          (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${site}${localize(l, path)}"/>`,
        ).join("\n");
        return `  <url>\n    <loc>${site}${localize(lang, path)}</loc>\n${alts}\n  </url>`;
      }),
    )
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
