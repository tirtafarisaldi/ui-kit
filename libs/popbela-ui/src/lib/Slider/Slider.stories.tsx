import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Slider from './Slider';
import StoriesThemeProvider from '../Theme/StoriesThemeProvider';
import Card from '../Card/Card';
import { mockData } from '../Card/mockData';
import { View } from 'foundation-ui';

export default {
  title: 'Popbela/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;
const Template: ComponentStory<typeof Slider> = (args) => (
  <StoriesThemeProvider>
    <View style={{ width: '100%s' }}>
      <Slider {...args} style={{ margin: '0 auto', width: '90%' }}>
        <Card
          {...mockData}
          labels={{
            title: 'satu',
            author: 'satu',
            category: 'fashion',
            date: 'jans',
          }}
          type="headline"
        />
        <Card
          {...mockData}
          labels={{
            title: 'dua',
            author: 'dua',
            category: 'fashion',
            date: 'jans',
          }}
          type="headline"
        />
        <Card
          {...mockData}
          labels={{
            title: 'tiga',
            author: 'tiga',
            category: 'fashion',
            date: 'jans',
          }}
          type="headline"
        />
        <Card
          {...mockData}
          labels={{
            title: 'empat',
            author: 'empat',
            category: 'fashion',
            date: 'jans',
          }}
          type="headline"
        />
        <Card
          {...mockData}
          labels={{
            title: 'lima',
            author: 'lima',
            category: 'fashion',
            date: 'jans',
          }}
          type="headline"
        />
        <Card
          {...mockData}
          labels={{
            title: 'enam',
            author: 'enam',
            category: 'fashion',
            date: 'jans',
          }}
          type="headline"
        />
      </Slider>
    </View>
  </StoriesThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'exclusive',
};
