<script>
  import { sleep } from '$actions';
  import { onMount } from 'svelte';

  const DESCRIPTIONS = [
    ' a developer',
    ' nonchalant',
    ' a hacker',
    ' infinite',
    ' a lover',
    ' me',
  ];
  let description = DESCRIPTIONS[0];

  $: description = 'I am' + description;

  const typewriter = async () => {
    while (true) {
      for (let i = 0; i < DESCRIPTIONS.length; i++) {
        const current = DESCRIPTIONS[i];

        for (let pos = 0; pos <= current.length; pos++) {
          await sleep(100);
          description = current.slice(0, pos);
        }
        await sleep(500);

        if (i == DESCRIPTIONS.length - 1) {
          await sleep(1500);
        }

        for (let pos = current.length; pos >= 0; pos--) {
          await sleep(100);
          description = current.slice(0, pos);
        }
        await sleep(500);
      }
    }
  };

  onMount(typewriter);
</script>

<main>
  <h1>Hi! I am Vilas</h1>
  <h2>{description}&ZeroWidthSpace;</h2>
</main>

<style lang='scss'>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 28vh;
  }

  h1 {
    font-size: calc(0.8vw + 1.7rem);
    font-weight: bold;
  }

  h2 {
    padding-right: 2px;
    border-right: 2px solid;
    font-family: 'Noto Sans JP', sans-serif;
    animation: blink 0.8s infinite;
    line-height: 1.1;
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
</style>
