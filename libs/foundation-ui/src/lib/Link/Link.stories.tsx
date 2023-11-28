import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Link from './Link';
import StoriesThemeProvider from '../Theme/StoriesThemeProvider';

export default {
  title: 'Foundation/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <StoriesThemeProvider>
    <Link {...args} />
  </StoriesThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: <label>Click Me</label>,
  href: 'https://popbela.com',
};
