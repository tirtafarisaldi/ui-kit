import type { InputProps } from './Input.types';
import { StyledInput } from './Input.style';
import { composeRef } from '../../utils/composeRef';
import { forwardRef, useRef } from 'react';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    disabled,
    id,
    bordered = true,
    onPressEnter,
    onKeyDown,
    ...rest
  } = props;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onPressEnter && e.key === 'Enter' && e.currentTarget.value) {
      onPressEnter(e.currentTarget.value);
    }
    onKeyDown?.(e);
  };
  return (
    <StyledInput
      ref={composeRef(ref, inputRef)}
      id={id}
      disabled={disabled}
      bordered={bordered}
      onKeyDown={handleKeyDown}
      {...rest}
    />
  );
});

export default Input;
