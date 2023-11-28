import type { ComponentStory, Meta } from '@storybook/react';
import { Card } from './Card';
import { mockData } from './mockData';
import { View } from 'foundation-ui';
const Story: Meta<typeof Card> = {
  component: Card,
  title: 'Popmama/Card',
};
export default Story;
const Template: ComponentStory<typeof Card> = (args) => (
  <View display="flex" flexJustifyContent="center" flexWrap="wrap" flexGap={10}>
    <div>
      <Card {...args} />
    </div>
    <div>
      <Card {...args} />
    </div>
    <div>
      <Card {...args} />
    </div>
  </View>
);

export const Latest = Template.bind({});
export const Related = Template.bind({});
export const EditorPick = Template.bind({});
export const Trending = Template.bind({});
Latest.args = {
  ...mockData,
  type: 'latest',
};
Related.args = {
  ...mockData,
  type: 'related',
};
EditorPick.args = {
  ...mockData,
  type: 'editor-pick',
};
Trending.args = {
  ...mockData,
  type: 'trending',
};
