<script>
  import { preload } from "$actions";

  export let information;

  const LARGE_IMAGE = information.largeImage;
  const SMALL_IMAGE = information.smallImage;
  const IMAGE_TEXT = information.imageText;
</script>

{#await preload(LARGE_IMAGE)}
  <img src={SMALL_IMAGE} alt={IMAGE_TEXT} />
{:then loaded}
  <img src={loaded} alt={IMAGE_TEXT} />
{/await}

<style lang="scss">
  img {
    height: 100%;
  }
</style>
