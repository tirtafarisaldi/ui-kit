import { ImageLoaderTypes } from "../lib/Image";
export const imageLoader = ({ src, width = 750 }: ImageLoaderTypes) => {
  return `${src}?width=${width}&format=webp&w=${width}`;
};
