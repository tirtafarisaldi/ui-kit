import { ButtonProps } from './Button.types';
import { StyledButton } from './Button.style';
import { forwardRef } from 'react';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children } = props;
  return (
    <StyledButton ref={ref} {...props}>
      <span>{children}</span>
    </StyledButton>
  );
});

export default Button;
