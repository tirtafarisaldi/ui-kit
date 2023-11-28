import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { StyledSlider } from './Slider.style';
import { BreakPoint, GliderType, SliderProps } from './Slider.types';
import { GliderMethods } from 'react-glider/dist/types';
import { composeRef } from '../../utils/composeRef';
import * as React from 'react';

function getSlideToShow(responsive: BreakPoint[], width: number) {
  const slide =
    responsive.find(({ breakpoint }: BreakPoint) => breakpoint < width)
      ?.settings.slidesToScroll || 320;
  return slide;
}

const Slider = forwardRef<GliderMethods, SliderProps>((props, ref) => {
  const { autoPlaySpeed = 5000, autoPlay, children, responsive } = props;
  const [width, setWidth] = useState<number>(320);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const callbackRef = useCallback(
    (glider: GliderType) => {
      if (glider && autoPlay) {
        const child = children as React.ReactNode[];
        const sumPage = responsive
          ? getSlideToShow(responsive, width)
          : (props.slidesToShow as number);
        if (!intervalRef.current) {
          intervalRef.current = setInterval(() => {
            let page = glider.page === 0 ? glider.page : glider.page + 1;

            if (page < child.length / sumPage) {
              page += sumPage || 1;
            } else {
              page = 0;
            }
            glider.scrollItem(page, false);
          }, autoPlaySpeed);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(
    () => () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    },
    []
  );

  useEffect(() => {
    const element = document.getElementsByClassName('glider-track')[0].children;
    for (let index = 0; index < element.length; index++) {
      const track = element[index];
      track.removeAttribute('style');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);
  return (
    <StyledSlider ref={composeRef(ref, callbackRef)} draggable {...props}>
      {props.children}
    </StyledSlider>
  );
});
export default Slider;
