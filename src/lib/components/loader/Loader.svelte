<script>
  import { sleep } from "$actions";
  import { onMount } from "svelte";

  var loader;

  $: loader;

  async function runLoader() {
    try { await waitFont(); } catch (error) {}
    try { await sleep(500); } catch (error) {}

    disappear();
  }

  async function waitFont() {
    let result = false;
    let time = 50;

    for (let i = 0; i < 6; i++) {
      await sleep(time);

      result = document.fonts.check("1px Poppins", "1px Noto Sans JP");
      if (result) break;

      time *= 2;
    }
  }

  async function disappear() {
    let opacity = 1;
    let interval = setInterval(function () {
      if (opacity > 0) {
        opacity -= 0.1;
        loader.style.opacity = opacity;
      } else {
        clearInterval(interval);
        loader.style.display = "none";
      }
    }, 50);
  }

  onMount(runLoader);
</script>

<div bind:this={loader} />

<style lang="scss">
  div {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100dvw;
    height: 100dvh;
    background-color: colors.$background;
  }
</style>
