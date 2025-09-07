import { Page } from "$enums";
import type { LayoutLoad } from "./$types";

export const prerender: boolean = true;
export const trailingSlash: string = "never";

/**
 * Sets the initial app page on the root layout.
 */
export const load: LayoutLoad = async () => {
  return {
    page: Page.HOME,
  };
};
