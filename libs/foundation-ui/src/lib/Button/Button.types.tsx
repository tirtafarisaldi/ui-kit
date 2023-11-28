import { SerializedStyles } from '@emotion/react';

export type ButtonSizeProps = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export interface StyledButtonProps {
  size: ButtonSizeProps;
}
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: ButtonSizeProps;
  disabled?: boolean;
  style?: React.CSSProperties;
  css?: SerializedStyles;
  onClick?: (prop: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOver?: (prop: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOut?: (prop: React.MouseEvent<HTMLButtonElement>) => void;
}
