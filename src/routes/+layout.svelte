<script>
  import { navigating } from '$app/stores';
  import { Background, Loader } from '$components';
  import '../lib/styles/main.scss';
</script>

<Background />

{#key $navigating}
  <Loader />
{/key}

<main>
  <slot />
</main>
