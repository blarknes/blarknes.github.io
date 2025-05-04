<script lang="ts">
  import { navigating } from "$app/state";
  import { Background, Loader } from "$components";
  import "$styles";
  import type { Snippet } from "svelte";

  interface LayoutProps {
    children: Snippet<[]>;
  };

  let { children }: LayoutProps = $props();

  let key = $derived(navigating.to);
</script>

<Background />

{#key key}
  <Loader />
{/key}

<main>
  {@render children()}
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8dvh 0;
  }
</style>
