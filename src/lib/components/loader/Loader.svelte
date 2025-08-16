<script lang="ts">
  import { delay } from "$utils";
  import { onMount } from "svelte";
  import { RingLoader } from "svelte-loading-spinners";
  import { fade } from "svelte/transition";

  let visible = $state(true);

  const color = "#ebedf0";
  const size = "40";
  const unit = "px";
  const duration = "1.2s";

  function setup(): void {
    document.fonts.ready.then(fadeout);
  }

  async function fadeout(): Promise<void> {
    await delay();
    visible = false;
  }

  onMount(setup);
</script>

{#if visible}
  <section transition:fade={{ duration: 600 }}>
    <RingLoader {color} {size} {unit} {duration}  />
  </section>
{/if}

<style lang="scss">
  section {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100dvw;
    height: 100dvh;
    padding-top: 44dvh;
    background-color: palette.$background;
  }
</style>
