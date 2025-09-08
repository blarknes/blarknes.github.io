import type { Component } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

declare global {
  type Icon = Component<SvelteHTMLElements["svg"]>;

  type IconButtonInfo = {
    icon: Icon;
    target: string;
    href: string;
  };
}

export {};
