import { Page } from "$enums";
import type { LayoutLoad } from "./$types";

/**
 * Sets the current app page on the root layout.
 */
export const load: LayoutLoad = async () => {
  const info: LayoutInfo = {
    page: Page.NOT_FOUND,
  };

  return info;
};
