<script>
  import { load_lazily } from '$actions';
  import { background_large, background_small } from '$assets';
</script>

<main>
  {#await load_lazily(background_large)}
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
    position: absolute;
    justify-content: end;
    align-items: end;
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
