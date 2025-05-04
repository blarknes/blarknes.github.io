<script lang="ts">
  import type { ImageInfo } from "$types";
  import { load } from "$utils";

  interface ImageLoaderProps {
    image: ImageInfo;
  };

  let { image }: ImageLoaderProps = $props();

  const large = image.large;
  const src = image.small;
  const alt = image.alt;
</script>

{#await load(large)}
  <img {src} {alt} />
{:then src}
  <img {src} {alt} />
{/await}

<style lang="scss">
  img {
    height: 100%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
