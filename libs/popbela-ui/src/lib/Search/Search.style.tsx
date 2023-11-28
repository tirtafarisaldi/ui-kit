import styled from '@emotion/styled';
import { SpanProps, SearchProps } from './Search.types';
import { css } from '@emotion/react';
import { Button, View, colors, valueToUnit } from 'foundation-ui';
export const StyledBtn = styled(Button)`
  background-color: transparent;
  height: 100%;
  width: 100%;
  border: unset;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
`;
export const StyledSearch = styled(View)`
  ${(props: SearchProps) => css`
    display: flex;
    box-sizing: border-box;
    position: relative;
    ${props.width &&
    css`
      width: ${valueToUnit(props.width)};
    `};
    ${props.height &&
    css`
      height: ${valueToUnit(props.height)};
    `};
    & > input {
      transition: all ease-in-out 0.3s;
    }
    & > input:focus-visible {
      ${props.backgroundBtn &&
      css`
        border-color: ${colors[props.backgroundBtn]};
      `};
    }
  `}
`;
export const StyledSpan = styled.span`
  ${(props: SpanProps) => css`
    border-top-right-radius: ${valueToUnit(props.borderRadius)};
    border-bottom-right-radius: ${valueToUnit(props.borderRadius)};
  `}
  ${(props) =>
    css`
      ${props.backgroundBtn &&
      css`
        background-color: ${colors[props.backgroundBtn]};
      `}
    `}
`;
