<script>
  import { sleep } from '$actions';
  import { onMount } from 'svelte';

  let loaderElement;

  $: loaderElement;

  const loader = async () => {
    try { await waitFont(); } catch (error) {}
    try { await sleep(500); } catch (error) {}
    disappear();
  }

  const waitFont = async () => {
    let result = false;
    let time = 50;
    for (let i = 0; i < 6; i++) {
      await sleep(time);
      result = document.fonts.check('1px Poppins', '1px Noto Sans JP');
      if (result) break;
      time *= 2;
    }
  }

  const disappear = async () => {
    let opacity = 1;
    let interval = setInterval(function () {
      if (opacity > 0) {
        opacity -= 0.1;
        loaderElement.style.opacity = opacity;
      } else {
        clearInterval(interval);
        loaderElement.style.display = 'none';
      }
    }, 60);
  }

  onMount(loader());
</script>

<div bind:this={loaderElement} />

<style lang='scss'>
  div {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100vw;
    height: 100dvh;
    background-color: variables.$background-color;
  }
</style>
