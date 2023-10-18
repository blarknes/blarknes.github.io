<script>
  import { sleep } from '$actions';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import FaCube from 'svelte-icons/fa/FaCube.svelte';
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
  import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte';
  import IoIosCloudOutline from 'svelte-icons/io/IoIosCloudOutline.svelte';

  const DESCRIPTIONS = [ 'I am a developer', 'I am nonchalant', 'I am a hacker', 'I am a lover', 'I am me' ];
  let description = DESCRIPTIONS[0];

  $: description;

  const typewriter = async () => {
    while (true) {
      for (let i = 0; i < DESCRIPTIONS.length; i++) {
        const current = DESCRIPTIONS[i];

        for (let pos = 0; pos <= current.length; pos++) {
          await sleep(100);
          description = current.slice(0, pos);
        }
        await sleep(500);

        for (let pos = current.length; pos >= 0; pos--) {
          await sleep(100);
          description = current.slice(0, pos);
        }
        await sleep(500);
      }
      await sleep(1000);
    }
  }

  onMount(typewriter);
</script>

<svelte:head>
  <title>homepage</title>
</svelte:head>

<nav>
  <a href={base + '/wonderland'}>wonderland</a>
</nav>

<main>
  <h1>Hi! I am Vilas</h1>
  <h2>{description}&ZeroWidthSpace;</h2>
</main>

<footer>
  <a href='https://www.linkedin.com/in/blarknes' target='_blank'><FaLinkedinIn /></a>
  <a href='https://github.com/blarknes' target='_blank'><FaGithub /></a>
  <a href='https://app.hackthebox.com/profile/1419398' target='_blank'><FaCube /></a>
  <a href='https://tryhackme.com/p/blarknes' target='_blank'><IoIosCloudOutline /></a>
</footer>

<style lang='scss'>
  nav {
    height: 32vh;
  }
  main {
    height: 46vh;
  }
  footer {
    display: flex;
    align-items: flex-end;
    gap: 12px;
    * {
      height: 26px;
    }
  }
  h1 {
    font-size: calc(0.8vw + 1.7rem);
    font-weight: bold;
  }
  h2 {
    width: fit-content;
    border-right: 2px solid;
    font-family: 'Noto Sans JP', sans-serif;
    animation: blink 0.6s infinite;
    line-height: 1;
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
</style>
