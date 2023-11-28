import { forwardRef } from 'react';
import NextLink from 'next/link';
import { LinkProps } from './Link.types';

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { children, target = '_self', ariaLabel = '' } = props;
  return (
    <NextLink ref={ref} aria-label={ariaLabel} target={target} {...props}>
      {children}
    </NextLink>
  );
});

export default Link;
