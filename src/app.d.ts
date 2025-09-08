/// <reference types="svelte" />
/// <reference types="vite/client" />
/// <reference types="unplugin-icons/types/svelte" />

import type { ResolvedPathname } from "$app/types";

declare global {
  type LayoutInfo = {
    page: Page;
  }

  type Path = URL & {
    pathname: ResolvedPath
  };

  type ResolvedPath = ResolvedPathname;
}

export {};
