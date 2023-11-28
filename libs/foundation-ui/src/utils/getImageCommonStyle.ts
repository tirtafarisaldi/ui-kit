import { css } from '@emotion/react';
import {DefaultTheme} from '..';
import {colors} from '../lib/Colors';
import {ImageProps} from '../lib/Image/Image.types';

const getImageCommonStyle = (props: ImageProps, theme?: DefaultTheme) => css`
  ${props.blur && props.src
    ? css`
        filter: blur(${props.blur}px);
      `
    : ''};

  ${props.rounded
    ? css`
        border-radius: 6px;
      `
    : ''};
  ${props.borderRadius || props.borderRadius === 0
    ? css`
        overflow: hidden;
        border-radius: ${props.borderRadius}px;
      `
    : ''};
  ${props.borderTopLeftRadius || props.borderTopLeftRadius === 0
    ? css`
        border-top-left-radius: ${props.borderTopLeftRadius}px;
      `
    : ''};
  ${props.borderTopRightRadius || props.borderTopRightRadius === 0
    ? css`
        border-top-right-radius: ${props.borderTopRightRadius}px;
      `
    : ''};
  ${props.borderTopLeftRadius || props.borderTopLeftRadius === 0
    ? css`
        border-top-left-radius: ${props.borderTopLeftRadius}px;
      `
    : ''};
  ${props.borderBottomLeftRadius || props.borderBottomLeftRadius === 0
    ? css`
        border-bottom-left-radius: ${props.borderBottomLeftRadius}px;
      `
    : ''};
  ${props.borderBottomRightRadius || props.borderBottomRightRadius === 0
    ? css`
        border-bottom-right-radius: ${props.borderBottomRightRadius}px;
      `
    : ''};
  ${props.borderWidth || props.borderColor
    ? css`
        border-width: ${props.borderWidth ? props.borderWidth : 1}px;
        border-style: solid;
        border-color: ${props.borderColor
          ? colors[props.borderColor]
          : theme
          ? colors[theme.common.component.outline]
          : ''};
      `
    : ''};
  ${props.backgroundColor || props.defaultBackground
    ? css`
        background-color: ${props.backgroundColor ?? props.defaultBackground};
      `
    : ''}
  ${props.objectFit
    ? css`
        object-fit: ${props.objectFit};
      `
    : ''}
`;

export default getImageCommonStyle;