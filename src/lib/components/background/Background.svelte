<script>
  import { BackgroundLarge, BackgroundSmall } from "$assets";
  import { ImageLoader } from "$components";

  const information = {
    largeImage: BackgroundLarge,
    smallImage: BackgroundSmall,
    imageText: "background",
  };
</script>

<main>
  <picture>
    <ImageLoader {information}/>
  </picture>
</main>

<style lang="scss">
  main {
    display: flex;
    align-items: end;
    justify-content: end;
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100dvw;
    height: 100dvh;
    overflow: hidden;
  }

  picture {
    width: fit-content;
    height: min(50dvh, 65dvw);
  }
</style>
