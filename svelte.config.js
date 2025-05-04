import adapter from "@sveltejs/adapter-static";
import { sveltePreprocess } from "svelte-preprocess";

const config = {
  preprocess: sveltePreprocess({
    scss: {
      prependData: `@use "src/lib/styles/colors.scss";`,
    },
  }),
  kit: {
    adapter: adapter(),
    alias: {
      $components: "src/lib/components/index",
      $images: "src/lib/images/index",
      $styles: "src/lib/styles/styles.scss",
      $icons: "src/lib/icons",
      $types: "src/lib/types.ts",
      $utils: "src/lib/utils",
    },
  },
};

export default config;
