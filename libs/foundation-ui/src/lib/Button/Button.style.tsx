import styled from '@emotion/styled';
import { ButtonProps } from './Button.types';
import { css } from '@emotion/react';

export const StyledButton = styled.button`
  ${(props: ButtonProps) =>
    css`
      padding: ${handlePadding(props.size || 'md')};
      cursor: pointer;
    `};
`;

const handlePadding = (size: string) => {
  switch (size) {
    case 'xs':
      return '0.2rem';
    case 'sm':
      return '0.3rem';
    case 'lg':
      return '0.6rem';
    case 'xl':
      return '0.8rem';
    default:
      return '0.4rem';
  }
};
