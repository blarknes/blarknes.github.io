<script>
  import { preload } from "$actions";

  export let information;

  const largeImage = information.largeImage;
  const smallImage = information.smallImage;
  const imageText = information.imageText;
</script>

{#await preload(largeImage)}
  <img src={smallImage} alt={imageText} />
{:then loaded}
  <img src={loaded} alt={imageText} />
{/await}

<style lang="scss">
  img {
    height: 100%;
  }
</style>
