import { ColorsType } from '../Colors';

export type DividerTypeProps = 'horizontal' | 'vertical';

export type DividerTextAlign = 'center' | 'start' | 'end';

export interface DividerProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  color?: ColorsType;
  type?: DividerTypeProps;
  opacity?: string | number;
  thickness?: string | number;
  align?: DividerTextAlign;
}
