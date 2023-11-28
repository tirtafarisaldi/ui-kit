import { type ColorsType } from '../Colors';
import { depthMap } from './configs';

// TODO: move to Text lib
export type TextAlign = 'left' | 'center' | 'right' | 'justify';

// TODO: move to Text lib
export type WordBreak =
  | 'normal'
  | 'break-all'
  | 'keep-all'
  | 'break-word'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset';

export type Overflow = 'unset' | 'scroll' | 'visible' | 'auto' | 'hidden';

export type Opacity =
  | 0
  | 0.1
  | 0.2
  | 0.3
  | 0.4
  | 0.5
  | 0.6
  | 0.7
  | 0.8
  | 0.9
  | 1;

export type JustifyContent =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'flex-start'
  | 'flex-end';

export type AlignItems =
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'baseline';

export type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';

export type VerticalAlign =
  | 'top'
  | 'middle'
  | 'bottom'
  | 'text-bottom'
  | 'text-top'
  | 'baseline';

export type HorizontalAlign = 'right' | 'middle' | 'left';

export type BorderWidth = 'none' | 'hairline' | 'default' | 'bold';

export type Depth = keyof typeof depthMap;

export type Display =
  | 'flex'
  | 'block'
  | 'none'
  | 'inline'
  | 'inline-block'
  | 'inline-flex'
  | 'table'
  | 'table-cell';

export type Position = 'static' | 'absolute' | 'fixed' | 'relative' | 'sticky';

export type Float = 'right' | 'left' | 'clear';

export type Cursor =
  | 'alias'
  | 'all-scroll'
  | 'auto'
  | 'cell'
  | 'context-menu'
  | 'col-resize'
  | 'copy'
  | 'crosshair'
  | 'e-resize'
  | 'ew-resize'
  | 'grab'
  | 'grabbing'
  | 'help'
  | 'move'
  | 'n-resize'
  | 'ne-resize'
  | 'nesw-resize'
  | 'ns-resize'
  | 'nw-resize'
  | 'nwse-resize'
  | 'no-drop'
  | 'none'
  | 'not-allowed'
  | 'pointer'
  | 'progress'
  | 'row-resize'
  | 's-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'text'
  | 'vertical-text'
  | 'w-resize'
  | 'wait'
  | 'zoom-in'
  | 'zoom-out';

export type BoxSizing = 'content-box' | 'border-box' | 'initial' | 'inherit';

type RowGap = string | number;
type ColumnGap = string | number;

export interface ViewProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  minWidth?: string | number;
  maxHeight?: string | number;
  minHeight?: string | number;
  opacity?: Opacity;
  overflow?: Overflow;
  margin?: number | number[] | string | string[] | 'auto';
  marginTop?: number | string | 'auto';
  marginBottom?: number | string | 'auto';
  marginLeft?: number | string | 'auto';
  marginRight?: number | string | 'auto';
  marginY?: number | string | 'auto';
  marginX?: number | string | 'auto';
  padding?: number | number[] | string | string[] | 'auto';
  paddingTop?: number | string | 'auto';
  paddingBottom?: number | string | 'auto';
  paddingLeft?: number | string | 'auto';
  paddingRight?: number | string | 'auto';
  paddingY?: number | string | 'auto';
  paddingX?: number | string | 'auto';
  flex?: string | number;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string;
  flexDirection?: Direction;
  flexJustifyContent?: JustifyContent;
  flexAlignItems?: AlignItems;
  flexAlignSelf?: AlignItems;
  flexWrap?: Wrap;
  flexGap?: number | string | [RowGap, ColumnGap];
  depth?: Depth;
  color?: ColorsType;
  backgroundColor?: ColorsType;
  backgroundSrc?: string;
  bordered?: boolean;
  boxShadow?: string;
  boxSizing?: BoxSizing;
  filled?: boolean;
  borderWidth?: number;
  borderColor?: ColorsType;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomColor?: ColorsType;
  borderBottomWidth?: number;
  verticalAlign?: VerticalAlign;
  horizontalAlign?: HorizontalAlign;
  textAlign?: TextAlign;
  display?: Display;
  position?: Position;
  float?: Float;
  zIndex?: number;
  cursor?: Cursor;
  as?: React.ElementType;
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  wordBreak?: WordBreak;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseOver?: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * be careful using inline styles, consider using a css prop https://styled-components.com/docs/api#css-prop on repeating elements
   */
  style?: React.CSSProperties;
}
