import styled from '@emotion/styled';
import { TextProps } from './Text.types';
import { colors } from '../Colors';
import { css } from '@emotion/react';

export const StyledText = styled.text`
  ${(props: TextProps) =>
    css`
      font-size: ${handleFontSize(props.fontSize || 'md')};
      font-weight: ${handleFontWeight(props.fontWeight || 'normal')};
      font-style: ${props.fontStyle};
      color: ${colors[props.fontColor || 'black']};
    `};
`;

export const handleFontSize = (size: string) => {
  switch (size) {
    case 'xs':
      return '0.75rem';
    case 'sm':
      return '0.875rem';
    case 'lg':
      return '1.125rem';
    case 'xl':
      return '1.25rem';
    case '2xl':
      return '1.5rem';
    case '3xl':
      return '1.875rem';
    default:
      return '1rem';
  }
};
const handleFontWeight = (weight: string) => {
  switch (weight) {
    case 'bold':
      return '700';
    case 'semibold':
      return '600';
    case 'light':
      return '300';
    default:
      return '400';
  }
};
