<script>
  import { Background, Loader } from '$components';
  import 'modern-normalize/modern-normalize.css';
  import '../lib/styles/main.scss';
</script>

<Loader />
<Background />

<main>
  <slot />
</main>

<style>
  main {
    margin: 8vh 0 0 12vw;
    font-size: 1.3em;
  }
</style>
