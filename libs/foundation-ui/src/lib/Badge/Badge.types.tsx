import { ColorsType } from '../Colors';
import { ViewProps } from '../View';

export type BadgeVariants = 'outlined' | 'filled';
export interface BadgeProps extends ViewProps {
  children: React.ReactNode;
  as?: React.ElementType;
  style?: React.CSSProperties;
  color?: ColorsType;
  variant: BadgeVariants;
}
