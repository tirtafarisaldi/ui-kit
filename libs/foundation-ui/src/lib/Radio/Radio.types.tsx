import { ColorsType } from '../Colors';
import { TextSizeProps } from '../Text/Text.types';

export interface RadioProps {
  value?: string;
  disabled?: boolean;
  label?: string;
  fontSize?: TextSizeProps;
  accentColor?: ColorsType;
}
