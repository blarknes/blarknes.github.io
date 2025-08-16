<script lang="ts">
  import { Navigation } from "$components";
  import { Page } from "$enums";
  import { TypeWriter } from "svelte-typewrite";

  type AfterDeleted = {
    blink: number;
  };

  const page = Page.HOME;

  const texts = [
    " a developer",
    " the villain",
    " nonchalant",
    " a hacker",
    " infinite",
    " a lover",
    " me",
  ];

  const afterDeleted: AfterDeleted = {
    blink: 2,
  };
</script>

<svelte:head>
  <title>{page}</title>
</svelte:head>

<Navigation {page} />

<h1 class="bold">Hello! I am Vilas</h1>
<p>I am <TypeWriter {texts} {afterDeleted} /></p>

<style lang="scss">
  h1 {
    margin-top: 27dvh;
    font-size: calc(0.8dvw + 1.7rem);
  }

  p {
    font-size: calc(0.25dvw + 1.1rem);
  }
</style>
