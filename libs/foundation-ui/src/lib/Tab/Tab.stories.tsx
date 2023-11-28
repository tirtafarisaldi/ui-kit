import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Tab from './Tab';
import { View } from '../View';
import { useState } from 'react';
import { TabProps } from './Tab.types';
import { tabItem } from '../Tab/mockData';
export default {
  title: 'Foundation/Tab',
  argTypes: {},
  component: Tab,
} as ComponentMeta<typeof Tab>;
const Template: ComponentStory<typeof Tab> = (args) => {
  const tabList: TabProps[] = tabItem;

  const [stateTabs, setStateTabs] = useState<TabProps[]>(tabList);

  const changeTab = (tabId: string) => {
    return setStateTabs((prevTabs: TabProps[]) => {
      return prevTabs.map((tab: TabProps) => {
        return { ...tab, isActive: tabId === tab.id };
      });
    });
  };

  return (
    <View display="flex" position="relative" flexGap="10px">
      {stateTabs?.map((tab: TabProps) => (
        <Tab onClick={() => changeTab(tab.id)} {...tab} {...args} />
      ))}
    </View>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: 'lg',
};
