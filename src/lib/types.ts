import type { Component } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

export enum Page {
  HOME = "home",
  WONDERLAND = "wonderland",
  NOT_FOUND = "not found",
}

export type MetaTag = {
  name: string;
  content: string;
};

export type ImageInfo = {
  small: string;
  large: string;
  alt: string;
};

export type ImageSrc = string | null;

export type Icon = Component<SvelteHTMLElements["svg"]>;

export type IconButtonInfo = {
  icon: Icon;
  target: string;
  href: string;
};

export type AfterDeleted = {
  blink: number;
};
