<script>
  import { preload } from '$actions';

  export let imageInformation;

  const large_image = imageInformation.large_image;
  const small_image = imageInformation.small_image;
  const image_text = imageInformation.image_text;
</script>

{#await preload(large_image)}
  <img src={small_image} alt={image_text} />
{:then loaded}
  <img src={loaded} alt={image_text} />
{/await}

<style lang='scss'>
  img {
    height: 100%;
  }
</style>
