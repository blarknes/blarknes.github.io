<script lang="ts">
  import type { MetaTag } from "$types";

  const tags: MetaTag[] = [
    { name: "description", content: "Wonderland is waiting." },
    { name: "robots",      content: "nofollow, noarchive, noimageindex" },
    { name: "viewport",    content: "width=device-width, initial-scale=1.0, interactive-widget=resizes-content" },
    { name: "theme-color", content: "#7E2C6F" },
  ];
</script>

<svelte:head>
  {#each tags as { name, content }}
    <meta {name} {content} />
  {/each}
</svelte:head>
