import styled from '@emotion/styled';
import { SkeletonProps } from './Skeleton.types';
import { css, keyframes } from '@emotion/react';
import valueToUnit from '../../utils/valueToUnit';

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`

const handleBorderRadius = (size: string | number) => {
  switch (size) {
    case 'sm':
      return '0.25em';
    case 'md':
      return '0.5em';
    case 'lg':
      return '1em';
    case 'xl':
      return '2em';
    case 'full':
      return '50%';
    default:
      return valueToUnit(size);
  }
};

const StyledSkeleton = styled.span`
  ${({
    borderRadius = 0,
    width = '100%',
    height = 'inherit',
    baseColor = '#edeef1',
    shimmerColor = '#ffffff'
  }: SkeletonProps) =>
    css`
      line-height: 1;
      display: inline-flex;
      Border-radius: ${handleBorderRadius(borderRadius)};
      width: ${valueToUnit(width)};
      height: ${valueToUnit(height)};
      position: relative;
      overflow: hidden;
      background-color: ${baseColor};

      &:after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background-image: linear-gradient(
          90deg,
          ${shimmerColor}00 0,
          ${shimmerColor}33 20%,
          ${shimmerColor}80 40%,
          ${shimmerColor}00
        );
        animation: ${shimmer} 2s infinite;
        content: '';
      }
    `};
`;

const Skeleton = (props: SkeletonProps) => {
  const { borderRadius, baseColor, shimmerColor, height, width, style } = props

  return (
    <StyledSkeleton 
      borderRadius={borderRadius}
      baseColor={baseColor}
      shimmerColor={shimmerColor}
      height={height}
      width={width}
      style={style}
    />
  )
}

export default Skeleton
