<script lang="ts">
  import { resolve } from "$app/paths";

  const href: ResolvedPath = resolve("/");
</script>

<section>
  <h1 class="bold">404</h1>
  <h2 class="thin">I have my own problems to take care of.<a {href} class="accent">&nbsp;Here, this one is yours</a></h2>
  <p class="thin">- Wirt (the<span class="italic">&nbsp;Elder&nbsp;</span>Child)</p>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 70dvw;
    margin-top: 28dvh;
  }

  h1 {
    font-size: 3.4rem;
  }

  h2 {
    font-size: calc(0.25dvw + 1.1rem);
  }

  p {
    margin-top: .6dvh;
    text-align: right;
  }
</style>
