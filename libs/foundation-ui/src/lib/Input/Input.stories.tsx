import type { ComponentStory, Meta } from '@storybook/react';
import Input from './Input';
import StoriesThemeProvider from '../Theme/StoriesThemeProvider';

const Story: Meta<typeof Input> = {
  component: Input,
  title: 'Foundation/Input',
};
const Template: ComponentStory<typeof Input> = (args) => (
  <StoriesThemeProvider>
    <Input {...args} />
  </StoriesThemeProvider>
);
export default Story;
export const Default = Template.bind({});
Default.args = {
  width: '100%',
  bordered: true,
  placeholder: 'type here...',
  padding: '10px',
};
