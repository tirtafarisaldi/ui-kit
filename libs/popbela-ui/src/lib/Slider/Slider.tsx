import { forwardRef, useMemo } from 'react';
import { StyledArrow, StyledSlyder } from './Slider.style';
import { SliderProps } from './Slider.types';
import {
  Slider as ReactSlick,
  SliderProps as GliderProps,
  BreakPoint,
} from 'foundation-ui';
const defaultResponsive: BreakPoint[] = [
  {
    breakpoint: 960,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 320,
    settings: {
      slidesToShow: 1,
    },
  },
];

const PrevArrow = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { className, style, onClick } = props;
  return (
    <StyledArrow
      className={className}
      style={{ ...style, left: -45 }}
      onClick={onClick}
    />
  );
};
const NextArrow = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { className, style, onClick } = props;
  return (
    <StyledArrow
      className={className}
      style={{ ...style, right: -45 }}
      onClick={onClick}
    />
  );
};

const Slider = forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const { children, variant = 'default', responsive } = props;

  const optSlider = useMemo((): GliderProps => {
    return {
      hasDots: ['headline'].includes(variant),
      responsive: ['headline', 'exclusive'].includes(variant)
        ? [...defaultResponsive, ...(responsive ?? [])]
        : responsive,
      slidesToShow: ['headline', 'exclusive'].includes(variant) ? 3 : 1,
      slidesToScroll: ['headline', 'exclusive'].includes(variant) ? 1 : 1,
      autoPlay: true,
      autoPlaySpeed: 5000,
      hasArrows: ['now-on-popbela'].includes(variant),
      iconLeft: <PrevArrow />,
      iconRight: <NextArrow />,
      children: children,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant, responsive]);
  return (
    <StyledSlyder ref={ref} {...props}>
      <ReactSlick {...optSlider} />
    </StyledSlyder>
  );
});

export default Slider;
