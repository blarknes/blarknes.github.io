<script lang="ts">
  import { Page } from "$enums";

  type TitleProps = {
    page: Page;
  };

  let { page }: TitleProps = $props();
</script>

<svelte:head>
  <title>{page}</title>
</svelte:head>
