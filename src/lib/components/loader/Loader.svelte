<script>
  import { sleep } from '$actions';
  import { onMount } from 'svelte';

  let loader_element;

  $: loader_element;

  const loader = async () => {
    try { await wait_font(); } catch (error) {}
    try { await sleep(500); } catch (error) {}
    disappear();
  }

  const wait_font = async () => {
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
        loader_element.style.opacity = opacity;
      } else {
        clearInterval(interval);
        loader_element.style.display = 'none';
      }
    }, 60);
  }

  onMount(loader);
</script>

<div bind:this={loader_element} />

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
