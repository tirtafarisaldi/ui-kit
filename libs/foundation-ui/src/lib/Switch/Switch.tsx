import type { SwitchProps } from './Switch.types';
import { StyledSwitch, StyledSpan, StyledInputSwitch } from './Switch.style';
import { forwardRef } from 'react';

const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  const {
    backgroundColor,
    sliderColor,
    disabled,
    checked,
    size,
    onChange,
    ...rest
  } = props;

  return (
    <StyledSwitch size={size}>
      <StyledInputSwitch
        type="checkbox"
        onChange={onChange}
        backgroundColor={backgroundColor}
        switchSize={size}
        disabled={disabled}
        checked={checked}
        {...rest}
      />
      <StyledSpan className="slider" sliderColor={sliderColor} size={size} />
    </StyledSwitch>
  );
});

export default Switch;
