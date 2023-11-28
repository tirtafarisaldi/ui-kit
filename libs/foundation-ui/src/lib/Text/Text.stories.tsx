import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Text from './Text';
import StoriesThemeProvider from '../Theme/StoriesThemeProvider';
import { colors } from '../Colors';

export default {
  title: 'Foundation/Text',
  argTypes: {
    fontSize: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      },
    },
    fontWeight: {
      control: {
        type: 'select',
        options: ['light', 'normal', 'semibold', 'bold'],
      },
    },
    fontStyle: {
      control: {
        type: 'select',
        options: ['italic', 'normal'],
      },
    },
    fontColor: {
      control: {
        type: 'select',
        options: Object.keys(colors).map((el) => el),
      },
    },
  },
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <StoriesThemeProvider>
    <Text {...args} />
  </StoriesThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: <>Lorem Ipsum</>,
  fontColor: 'darkBlue30',
  as: 'h1',
};
