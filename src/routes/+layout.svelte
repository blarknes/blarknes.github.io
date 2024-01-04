<script>
  import { navigating } from '$app/stores';
  import { Background, Loader } from '$components';
  import 'modern-normalize/modern-normalize.css';
  import '../lib/styles/main.scss';
</script>

<Background />

{#key $navigating}
  <Loader />
{/key}

<main>
  <slot />
</main>

<style>
  main {
    margin: 8vh 0;
    font-size: 1.3em;
  }
</style>
