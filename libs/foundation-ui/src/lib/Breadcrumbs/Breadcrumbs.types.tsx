import { LinkProps } from 'next/link';
import { IconProps } from '../Icon';
import { TextProps } from '../Text';

export type BreadcrumbsItemProps = {
  label: TextProps;
  link: LinkProps;
};

export interface BreadcrumbsProps {
  items: Array<BreadcrumbsItemProps>;
  separatorIcon: IconProps;
}
