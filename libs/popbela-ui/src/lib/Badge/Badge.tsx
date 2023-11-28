import { forwardRef } from 'react';
import { StyledBadge } from './Badge.style';
import { BadgeProps } from './Badge.types';

const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const { children, variant = 'filled' } = props;
  return (
    <StyledBadge variant={variant} ref={ref}>
      {children}
    </StyledBadge>
  );
});

export default Badge;
