/// <reference types="svelte" />
/// <reference types="vite/client" />
/// <reference types="unplugin-icons/types/svelte" />

import type { ResolvedPathname } from "$app/types";
import type { Component } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

declare global {
  // layout
  type LayoutInfo = {
    page: Page;
  }

  // route
  type Path = URL & {
    pathname: ResolvedPath
  };

  type ResolvedPath = ResolvedPathname;

  // image
  type ImageInfo = {
    small: string;
    large: string;
    alt: string;
  };

  type ImageSrc = string | null;

  // icon
  type Icon = Component<SvelteHTMLElements["svg"]>;

  type IconButtonInfo = {
    icon: Icon;
    target: string;
    href: string;
  };
}

export {};
