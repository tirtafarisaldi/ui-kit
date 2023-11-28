import { ImageProps as NextImageProps } from 'next/image';
import { ViewProps } from 'foundation-ui';

export type ImageType = 'default' | 'article';

export type ImageLoaderProps = NextImageProps & {
  // Gunakan value false apabila komponent ini digunakan untuk image static
  noLoader?: boolean;
  // value fallback komponen
  fallback?: string;
  // digunakan untuk debuging komponent
  debug?: string;
  alt?: string;
  srcBlur?: string;
  src: string;
  type?: ImageType;
  priorityImg?: boolean;
};

export type ImageLoaderTypes = {
  src: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'png' | string;
};

type DataImageArticle = {
  sourceName: string;
  imageUrl: string;
  title: string;
  alt?: string;
};

type ImageDefaultProps = ViewProps &
  Pick<DataImageArticle, 'alt'> & {
    background?: 'white' | 'black' | 'inherite' | string; // Background pada card
    heightImg?: string | number; // height image
    widthImg?: string | number; // width image
    paddingesc?: string | number; // Padding yang terdapat pada container deskripsi
    titlecolor?: string; // Warna judul artike
    priorityImg?: boolean; // Priority rendering;
    loadingImg?: 'lazy' | 'eager'; // type rendering
    imageUrl?: string,
  };

export type ImageProps = Omit<
  ImageDefaultProps,
  'paddingDesc' | 'titleColor' | 'background'
> &
  Pick<ImageLoaderProps, 'srcBlur'> & {
    sourcePosition?: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft';
    type: ImageType;
    sourceData?: DataImageArticle; // tidak perlu diisi ketika default image
  };
