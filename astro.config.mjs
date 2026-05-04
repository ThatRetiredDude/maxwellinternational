// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Cloudflare Pages serves from /. Replace `site` with your *.pages.dev URL or custom domain
// (Dashboard → Workers & Pages → your project → Domains).
export default defineConfig({
	site: "https://maxwellinternational.pages.dev",
	base: "/",
	integrations: [mdx(), sitemap()],
});
