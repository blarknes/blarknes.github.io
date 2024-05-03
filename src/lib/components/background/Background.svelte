<script>
  import { background_large, background_small } from '$assets';
  import { ImageLoader } from '$components';

  const imageInformation = {
    large_image: background_large,
    small_image: background_small,
    image_text: 'background',
  }
</script>

<main>
  <picture>
    <ImageLoader {imageInformation}/>
  </picture>
</main>

<style lang='scss'>
  main {
    display: flex;
    align-items: end;
    justify-content: end;
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100vw;
    height: 100dvh;
    overflow: hidden;
  }

  picture {
    width: fit-content;
    height: 65vw;
    max-height: 50vh;
  }
</style>
