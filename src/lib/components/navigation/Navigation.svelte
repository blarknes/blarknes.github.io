<script lang="ts">
  import { base } from "$app/paths";
  import { IconButton } from "$components";
  import { CatIcon, GitHubIcon, HackTheBoxIcon, HomeIcon, LinkedInIcon, TryHackMeIcon, } from "$icons";
  import type { IconButtonInfo } from "$types";
  import { Page } from "$types";

  interface NavigationProps {
    page: Page;
  };

  let { page }: NavigationProps = $props();

  const pageOptions = new Map<Page, IconButtonInfo[]>([
    [Page.HOME, [
      { icon: LinkedInIcon  , target: "_blank", href: "https://www.linkedin.com/in/blarknes" },
      { icon: GitHubIcon    , target: "_blank", href: "https://github.com/blarknes" },
      { icon: CatIcon       , target: "_self",  href: `${base}/wonderland` },
      { icon: HackTheBoxIcon, target: "_blank", href: "https://app.hackthebox.com/profile/1419398" },
      { icon: TryHackMeIcon , target: "_blank", href: "https://tryhackme.com/p/blarknes" },
    ]],
    [Page.WONDERLAND, [
      { icon: HomeIcon, target: "_self", href: `${base}/` },
    ]]
  ]);

  const options = pageOptions.get(page) || [];
</script>

<nav>
  {#each options as info}
    <IconButton {info} />
  {/each}
</nav>

<style lang="scss">
  nav {
    display: flex;
    justify-content: center;
    gap: 14px;
  }
</style>
