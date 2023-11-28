import { ViewProps } from '../View';

export type BorderStyle =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'
  | 'initial'
  | 'inherit';

export type InputProps = Omit<
  ViewProps,
  | 'as'
  | 'children'
  | 'opacity'
  | 'overflow'
  | 'display'
  | 'position'
  | 'float'
  | 'zIndex'
  | 'cursor'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'wordBreak'
  | 'filled'
  | 'depth'
  | 'qaTag'
  | 'flex'
  | 'flexGrow'
  | 'flexShrink'
  | 'flexBasis'
  | 'flexDirection'
  | 'flexJustifyContent'
  | 'flexAlignItems'
  | 'flexAlignSelf'
  | 'flexWrap'
  | 'flexGap'
  | 'depth'
  | 'backgroundColor'
  | 'backgroundSrc'
  | 'boxShadow'
  | 'boxSizing'
  | 'verticalAlign'
  | 'horizontalAlign'
  | 'textAlign'
  | 'color'
  | 'onClick'
> & {
  name?: string;
  disabled?: boolean;
  border?: string;
  placeholder?: string;
  borderStyle?: BorderStyle;
  borderBottomWidth?: number;
  borderTopWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  fontSize?: number | string;
  onPressEnter?: (
    value: string,
    event?: React.KeyboardEventHandler<HTMLInputElement>
  ) => void;
  onChange?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};
