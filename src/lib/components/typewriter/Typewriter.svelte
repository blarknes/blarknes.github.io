<script>
  import { sleep } from "$actions";
  import { onMount } from "svelte";

  const DESCRIPTIONS = [
    " a developer",
    " nonchalant",
    " a hacker",
    " infinite",
    " a lover",
    " me",
  ];

  var description = DESCRIPTIONS[0];

  $: description = "I am" + description;

  async function typewriter() {
    while (true) {
      for (var i = 0; i < DESCRIPTIONS.length; i++) {
        const current = DESCRIPTIONS[i];

        for (var pos = 0; pos <= current.length; pos++) {
          await sleep(120);
          description = current.slice(0, pos);
        }

        await sleep(500);

        if (i == DESCRIPTIONS.length - 1) {
          await sleep(1500);
        }

        for (var pos = current.length; pos >= 0; pos--) {
          await sleep(120);
          description = current.slice(0, pos);
        }

        await sleep(500);
      }
    }
  };

  onMount(typewriter);
</script>

<main>
  <h1 class="bold">Hi! I am Vilas</h1>
  <h2 class="thin">{description}&ZeroWidthSpace;</h2>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 28dvh;
  }

  h1 {
    font-size: calc(0.8dvw + 1.7rem);
  }

  h2 {
    padding-right: 3px;
    border-right: 1px solid;
    font-family: "Noto Sans JP", sans-serif;
    animation: blink 0.8s infinite;
    line-height: 1.1;
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
</style>
