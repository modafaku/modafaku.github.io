import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import astroGhostCMS from '@matthiesenxyz/astro-ghostcms';


// https://astro.build/config
export default defineConfig({
  site: 'https://modafaku.github.io',
//  output: 'server',
  integrations: [astroGhostCMS({
    ghostURL: 'https://ghost.modafaku.com',
    verbose: true,
    ThemeProvider: {
      disableThemeProvider: true,
    }
  }), mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
})