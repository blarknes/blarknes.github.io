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
      $assets: 'src/lib/assets/_index',
      $actions: 'src/lib/actions/_index',
      $components: 'src/lib/components/_index',
    },
    paths: {
      base: '',
    },
  },
};

export default config;
