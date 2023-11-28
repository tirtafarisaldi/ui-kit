import styled from "@emotion/styled";
import { InputProps } from "./Input.types";
import { colors } from "../Colors";
import valueToUnit, { valueToCssShorthandProperties } from "../../utils/valueToUnit";
import { css } from "@emotion/react";

export const StyledInput = styled.input`
  
  ${(props: InputProps) =>
    css`
      box-sizing: border-box;
      display: inline-block;
      line-height: 1.5;
      &:focus-visible {
        outline: none;
      }
      ${props.width ? `width: ${valueToUnit(props.width)};` : `width: 100%;`}
      ${props.height && `height: ${valueToUnit(props.height)};`}
      ${props.minWidth && `min-width: ${valueToUnit(props.minWidth)};`}
      ${props.minHeight && `min-height: ${valueToUnit(props.minHeight)};`}
      ${props.disabled
        ? `
          background-color: ${colors.gray30};
          border-color: ${colors.gray40};
        `
        : `
          background-color: ${colors.white};
        `};
      ${props.bordered
        ? `
            border-color: ${colors.gray40};
            border-width: 1px;
            border-style: solid;
          `
        : `
            border: unset;
          `};
        ${props.borderWidth && css`border-width: ${valueToUnit(props.borderWidth)}`};
        ${props.borderTopWidth && css`border-top-width: ${valueToUnit(props.borderTopWidth)}`}  
        ${props.borderBottomWidth && css`border-bottom-width: ${valueToUnit(props.borderBottomWidth)}`}  
        ${props.borderLeftWidth && css`border-left-width: ${valueToUnit(props.borderLeftWidth)}`}  
        ${props.borderRightWidth && css`border-right-width: ${valueToUnit(props.borderRightWidth)}`}  
        ${props.borderStyle && css`border-style: ${props.borderStyle}`};  
        ${props.borderColor && css`border-color: ${props.borderColor}`};  
        ${props.fontSize ? css`
            font-size: ${valueToUnit(props.fontSize)}
       `: `font-size: 14px;`};
       ${props.margin
        ? css`
            ${valueToCssShorthandProperties('margin', props.margin)}
          `
        : `margin: 0px;`};
      ${props.marginTop &&
      css`
        margin-top: ${valueToUnit(props.marginTop)};
      `};
      ${props.marginBottom &&
      css`
        margin-bottom: ${valueToUnit(props.marginBottom)};
      `};
      ${props.marginLeft &&
      css`
        margin-left: ${valueToUnit(props.marginLeft)};
      `};
      ${props.marginRight &&
      css`
        margin-right: ${valueToUnit(props.marginRight)};
      `};
      ${props.marginY &&
      css`
        margin-top: ${valueToUnit(props.marginY)};
        margin-bottom: ${valueToUnit(props.marginY)};
      `};
      ${props.marginX &&
      css`
        margin-left: ${valueToUnit(props.marginX)};
        margin-right: ${valueToUnit(props.marginX)};
      `};
      ${props.padding
        ? css`
            ${valueToCssShorthandProperties('padding', props.padding)}
          `
        : 'padding: 6px 11px;'};
      ${props.paddingTop &&
      css`
        padding-top: ${valueToUnit(props.paddingTop)};
      `};
      ${props.paddingBottom &&
      css`
        padding-bottom: ${valueToUnit(props.paddingBottom)};
      `};
      ${props.paddingLeft &&
      css`
        padding-left: ${valueToUnit(props.paddingLeft)};
      `};
      ${props.paddingRight &&
      css`
        padding-right: ${valueToUnit(props.paddingRight)};
      `};
      ${props.paddingX &&
      css`
        padding-left: ${valueToUnit(props.paddingX)};
        padding-right: ${valueToUnit(props.paddingX)};
      `};
      ${props.paddingY &&
      css`
        padding-top: ${valueToUnit(props.paddingY)};
        padding-bottom: ${valueToUnit(props.paddingY)};
      `};
      ${props.borderRadius ? css`
        border-radius: ${valueToUnit(props.borderRadius)}
      `: 'border-radius: 4px'};
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
        ${props.borderBottomLeftRadius || props.borderBottomLeftRadius === 0
        ? css`
            border-bottom-left-radius: ${props.borderBottomLeftRadius}px;
            `
        : ''};
        ${props.borderBottomRightRadius || props.borderBottomRightRadius === 0
        ? css`
            border-bottom-right-radius: ${props.borderBottomRightRadius}px;
            `
        : ''}
    `};
`;