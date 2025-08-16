<script lang="ts">
  import { ImageLoader } from "$components";
  import { BackgroundLarge, BackgroundSmall } from "$images";

  const small = BackgroundSmall;
  const large = BackgroundLarge;
  const alt = "background";

  const image: ImageInfo = { small, large, alt };
</script>

<section>
  <picture>
    <ImageLoader {image} />
  </picture>
</section>

<style lang="scss">
  section {
    display: flex;
    align-items: end;
    justify-content: end;
    position: absolute;
    top: 0;
    z-index: -1;
    width: 90dvw;
    height: 100dvh;
    overflow: hidden;
  }

  picture {
    width: fit-content;
    height: min(50dvh, 65dvw);
  }
</style>
