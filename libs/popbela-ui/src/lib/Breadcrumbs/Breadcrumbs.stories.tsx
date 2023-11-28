import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';
import StoriesThemeProvider from '../Theme/StoriesThemeProvider';

import { mockData } from './mockData';

export default {
  title: 'Popbela/Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
  <StoriesThemeProvider>
    <Breadcrumbs {...args} />
  </StoriesThemeProvider>
);

export const Default = Template.bind({});
Default.args = { ...mockData };
