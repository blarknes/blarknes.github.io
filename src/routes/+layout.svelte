<script lang="ts">
  import { page as state } from "$app/state";
  import { Background, Loader, MetaTags, Navigation, Title } from "$components";
  import { Page } from "$enums";
  import "$styles";
  import type { Snippet } from "svelte";

  type LayoutProps = {
    children: Snippet<[]>;
  };

  let { children }: LayoutProps = $props();

  let page: Page = $derived(state.data.page);
  let key: Path = $derived(state.url);
</script>

{#key key}
  <Loader />
{/key}

<Title {page} />
<MetaTags />
<Background />

<main>
  <Navigation {page} />
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
