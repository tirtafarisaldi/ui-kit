import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Radio from './Radio';
import StoriesThemeProvider from '../Theme/StoriesThemeProvider';


export default {
  component: Radio,
  title: 'Foundation/Radio',
  argTypes: {
    fontSize: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      },
    }
  }
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => (
  <StoriesThemeProvider>
    <Radio {...args} />
  </StoriesThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  value: 'text1',
  label: 'Text',
};
