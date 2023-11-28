import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';
import StoriesThemeProvider from '../Theme/StoriesThemeProvider';

export default {
  title: 'Foundation/Button',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
    },
  },
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <StoriesThemeProvider>
    <Button {...args} />
  </StoriesThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: <label>Click Me</label>,
};
