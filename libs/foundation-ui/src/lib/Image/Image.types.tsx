import * as React from 'react';
import { ColorsType } from '../Colors';
import { imageVariantMap } from './configs';
import { DefaultTheme } from '../Theme';
import { type ImageProps as NextImageProps } from 'next/image';

export type ImageVariant = keyof typeof imageVariantMap;

export type ObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

export type BackgroundRepeat =
  | 'repeat'
  | 'repeat-x'
  | 'repeat-y'
  | 'no-repeat'
  | 'space'
  | 'round'
  | 'initial'
  | 'inherit';

export type ImageMIMEType =
  | 'image/apng'
  | 'image/avif'
  | 'image/gif'
  | 'image/jpeg'
  | 'image/png'
  | 'image/svg+xml'
  | 'image/webp';

export type ImageProps = {
  isCDN?: boolean;
  style?: React.CSSProperties;
  blur?: number;
  width?: string | number;
  height?: string | number;
  src: string;
  children?: React.ReactNode;
  rounded?: boolean;
  defaultBackground?: string;
  heightMode?: ImageVariant | undefined;
  objectFit?: ObjectFit;
  backgroundRepeat?: BackgroundRepeat;
  backgroundColor?: string;
  alt?: string;
  borderWidth?: number;
  borderColor?: ColorsType;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  theme?: DefaultTheme;
  nextImageProps?: NextImageProps;
  fill?: boolean;
};
