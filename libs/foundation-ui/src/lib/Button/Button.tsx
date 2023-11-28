import * as React from 'react';
import { StyledButton } from './Button.style';
import { ButtonProps } from './Button.types';
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      disabled = false,
      size = 'md',
      onClick,
      onMouseOut,
      css,
      onMouseOver,
    } = props;
    return (
      <StyledButton
        ref={ref}
        onClick={onClick}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        size={size}
        css={css}
        disabled={disabled}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
