import  { forwardRef } from 'react';
import type { BadgeProps } from './Badge.types';
import View from '../View/View'

const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const {
    as,
    children,
    style,
    variant,
    color = 'black',
    ...rest
  } = props;

  return (
    <View
      borderColor={variant === 'outlined' ? color : 'transparent'}
      backgroundColor={variant === 'filled' ? color : 'transparent'}
      borderRadius={16}
      ref={ref}
      paddingX="8px"
      display='inline-flex'
      flexAlignItems='center'
      height='20px'
      {...rest}
    >
      {children}
    </View>
  );
});

export default Badge;
