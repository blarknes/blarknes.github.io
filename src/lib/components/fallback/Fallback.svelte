<script>
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>not found</title>
</svelte:head>

<main>
  <section>
    <h1 class="bold">404</h1>
    <h2 class="thin">I have my own problems to take care of.<a href="{base}/" class="accent">&nbsp;Here, this one is yours</a></h2>
    <p class="thin">- Wirt (the<span class="italic">&nbsp;Elder&nbsp;</span>Child)</p>
  </section>
</main>

<style lang="scss">
  main {
    display: flex;
    justify-content: center;
    margin-top: 30dvh;
  }

  section {
    max-width: 70dvw;
  }

  h1 {
    font-size: 4rem;
  }

  h1, h2 {
    text-align: center;
  }

  a {
    color: colors.$text-3;

    &:hover {
      color: colors.$text-2;
    }
  }

  p {
    margin-top: 2dvh;
    text-align: right;
  }
</style>
