<script>
  import { base } from "$app/paths";
  import { FaHome } from "$icons";
</script>

<nav>
  <a href="{base}/"><FaHome /></a>
</nav>

<style lang="scss">
  nav {
    display: flex;
    justify-content: center;

    * {
      height: 26px;
    }
  }
</style>
