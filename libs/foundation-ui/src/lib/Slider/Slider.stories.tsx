import type { ComponentStory, Meta } from '@storybook/react';
import StoriesThemeProvider from '../Theme/StoriesThemeProvider';
import Slider from './Slider';
import { View } from '../View';

const Story: Meta<typeof Slider> = {
  component: Slider,
  title: 'Foundation/Slider',
};

const Template: ComponentStory<typeof Slider> = (args) => (
  <StoriesThemeProvider>
    <div>
      <Slider {...args}>
        <View backgroundColor="orange" height={180}>
          <h3>1</h3>
        </View>
        <View backgroundColor="blue" height={180}>
          <h3>2</h3>
        </View>
        <View backgroundColor="green" height={180}>
          <h3>3</h3>
        </View>
        <View backgroundColor="red" height={180}>
          <h3>4</h3>
        </View>
        <View backgroundColor="cyan" height={180}>
          <h3>5</h3>
        </View>
        <View backgroundColor="gray20" height={180}>
          <h3>6</h3>
        </View>
      </Slider>
    </div>
  </StoriesThemeProvider>
);
export default Story;
export const Default = Template.bind({});
Default.args = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoPlay: true,
  autoPlaySpeed: 5000,
  margin: '0 auto',
  hasArrows: true,
  hasDots: true,
};
