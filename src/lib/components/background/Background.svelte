<script>
  import { preload } from '$actions';
  import { background_large, background_small } from '$assets';
</script>

<main>
  {#await preload(background_large)}
    <picture>
      <img src={background_small} alt='background' />
    </picture>
  {:then loaded}
    <picture>
      <img src={loaded} alt='background' />
    </picture>
  {/await}
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
    img {
      height: 100%;
    }
  }
</style>
