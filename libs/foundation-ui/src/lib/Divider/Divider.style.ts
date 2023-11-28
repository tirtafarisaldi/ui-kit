import styled from '@emotion/styled';
import { DividerProps } from './Divider.types';
import { css } from '@emotion/react';
import { colors } from '../Colors';

export const StyledDivider = styled.span`
  ${(props: DividerProps) =>
    css`
      ${props.opacity ? `opacity: ${props.opacity};` : `opacity: 0.6;`}
      ${!props.children && handleVariant(props)}
      ${props.children && `
        padding: 0px 15px;
        z-index: 2;
        position: relative;
        &:before, &:after {
          ${props.thickness ? `height: ${props.thickness}px;` : `height: 1px;`}
          ${props.color ? `background: ${colors[props.color]};` : `background: #333;`}
          position: absolute;
          top: 50%;
          width: 100rem;
          content: " ";
        }
        &:before {
          right: 100%;
        }
        &:after {
          left: 100%;
        }
      `}
    `};
`;

export const StyledDividerWrapper = styled.div`
  ${(props: DividerProps) =>
    css`
      ${(props.children && props.align) ? `text-align: ${props.align};` : 'text-align: center;'};
      width: 100%;
      height: inherit;
      overflow: hidden;
    `};
`;

const handleVariant = (props: DividerProps) => {
  switch (props.type) {
    case 'vertical':
      return `
        display: block;
        align-self: stretch;
        ${props.thickness ? `border-width: ${props.thickness}px;` : `border-width: 0 thin 0 0;`}
        display: inline-flex;
        height: inherit;
        margin-left: -1px;
        max-height: 100%;
        max-width: 0px;
        vertical-align: text-bottom;
        width: 0px;
        flex: 1 1 100%;
        transition: inherit;
        border-style: solid;
      `;
    default:
      return `
        display: block;
        flex: 1 1 100%;
        height: 0px;
        max-height: 0px;
        transition: inherit;
        border-style: solid;
        ${props.thickness ? `border-width: ${props.thickness}px;` : `border-width: thin 0 0 0;`}
        color: ${props.color}
      `;
  }
};
