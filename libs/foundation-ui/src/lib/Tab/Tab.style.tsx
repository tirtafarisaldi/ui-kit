import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ViewProps } from '../View';
import { colors } from '../Colors';
import { valueToCssShorthandProperties } from '../../utils/valueToUnit';
import valueToUnit from '../../utils/valueToUnit';
import { TabNavProps } from './Tab.types';

export const StyledListTabItem = styled.li`
  cursor: pointer;
  list-style: none;
  ${(props: ViewProps & TabNavProps) =>
    props.hoverColor &&
    css`
      &:hover {
        label,
        p {
          color: white;
        }
        background: ${colors[props.hoverColor]};
      }
    `}
  ${(props) =>
    props.activeColor &&
    css`
      &.active-tab {
        label,
        p {
          color: white;
        }
        background: ${colors[props.activeColor]};
      }
    `}
    ${(props) =>
    props.textAlign
      ? css`
          text-align: ${props.textAlign};
        `
      : css``};
  ${(props) =>
    props.cursor
      ? css`
          cursor: ${props.cursor};
        `
      : css``};
  ${(props) =>
    props.margin
      ? css`
          ${valueToCssShorthandProperties('margin', props.margin)}
        `
      : ''};
  ${(props) =>
    props.marginTop
      ? css`
          margin-top: ${valueToUnit(props.marginTop)};
        `
      : ''};
  ${(props) =>
    props.marginBottom
      ? css`
          margin-bottom: ${valueToUnit(props.marginBottom)};
        `
      : ''};
  ${(props) =>
    props.marginLeft
      ? css`
          margin-left: ${valueToUnit(props.marginLeft)};
        `
      : ''};
  ${(props) =>
    props.marginRight
      ? css`
          margin-right: ${valueToUnit(props.marginRight)};
        `
      : ''};
  ${(props) =>
    props.marginY
      ? css`
          margin-top: ${valueToUnit(props.marginY)};
          margin-bottom: ${valueToUnit(props.marginY)};
        `
      : ''};
  ${(props) =>
    props.marginX
      ? css`
          margin-left: ${valueToUnit(props.marginX)};
          margin-right: ${valueToUnit(props.marginX)};
        `
      : ''};
  ${(props) =>
    props.padding
      ? css`
          ${valueToCssShorthandProperties('padding', props.padding)}
        `
      : ''};
  ${(props) =>
    props.paddingTop
      ? css`
          padding-top: ${valueToUnit(props.paddingTop)};
        `
      : ''};
  ${(props) =>
    props.paddingBottom
      ? css`
          padding-bottom: ${valueToUnit(props.paddingBottom)};
        `
      : ''};
  ${(props) =>
    props.paddingLeft
      ? css`
          padding-left: ${valueToUnit(props.paddingLeft)};
        `
      : ''};
  ${(props) =>
    props.paddingRight
      ? css`
          padding-right: ${valueToUnit(props.paddingRight)};
        `
      : ''};
  ${(props) =>
    props.width
      ? css`
          width: ${valueToUnit(props.width)};
        `
      : ''};
`;

export const StyledButtonTab = styled.div`
  button {
    ${(props: Omit<TabNavProps, 'title'>) =>
      props.hoverColor &&
      css`
        &:hover {
          background: ${colors[props.hoverColor]};
        }
      `}
    ${(props) =>
      props.isActive && props.activeColor
        ? css`
            background: ${colors[props.activeColor]};
          `
        : ''};
  }
`;
