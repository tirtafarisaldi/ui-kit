import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavProps } from './Nav.types';
import { colors } from '../Colors/Colors';
import { iconColorFilter } from '../Icon/configs';
import { ViewProps } from '../View';
import valueToUnit, { valueToCssShorthandProperties } from '../../utils/valueToUnit';
export const StyledNav = styled.nav`
  color: pink;
  align-items: center;
  scrollbar-width: none;
  a {
    text-decoration: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  ${(props: ViewProps) =>
    css`
      ${props.backgroundColor &&
      css`
        background: ${colors[props.backgroundColor]};
      `}
    `}
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
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: relative;
  padding: 0px;
  white-space: nowrap;
  align-items: center;
  margin-left: -7px;
  padding-left: 15px;
  padding-right: 7px;
  .nav-item {
    display: flex;
    align-items: center;
    list-style: none;
  }
  li {
    a  {
      label {
        cursor: pointer;
      }
    }
    img {
      cursor: pointer;
    }
  }
  ${(props: Pick<NavProps, 'hoverColor' | 'activeColor'>) =>
    css`
      ${props.hoverColor &&
      css`
        .nav-item:hover {
          .nav-item-label {
            color: ${colors[props.hoverColor]};
          }
          img {
            filter: ${iconColorFilter[props.hoverColor]};
          }
        }
      `}
      ${props.activeColor &&
      css`
        .nav-item-label {
          .active {
            color: ${colors[props.activeColor]};
          }
        }
      `}
    `};
  ${(props: Pick<NavProps, 'hoverColor' | 'activeColor' | 'backgroundColor'>) =>
    css`
      ${props.hoverColor &&
      css`
        .nav-item:hover {
          .nav-item-label {
            color: ${colors[props.hoverColor]};
          }
          img {
            filter: ${iconColorFilter[props.hoverColor]};
          }
        }
      `}
      ${props.activeColor &&
      css`
        .nav-item-label {
          .active {
            color: ${colors[props.activeColor]};
          }
        }
      `}
    `};
`;
