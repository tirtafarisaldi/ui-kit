import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from './Card';
import StoriesThemeProvider from '../Theme/StoriesThemeProvider';
import { mockData } from './mockData';
import { View } from 'foundation-ui';

export default {
  title: 'Popbela/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <StoriesThemeProvider>
    <View
      display="flex"
      flexJustifyContent="center"
      flexWrap="wrap"
      flexGap={10}
    >
      <div>
        <Card {...args} />
      </div>
      <div>
        <Card {...args} />
      </div>
      <div>
        <Card {...args} />
      </div>
    </View>
  </StoriesThemeProvider>
);

export const Default = Template.bind({});
Default.args = { ...mockData };
