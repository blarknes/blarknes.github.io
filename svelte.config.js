import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    scss: {
      prependData: '@use "src/lib/styles/variables";',
    },
  }),
  kit: {
    adapter: adapter(),
    alias: {
      $assets: 'src/lib/assets/index',
      $actions: 'src/lib/actions/index',
      $components: 'src/lib/components/index',
      $styles: 'src/lib/styles',
    }
  },
};

export default config;
