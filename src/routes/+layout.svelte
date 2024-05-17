<script>
  import { navigating } from '$app/stores';
  import { Background, Loader } from '$components';
  import '$styles/main.scss';
</script>

<Background />

{#key $navigating}
  <Loader />
{/key}

<slot />
