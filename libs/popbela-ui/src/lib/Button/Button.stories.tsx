import type { ComponentStory, Meta } from '@storybook/react';
import Button from './Button';
import StoriesThemeProvider from '../Theme/StoriesThemeProvider';

const Story: Meta<typeof Button> = {
  component: Button,
  title: 'Popbela/Button',
};

const Template: ComponentStory<typeof Button> = (args) => (
  <StoriesThemeProvider>
    <Button {...args} />
  </StoriesThemeProvider>
);

export default Story;

export const Default = Template.bind({});
export const LoadMore = Template.bind({});
Default.args = {
  children: "What's your",
  variant: 'default',
  isLoading: false,
};
LoadMore.args = {
  children: 'Load More',
  variant: 'load-more',
  isLoading: false,
};
