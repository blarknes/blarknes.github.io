<script>
  import { sleep } from '$actions';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import FaCat from 'svelte-icons/fa/FaCat.svelte';
  import FaCube from 'svelte-icons/fa/FaCube.svelte';
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
  import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte';
  import IoIosCloudOutline from 'svelte-icons/io/IoIosCloudOutline.svelte';

  const DESCRIPTIONS = [
    ' a developer',
    ' nonchalant',
    ' a hacker',
    ' a lover',
    ' me'
  ];
  let description = DESCRIPTIONS[0];

  $: {
    description = "I am" + description;
  };

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
  }

  onMount(typewriter);
</script>

<svelte:head>
  <title>homepage</title>
</svelte:head>

<nav>
  <a href='https://www.linkedin.com/in/blarknes' target='_blank'><FaLinkedinIn /></a>
  <a href='https://github.com/blarknes' target='_blank'><FaGithub /></a>
  <a href={base + '/wonderland'}><FaCat /></a>
  <a href='https://app.hackthebox.com/profile/1419398' target='_blank'><FaCube /></a>
  <a href='https://tryhackme.com/p/blarknes' target='_blank'><IoIosCloudOutline /></a>
</nav>

<main>
  <h1>Hi! I am Vilas</h1>
  <h2>{description}&ZeroWidthSpace;</h2>
</main>

<style lang='scss'>
  nav {
    display: flex;
    justify-content: center;
    gap: 12px;
    * {
      height: 26px;
    }
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 28vh;
  }
  h1 {
    font-size: calc(.8vw + 1.7rem);
    font-weight: bold;
  }
  h2 {
    width: fit-content;
    padding-right: 2px;
    border-right: 2px solid;
    font-family: 'Noto Sans JP', sans-serif;
    animation: blink .8s infinite;
    line-height: 1.1;
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
</style>
