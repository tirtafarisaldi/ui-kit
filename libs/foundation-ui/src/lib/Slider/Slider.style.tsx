import styled from '@emotion/styled';
import Slider from 'react-glider';
import 'glider-js/glider.min.css';
import { SliderProps } from './Slider.types';
import { css } from '@emotion/react';
import valueToUnit, {
  valueToCssShorthandProperties,
} from '../../utils/valueToUnit';
export const StyledSlider = styled(Slider)`
  ${(props: SliderProps) => css`
    ${props.width ? `width: ${valueToUnit(props.width)}` : 'widht: 100%'};
    ${props.minWidth && `min-width: ${valueToUnit(props.minWidth)};`}
    ${props.minHeight && `min-height: ${valueToUnit(props.minHeight)};`}
    ${props.margin &&
    css`
      ${valueToCssShorthandProperties('margin', props.margin)}
    `};
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
    ${props.padding &&
    css`
      ${valueToCssShorthandProperties('padding', props.padding)}
    `};
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
  `}
`;
