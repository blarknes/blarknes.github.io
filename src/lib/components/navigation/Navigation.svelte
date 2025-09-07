<script lang="ts">
  import { IconButton } from "$components";
  import { Page } from "$enums";
  import { getNavigationItems } from "$functions/route";

  type NavigationProps = {
    page: Page;
  };

  let { page }: NavigationProps = $props();

  let items: IconButtonInfo[] = $derived(getNavigationItems(page));
  let visible: boolean = $derived(items.length > 0);
</script>

{#if visible}
  <nav>
    {#each items as info}
      <IconButton {info} />
    {/each}
  </nav>
{/if}

<style lang="scss">
  nav {
    display: flex;
    justify-content: center;
    gap: 14px;
  }
</style>
