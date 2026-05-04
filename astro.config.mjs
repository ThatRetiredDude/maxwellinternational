// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// GitHub Pages project URL uses /repository-name/. After you add a custom domain in
// repo Pages settings, set base to '/' and site to your domain.
export default defineConfig({
	site: "https://thatretireddude.github.io",
	base: "/maxwellinternational/",
	integrations: [mdx(), sitemap()],
});
