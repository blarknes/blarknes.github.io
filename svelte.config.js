import adapter from "@sveltejs/adapter-static";
import { sveltePreprocess } from "svelte-preprocess";

const config = {
  preprocess: sveltePreprocess({
    scss: {
      prependData: `@use "src/lib/styles/palette.scss";`,
    },
  }),
  kit: {
    adapter: adapter(),
    alias: {
      $components: "src/lib/components/index",
      $functions: "src/lib/functions",
      $images: "src/lib/images/index",
      $styles: "src/lib/styles/styles.scss",
      $enums: "src/lib/enums",
      $icons: "src/lib/icons",
    },
  },
};

export default config;
