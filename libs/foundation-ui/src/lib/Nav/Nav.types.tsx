import { LinkProps } from 'next/link';
import { IconProps } from '../Icon';
import { TextProps } from '../Text';
import { ColorsType } from '../Colors';
import { ViewProps } from '../View';
import { SerializedStyles } from '@emotion/react';


export type behaviorOptions = 'hover' | 'click'
export type NavItemProps = {
  label: TextProps;
  type?: 'dropdown' | 'default';
  link: LinkProps;
  suffixIcon?: IconProps;
  prefixIcon?: IconProps;
  children?: React.ReactNode;
  behaviorDropdown?: behaviorOptions;
};
export type NavChildItemProps = {
  label: TextProps;
  link: LinkProps;
};

export interface NavProps extends ViewProps {
  items: Array<NavItemProps>;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  hoverColor?: ColorsType;
  activeColor?: ColorsType;
  color?: ColorsType;
  css?: SerializedStyles;
  behaviorDropdown: behaviorOptions;
}

export interface NavItemLinkProps extends Pick<NavItemProps, 'link' | 'label'> {  
  pathname: string;
}  