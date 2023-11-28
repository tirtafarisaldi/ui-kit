import { LinkProps as NextLinkProps } from 'next/link';

export interface LinkProps extends NextLinkProps {
  className?: string;
  children: React.ReactNode;
  target?: string;
  ariaLabel?: string;
  style?: React.CSSProperties
}
