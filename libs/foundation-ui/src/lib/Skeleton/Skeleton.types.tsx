type SkeletonBorderRadius = 'full' | 'xl' | 'lg' | 'md' | 'sm';

type Unit = 'px' | 'em' | '%';
type NumWithUnit = `${number}${Unit}`

export interface SkeletonProps {
  borderRadius?: number | NumWithUnit | SkeletonBorderRadius;
  width?: number | NumWithUnit | 'auto' | 'inherit';
  height?: number | NumWithUnit | 'auto' | 'inherit';
  style?: React.CSSProperties;
  baseColor?: string;
  shimmerColor?: string;
}
