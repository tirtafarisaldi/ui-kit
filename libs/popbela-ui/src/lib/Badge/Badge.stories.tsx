import type { ComponentStory, Meta } from '@storybook/react';
import Badge from './Badge';
import StoriesThemeProvider from '../Theme/StoriesThemeProvider';

const Story: Meta<typeof Badge> = {
  component: Badge,
  title: 'Popbela/Badge',
};

const Template: ComponentStory<typeof Badge> = (args) => (
  <StoriesThemeProvider>
    <Badge {...args} />
  </StoriesThemeProvider>
);

export default Story;

export const Default = Template.bind({});
Default.args = {
  children: <span>Popbela</span>,
};
