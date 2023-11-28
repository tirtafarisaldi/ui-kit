import { ColorsType } from '../Colors';

export type SwitchSize = 'lg' | 'md' | 'sm' | 'xs' | 'xxs';

export interface SwitchProps {
  size?: SwitchSize;
  backgroundColor?: ColorsType;
  sliderColor?: ColorsType;
  disabled?: boolean;
  checked?: boolean;
  style?: React.CSSProperties;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface InputSwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  switchSize?: SwitchSize;
  backgroundColor?: ColorsType;
}
