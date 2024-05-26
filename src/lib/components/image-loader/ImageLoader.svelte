<script>
  import { preload } from '$actions';

  export let imageInformation;

  const LARGE_IMAGE = imageInformation.largeImage;
  const SMALL_IMAGE = imageInformation.smallImage;
  const IMAGE_TEXT = imageInformation.imageText;
</script>

{#await preload(LARGE_IMAGE)}
  <img src={SMALL_IMAGE} alt={IMAGE_TEXT} />
{:then loaded}
  <img src={loaded} alt={IMAGE_TEXT} />
{/await}

<style lang='scss'>
  img {
    height: 100%;
  }
</style>
