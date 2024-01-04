<script>
  import { load_lazily } from '$actions';
  import { base } from '$app/paths';
  import { white_rabbit_large, white_rabbit_small } from '$assets';
  import FaHome from 'svelte-icons/fa/FaHome.svelte';
</script>

<svelte:head>
  <title>wonderland</title>
</svelte:head>

<nav>
  <a href={base + '/'}><FaHome /></a>
</nav>

<article>
  <p>If <span class='thin italic accent'>you</span> don't know</p>
  <p>where <span class='bold underline'>you're</span> <span class='bold'>going,</span></p>
  <p>any <span class='bold emphasis'>&nbsp;road&nbsp;</span><span class='thin italic'>&nbsp;will</span></p>
  <p>take <span class='bold accent'>you there.</span></p>
  {#await load_lazily(white_rabbit_large)}
    <picture>
      <img src={white_rabbit_small} alt='white-rabbit' />
    </picture>
  {:then loaded}
    <picture>
      <img src={loaded} alt='white-rabbit' />
    </picture>
  {/await}
</article>

<style lang='scss'>
  nav {
    display: flex;
    justify-content: center;
    gap: 12px;
    * {
      height: 26px;
    }
  }
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 22vh;
    font-size: calc(.8vw + 1.2rem);
    p, span {
      font-family: 'Noto Sans JP', sans-serif;
    }
  }
  p {
    background-color: variables.$background-color-transparent;
  }
  picture {
    display: flex;
    width: fit-content;
    height: 15vh;
    margin-top: 8vh;
    img {
      height: 100%;
    }
  }
</style>
