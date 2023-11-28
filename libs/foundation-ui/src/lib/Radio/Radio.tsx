import type { RadioProps } from './Radio.types';
import { StyledInputRadio } from './Radio.style';
import { handleFontSize } from '../Text/Text.style';
import { View } from '../View';
import { forwardRef } from 'react';

const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { value, disabled, label, accentColor, fontSize, ...rest } = props;

  return (
    <View
      ref={ref}
      display="inline-flex"
      style={{ fontSize: handleFontSize(fontSize || 'md') }}
    >
      <StyledInputRadio
        type="radio"
        value={value}
        disabled={disabled}
        accentColor={accentColor}
        {...rest}
      />
      <label>{label}</label>
    </View>
  );
});

export default Radio;
