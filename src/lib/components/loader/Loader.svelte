<script>
  import { sleep } from "$actions";
  import { onMount } from "svelte";
  import { Shadow } from "svelte-loading-spinners";

  var loader;
  $: loader;

  const color = "#ebedf0";
  const size = "40";
  const unit = "px";

  async function runLoader() {
    try {
      await waitFont();
    } catch (error) {}

    await sleep(500);

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

<div bind:this={loader}>
  <Shadow {color} {size} {unit} />
</div>

<style lang="scss">
  div {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100dvw;
    height: 100dvh;
    padding-top: 42dvh;
    background-color: colors.$background;
  }
</style>
