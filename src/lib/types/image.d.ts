declare global {
  type ImageInfo = {
    small: string;
    large: string;
    alt: string;
  };

  type ImageSrc = string | null;
}

export {};
