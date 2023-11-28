import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Skeleton from './Skeleton';
import StoriesThemeProvider from '../Theme/StoriesThemeProvider';

export default {
  title: 'Foundation/Skeleton',
  argTypes: {
    borderRadius: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl', 'full'],
      },
    },
  },
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <StoriesThemeProvider>
    <h3>Skeleton</h3>
    <p>
      <code style={{ background: '#efefef', padding: '0 5px', borderRadius: 4 }}>width</code>{' '}
      and 
      {' '}<code style={{ background: '#efefef', padding: '0 5px', borderRadius: 4 }}>height</code> <strong>props</strong>{' '}
      value must be set if your parent component doesn't have width and height.
    </p>
    <Skeleton {...args} />
    <h3>Automatically inherit parent height and width</h3>
    <div style={{ width: 400, height: 150 }}>
      <Skeleton borderRadius={10} />
    </div>
  </StoriesThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  width: 100,
  height: 100,
  borderRadius: 'full',
  baseColor: '#F8B3CA',
  shimmerColor: '#FADAE2',
};