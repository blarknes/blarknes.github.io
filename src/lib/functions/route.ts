import { resolve } from "$app/paths";
import { Page } from "$enums";
import { CatIcon, GitHubIcon, HackTheBoxIcon, HomeIcon, LinkedInIcon, TryHackMeIcon } from "$icons";

/**
 * The respective navigation bar center route based on the page.
 */
const routes: Partial<Record<Page, IconButtonInfo>> = {
  [Page.HOME]:       { icon: CatIcon,  target: "_self", href: resolve("/wonderland") },
  [Page.WONDERLAND]: { icon: HomeIcon, target: "_self", href: resolve("/") },
};

/**
 * The list of pages that don't have a navigation bar.
 */
const blacklist: Page[] = [
  Page.NOT_FOUND,
];

/**
 * Get the list of items for the navigation bar based on the current page.
 *
 * @param page the current displayed page
 * @returns The list of items for the navigation bar or empty if the page is blacklisted.
 */
export function getNavigationItems(page: Page): IconButtonInfo[] {
  if (blacklist.includes(page)) {
    return [];
  }

  const center: IconButtonInfo[] =  routes[page] ? [routes[page]] : [];

  const items: IconButtonInfo[] = [
    { icon: LinkedInIcon,   target: "_blank", href: "https://www.linkedin.com/in/blarknes" },
    { icon: GitHubIcon,     target: "_blank", href: "https://github.com/blarknes" },
    ...center,
    { icon: HackTheBoxIcon, target: "_blank", href: "https://app.hackthebox.com/profile/1419398" },
    { icon: TryHackMeIcon,  target: "_blank", href: "https://tryhackme.com/p/blarknes" },
  ];

  return items;
}
