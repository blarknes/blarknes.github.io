<script>
  import { navigating } from '$app/stores';
  import { Background, Loader } from '$components';
  import 'modern-normalize/modern-normalize.css';
  import '../lib/styles/main.scss';

  let toggled = false;

  $: if($navigating) toggled = !toggled;
</script>

<Background />

{#key toggled}
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
