import { forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import valueToUnit, {
  valueToCssShorthandProperties,
} from '../../utils/valueToUnit';
import { colors } from '../Colors';
import type { ViewProps } from './View.types';

const StyledView = styled.div`
  ${(props: ViewProps) =>
    props.flex ||
    props.flexDirection ||
    props.flexGrow ||
    props.flexShrink ||
    props.flexBasis ||
    props.flexAlignItems ||
    props.flexJustifyContent ||
    props.flexAlignSelf ||
    props.flexWrap ||
    props.verticalAlign ||
    props.horizontalAlign ||
    props.flexGap
      ? css`
          display: flex;
        `
      : ''};
  ${(props) =>
    css`
      ${props.flex
        ? css`
            flex: ${props.flex};
          `
        : ''};
      ${typeof props.flexGrow === 'number'
        ? css`
            flex-grow: ${props.flexGrow};
          `
        : ''};
      ${typeof props.flexShrink === 'number'
        ? css`
            flex-shrink: ${props.flexShrink};
          `
        : ''};
      ${props.flexBasis
        ? css`
            flex-basis: ${props.flexBasis};
          `
        : ''};
      ${props.flexDirection
        ? css`
            flex-direction: ${props.flexDirection};
          `
        : ''};
      ${props.flexAlignItems
        ? css`
            align-items: ${props.flexAlignItems};
          `
        : ''};
      ${props.flexJustifyContent
        ? css`
            justify-content: ${props.flexJustifyContent};
          `
        : ''};
      ${props.flexAlignSelf
        ? css`
            align-self: ${props.flexAlignSelf};
          `
        : ''};
      ${props.flexWrap
        ? css`
            flex-wrap: ${props.flexWrap};
          `
        : ''};
    `};
  ${(props) => {
    const gap = props.flexGap;
    const rowGap = valueToUnit(Array.isArray(gap) ? gap[0] : gap);
    const columnGap = valueToUnit(Array.isArray(gap) ? gap[1] : gap);
    return gap
      ? css`
          margin: calc(${rowGap} / -2) calc(${columnGap} / -2) !important;
          > * {
            margin: calc(${rowGap} / 2) calc(${columnGap} / 2) !important;
          }
        `
      : '';
  }};
  ${(props) =>
    props.overflow && props.overflow === 'scroll'
      ? css`
          width: 100%;
          overflow: ${props.overflow};
          overflow-x: hidden;
          white-space: normal;
        `
      : ''};
  ${(props) =>
    props.opacity || props.opacity === 0
      ? css`
          opacity: ${props.opacity};
        `
      : ''};
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
    props.paddingY
      ? css`
          padding-top: ${valueToUnit(props.paddingY)};
          padding-bottom: ${valueToUnit(props.paddingY)};
        `
      : ''};
  ${(props) =>
    props.paddingX
      ? css`
          padding-left: ${valueToUnit(props.paddingX)};
          padding-right: ${valueToUnit(props.paddingX)};
        `
      : ''};
  ${(props) =>
    props.backgroundSrc
      ? css`
          background-image: url('${props.backgroundSrc}');
          background-repeat: no-repeat;
          background-size: cover;
        `
      : ''};
  ${(props) =>
    props.bordered
      ? css`
          overflow: hidden;
          border-radius: ${props.bordered ? 6 : 0}px;
        `
      : ''};
  ${(props) =>
    props.borderRadius || props.borderRadius === 0
      ? css`
          overflow: hidden;
          border-radius: ${props.borderRadius}px;
        `
      : ''};
  ${(props) =>
    props.borderTopLeftRadius || props.borderTopLeftRadius === 0
      ? css`
          border-top-left-radius: ${props.borderTopLeftRadius}px;
        `
      : ''};
  ${(props) =>
    props.borderTopRightRadius || props.borderTopRightRadius === 0
      ? css`
          border-top-right-radius: ${props.borderTopRightRadius}px;
        `
      : ''};
  ${(props) =>
    props.borderTopLeftRadius || props.borderTopLeftRadius === 0
      ? css`
          border-top-left-radius: ${props.borderTopLeftRadius}px;
        `
      : ''};
  ${(props) =>
    props.borderBottomLeftRadius || props.borderBottomLeftRadius === 0
      ? css`
          border-bottom-left-radius: ${props.borderBottomLeftRadius}px;
        `
      : ''};
  ${(props) =>
    props.borderBottomRightRadius || props.borderBottomRightRadius === 0
      ? css`
          border-bottom-right-radius: ${props.borderBottomRightRadius}px;
        `
      : ''};
  ${(props) =>
    props.bordered || props.borderWidth || props.borderColor
      ? css`
          border-width: ${props.borderWidth ? props.borderWidth : 1}px;
          border-style: solid;
          border-color: ${props.borderColor ? colors[props.borderColor] : ''};
        `
      : ''};
  ${(props) =>
    props.height
      ? css`
          height: ${valueToUnit(props.height)};
        `
      : ''};
  ${(props) =>
    props.maxHeight
      ? css`
          max-height: ${valueToUnit(props.maxHeight)};
        `
      : ''};
  ${(props) =>
    props.minHeight
      ? css`
          min-height: ${valueToUnit(props.minHeight)};
        `
      : ''};
  ${(props) =>
    props.width
      ? css`
          width: ${valueToUnit(props.width)};
        `
      : ''};
  ${(props) =>
    props.maxWidth
      ? css`
          max-width: ${valueToUnit(props.maxWidth)};
        `
      : ''};
  ${(props) =>
    props.minWidth
      ? css`
          min-width: ${valueToUnit(props.minWidth)};
        `
      : ''};
  ${(props) =>
    props.verticalAlign
      ? props.verticalAlign === 'top'
        ? css`
            align-items: flex-start;
          `
        : props.verticalAlign === 'middle'
        ? css`
            align-items: center;
          `
        : props.verticalAlign === 'bottom'
        ? css`
            align-items: flex-end;
          `
        : ''
      : ''};
  ${(props) =>
    props.horizontalAlign
      ? props.horizontalAlign === 'right'
        ? css`
            justify-content: flex-end;
          `
        : props.horizontalAlign === 'middle'
        ? css`
            justify-content: center;
          `
        : props.horizontalAlign === 'left'
        ? css`
            justify-content: flex-start;
          `
        : ''
      : ''};
  ${(props) =>
    props.textAlign
      ? css`
          text-align: ${props.textAlign};
        `
      : css``};
  ${(props) =>
    props.verticalAlign
      ? css`
          text-align: ${props.verticalAlign};
        `
      : css``};
  ${(props) =>
    props.position
      ? css`
          position: ${props.position};
        `
      : css``};
  ${(props) =>
    props.display
      ? css`
          display: ${props.display};
        `
      : css``};
  ${(props) =>
    props.float
      ? css`
          float: ${props.float};
        `
      : css``};
  ${(props) =>
    props.backgroundColor
      ? css`
          background-color: ${colors[props.backgroundColor]};
        `
      : ''};
  ${(props) =>
    props.zIndex
      ? css`
          z-index: ${props.zIndex};
        `
      : css``};
  ${(props) =>
    props.cursor
      ? css`
          cursor: ${props.cursor};
        `
      : css``};
  ${(props) =>
    props.overflow
      ? css`
          overflow: ${props.overflow};
        `
      : css``};
  ${(props) =>
    props.top !== undefined
      ? css`
          top: ${props.top};
        `
      : css``};
  ${(props) =>
    props.bottom !== undefined
      ? css`
          bottom: ${props.bottom};
        `
      : css``};
  ${(props) =>
    props.left !== undefined
      ? css`
          left: ${props.left};
        `
      : css``};
  ${(props) =>
    props.right !== undefined
      ? css`
          right: ${props.right};
        `
      : css``};
  ${(props) =>
    props.wordBreak
      ? css`
          word-break: ${props.wordBreak};
        `
      : ''};
  ${(props) =>
    props.boxShadow
      ? css`
          box-shadow: ${props.boxShadow};
        `
      : ''};
  ${(props) =>
    props.boxSizing &&
    css`
      box-sizing: ${props.boxSizing};
    `}
`;

const View = forwardRef<HTMLDivElement, ViewProps>((props, ref) => {
  const {
    id,
    as,
    className,
    overflow,
    flex,
    flexGrow,
    flexShrink,
    flexBasis,
    flexDirection,
    flexJustifyContent,
    flexAlignItems,
    flexAlignSelf,
    flexWrap,
    flexGap,
    opacity,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginY,
    marginX,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingY,
    paddingX,
    borderRadius,
    bordered,
    filled,
    width,
    maxWidth,
    minWidth,
    height,
    maxHeight,
    minHeight,
    verticalAlign,
    horizontalAlign,
    textAlign,
    position,
    display,
    zIndex,
    cursor,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    top,
    bottom,
    left,
    right,
    depth,
    backgroundColor,
    backgroundSrc,
    borderWidth,
    borderColor,
    boxShadow,
    borderBottomColor,
    borderBottomWidth,
    float,
    wordBreak,
    children,
    style,
    ...rest
  } = props;

  return (
    <StyledView
      id={id}
      className={className}
      ref={ref}
      as={as}
      overflow={overflow}
      flex={flex}
      flexGrow={flexGrow}
      flexShrink={flexShrink}
      flexBasis={flexBasis}
      flexDirection={flexDirection}
      flexJustifyContent={flexJustifyContent}
      flexAlignItems={flexAlignItems}
      flexAlignSelf={flexAlignSelf}
      flexWrap={flexWrap}
      flexGap={flexGap}
      opacity={opacity}
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginY={marginY}
      marginX={marginX}
      padding={padding}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingY={paddingY}
      paddingX={paddingX}
      borderRadius={borderRadius}
      bordered={bordered}
      boxShadow={boxShadow}
      filled={filled}
      width={width}
      maxWidth={maxWidth}
      minWidth={minWidth}
      height={height}
      maxHeight={maxHeight}
      minHeight={minHeight}
      verticalAlign={verticalAlign}
      horizontalAlign={horizontalAlign}
      textAlign={textAlign}
      position={position}
      display={display}
      zIndex={zIndex}
      cursor={cursor}
      borderTopLeftRadius={borderTopLeftRadius}
      borderTopRightRadius={borderTopRightRadius}
      borderBottomLeftRadius={borderBottomLeftRadius}
      borderBottomRightRadius={borderBottomRightRadius}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      depth={depth}
      backgroundColor={backgroundColor}
      backgroundSrc={backgroundSrc}
      borderWidth={borderWidth}
      borderColor={borderColor}
      borderBottomColor={borderBottomColor}
      borderBottomWidth={borderBottomWidth}
      float={float}
      wordBreak={wordBreak}
      style={style}
      {...rest}
    >
      {children}
    </StyledView>
  );
});

export default View;
