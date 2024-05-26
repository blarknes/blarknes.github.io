<script>
  import { BackgroundLarge, BackgroundSmall } from '$assets';
  import { ImageLoader } from '$components';

  const imageInformation = {
    largeImage: BackgroundLarge,
    smallImage: BackgroundSmall,
    imageText: 'background',
  };
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
