<script>
  import { load_lazily } from '$actions';
  import { background_large, background_small } from '$assets';
</script>

{#await load_lazily(background_large)}
  <picture>
    <img src={background_small} alt='background' />
  </picture>
{:then loaded}
  <picture>
    <img src={loaded} alt='background' />
  </picture>
{/await}

<style lang='scss'>
  picture {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100vw;
    height: 90vh;
    scale: 1;
    overflow: hidden;
  }
</style>
