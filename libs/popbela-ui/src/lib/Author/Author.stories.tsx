import type { ComponentStory, Meta } from '@storybook/react';
import { Author } from './Author';
import StoriesThemeProvider from '../Theme/StoriesThemeProvider';
import { mockData } from './mockData';

const Story: Meta<typeof Author> = {
  component: Author,
  title: 'Popbela/Author',
};

const Template: ComponentStory<typeof Author> = (args) => (
  <StoriesThemeProvider>
    <Author {...args} />
  </StoriesThemeProvider>
);

export default Story;

export const Default = Template.bind({});
Default.args = { ...mockData };
