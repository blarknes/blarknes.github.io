<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>not found</title>
</svelte:head>

<main>
  <section>
    <h1 class="bold">404</h1>
    <h2>I have my own problems to take care of.<a href='{base}/' class="accent">&nbsp;Here, this one is yours</a></h2>
    <p>- Wirt (the<span class="italic">&nbsp;Elder&nbsp;</span>Child)</p>
  </section>
</main>

<style lang='scss'>
  main {
    display: flex;
    justify-content: center;
    margin-top: 30vh;
  }
  section {
    max-width: 70vw;
    & > * {
      background-color: variables.$background-color-transparent;
    }
  }
  h1, h2 {
    text-align: center;
  }
  h1 {
    font-size: 4rem;
  }
  a {
    color: variables.$text-color-3;
    &:hover {
      color: variables.$text-color-2;
    }
  }
  p {
    margin-top: 1vh;
    text-align: right;
  }
</style>
