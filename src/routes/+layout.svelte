<script>
  import { navigating } from '$app/stores';
  import { Background, Loader } from '$components';
  import '$styles';
</script>

<Background />

{#key $navigating}
  <Loader />
{/key}

<slot />
