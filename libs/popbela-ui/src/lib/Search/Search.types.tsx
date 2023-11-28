import { ColorsType, InputProps } from 'foundation-ui';

export type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';

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

export interface SearchProps extends InputProps {
  backgroundBtn?: ColorsType;
  onSearch?: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => void;
  onPressEnter?: (
    value: string,
    event?: React.KeyboardEventHandler<HTMLInputElement>
  ) => void;
  onSubmit?: React.FormEventHandler;
}
export interface SpanProps {
  backgroundBtn?: ColorsType;
  borderRadius?: number;
}
