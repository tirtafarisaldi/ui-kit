import './matchMedia.mock';
import { render } from '@testing-library/react';
import Slider from './Slider';
import React from 'react';
import { View } from '../View';

const args = {
  width: '80%',
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  margin: '0 auto',
};

describe('Slider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Slider {...args}>
        <View backgroundColor="orange" height={180}>
          <h3>1</h3>
        </View>
        <View backgroundColor="blue" height={180}>
          <h3>2</h3>
        </View>
      </Slider>
    );
    expect(baseElement).toBeTruthy();
  });
});
