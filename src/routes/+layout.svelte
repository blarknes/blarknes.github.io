<script lang="ts">
  import { navigating } from "$app/state";
  import { Background, Loader, MetaTags } from "$components";
  import "$styles";
  import type { Snippet } from "svelte";

  type LayoutProps = {
    children: Snippet<[]>;
  };

  let { children }: LayoutProps = $props();

  let key = $derived(navigating.to);
</script>

<MetaTags />
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
