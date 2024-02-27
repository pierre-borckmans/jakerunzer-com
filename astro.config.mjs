import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  prefetch: {
    prefetchAll: true,
  },
  image: {
    service: squooshImageService(),
  },
  markdown: {
    shikiConfig: {
      experimentalThemes: {
        light: "rose-pine-dawn",
        dark: "rose-pine-moon",
      },
    },
  },
});
