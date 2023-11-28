import styled from "@emotion/styled";
import { SwitchProps, InputSwitchProps } from "./Switch.types";
import { colors } from "../Colors";
import { css } from "@emotion/react";


export const StyledSwitch = styled.label`
${(props: SwitchProps) =>
    css`
    position: relative;
    display: inline-block;
    ${props.size && props.size === 'lg'
        ? `
        width: 60px;
        height: 34px;
      `
        : props.size === 'md' ? `
        width: 50px;
        height: 28px;
      `
          : props.size === 'sm' ? `
        width: 40px;
        height: 22px;
      `
            : props.size === 'xs' ? `
        width: 31px;
        height: 17px;
      `
              : props.size === 'xxs' ? `
        width: 23px;
        height: 13px;
      `
                : `
        width: 40px;
        height: 22px;
      `
      };
  `}
`;

export const StyledSpan = styled.span`
  ${(props: SwitchProps) =>
    css`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
    background-color: #ccc;
    
      &:before {
        position: absolute;
        content: "";

      ${props.size && props.size === 'lg'
        ? `
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
      `
        : props.size === 'md' ? `
        height: 22px;
        width: 22px;
        left: 3px;
        bottom: 3px;
      `
          : props.size === 'sm' ? `
        height: 18px;
        width: 18px;
        left: 2px;
        bottom: 2px;
      `
            : props.size === 'xs' ? `
        height: 14px;
        width: 14px;
        left: 1.5px;
        bottom: 1.5px;
      `
              : props.size === 'xxs' ? `
        height: 10px;
        width: 10px;
        left: 1.5px;
        bottom: 1.5px;
      `
                : `
        height: 18px;
        width: 18px;
        left: 2px;
        bottom: 2px;
      `
      };
        
        background-color: ${colors[props.sliderColor || 'white']};
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
      }
  `};
`;

export const StyledInputSwitch = styled.input`
  ${(props: InputSwitchProps) =>
    css`
    display: none;
    &:checked + .slider {
      background-color: ${colors[props.backgroundColor || 'blue']};
    }

    &:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }

    &:checked + .slider:before {
      ${props.switchSize && props.switchSize === 'lg'
        ? `
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      `
        : props.switchSize === 'md' ? `
        -webkit-transform: translateX(22px);
        -ms-transform: translateX(22px);
        transform: translateX(22px);
      `
          : props.switchSize === 'sm' ? `
        -webkit-transform: translateX(18px);
        -ms-transform: translateX(18px);
        transform: translateX(18px);
      `
            : props.switchSize === 'xs' ? `
        -webkit-transform: translateX(14px);
        -ms-transform: translateX(14px);
        transform: translateX(14px);
      `
              : props.switchSize === 'xxs' ? `
        -webkit-transform: translateX(10px);
        -ms-transform: translateX(10px);
        transform: translateX(10px);
      `
                : `
        -webkit-transform: translateX(18px);
        -ms-transform: translateX(18px);
        transform: translateX(18px);
      `
      };
    }
  `};
`;
