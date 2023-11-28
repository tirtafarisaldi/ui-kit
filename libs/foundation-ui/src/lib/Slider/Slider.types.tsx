import { GliderMethods, GliderProps } from 'react-glider/dist/types';
export interface SliderProps extends GliderProps {
  id?: string;
  width?: string | number | 'auto';
  minWidth?: string | number;
  minHeight?: string | number;
  margin?: string | string[] | number | number[];
  marginLeft?: string | number;
  marginRight?: string | number;
  marginTop?: string | number;
  marginBottom?: string | number;
  marginY?: string | number;
  marginX?: string | number;
  padding?: string | string[] | number | number[];
  paddingBottom?: string | number;
  paddingTop?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingY?: string | number;
  paddingX?: string | number;
  autoPlay?: boolean;
  autoPlaySpeed?: number;
  responsive?: BreakPoint[];
}
export interface GliderType extends GliderMethods {
  page: number;
}
export interface BreakPoint {
  breakpoint: number;
  settings: {
    slidesToShow?: number;
    slidesToScroll?: number;
    itemWidth?: number;
    duration?: number;
  };
}
