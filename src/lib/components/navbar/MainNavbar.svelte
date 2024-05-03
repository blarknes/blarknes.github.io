<script>
  import { base } from '$app/paths';
  import FaCat from 'svelte-icons/fa/FaCat.svelte';
  import FaCube from 'svelte-icons/fa/FaCube.svelte';
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
  import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte';
  import IoIosCloudOutline from 'svelte-icons/io/IoIosCloudOutline.svelte';
</script>

<nav>
  <a href='https://www.linkedin.com/in/blarknes' target='_blank'><FaLinkedinIn /></a>
  <a href='https://github.com/blarknes' target='_blank'><FaGithub /></a>
  <a href={base + '/wonderland'}><FaCat /></a>
  <a href='https://app.hackthebox.com/profile/1419398' target='_blank'><FaCube /></a>
  <a href='https://tryhackme.com/p/blarknes' target='_blank'><IoIosCloudOutline /></a>
</nav>

<style lang='scss'>
  nav {
    display: flex;
    justify-content: center;
    gap: 12px;

    * {
      height: 26px;
    }
  }
</style>
