import type { ComponentStory, Meta } from '@storybook/react';
import Navbar from './Navbar';
import StoriesThemeProvider from '../Theme/StoriesThemeProvider';
import { defaultNavbar } from './mockData';
import { View } from 'foundation-ui';
const Story: Meta<typeof Navbar> = {
  component: Navbar,
  title: 'Popbela/Navbar',
};

const Template: ComponentStory<typeof Navbar> = (args) => (
  <StoriesThemeProvider>
    <View width="700"  display='flex' flexJustifyContent='center'>
      <Navbar width="100%" {...args} />
    </View>
  </StoriesThemeProvider>
);

export default Story;

export const Default = Template.bind({});
Default.args = { ...defaultNavbar };
