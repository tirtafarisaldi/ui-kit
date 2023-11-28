import { ButtonProps } from '../Button';
import { ColorsType } from '../Colors';
import { TextProps } from '../Text';
import { ViewProps } from '../View';

export type ActiveTabsTypes = string | number;

export interface TabNavProps {
  title: TextProps;
  className?: string;
  style?: React.CSSProperties;
  hoverColor?: ColorsType;
  activeColor?: ColorsType;
  isActive?: boolean;
}

export interface TabProps extends ButtonProps {
  navProps: TabNavProps;
  className?: string;
  children: React.ReactNode;
  contentProps: {
    style?: React.CSSProperties;
  } & ViewProps;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  isActive: boolean;
  id: string;
  style?: React.CSSProperties;
}

