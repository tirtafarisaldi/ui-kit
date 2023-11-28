import { ColorsType } from '../Colors';

export type TextSizeProps = '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type TextWeightProps = 'bold' | 'semibold' | 'normal' | 'light';
export type TextStyleProps = 'italic' | 'normal';

export interface TextProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  fontSize?: TextSizeProps;
  fontColor?: ColorsType;
  fontWeight?: TextWeightProps;
  fontStyle?: TextStyleProps;
  style?: React.CSSProperties;
  test?: string;
}
