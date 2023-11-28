import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Switch from './Switch';
import StoriesThemeProvider from '../Theme/StoriesThemeProvider';

export default {
  component: Switch,
  title: 'Foundation/Switch',
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => (
  <StoriesThemeProvider>
    <Switch {...args} />
  </StoriesThemeProvider>
);
export const Default = Template.bind({});
Default.args = {
  size: 'sm',
};
