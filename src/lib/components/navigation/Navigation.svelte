<script lang="ts">
  import { base } from "$app/paths";
  import { IconButton } from "$components";
  import { CatIcon, GitHubIcon, HackTheBoxIcon, HomeIcon, LinkedInIcon, TryHackMeIcon, } from "$icons";
  import type { IconButtonInfo } from "$types";
  import { Page } from "$types";

  type NavigationProps = {
    page: Page;
  };

  let { page }: NavigationProps = $props();

  const pageOptions: Partial<Record<Page, IconButtonInfo>> = {
    [Page.HOME]:       { icon: CatIcon,  target: "_self", href: `${base}/wonderland` },
    [Page.WONDERLAND]: { icon: HomeIcon, target: "_self", href: `${base}/` },
  };

  const currentOption: IconButtonInfo[] = pageOptions[page] ? [pageOptions[page]] : [];

  const options: IconButtonInfo[] = [
    { icon: LinkedInIcon,   target: "_blank", href: "https://www.linkedin.com/in/blarknes" },
    { icon: GitHubIcon,     target: "_blank", href: "https://github.com/blarknes" },
    ...currentOption,
    { icon: HackTheBoxIcon, target: "_blank", href: "https://app.hackthebox.com/profile/1419398" },
    { icon: TryHackMeIcon,  target: "_blank", href: "https://tryhackme.com/p/blarknes" },
  ];
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
