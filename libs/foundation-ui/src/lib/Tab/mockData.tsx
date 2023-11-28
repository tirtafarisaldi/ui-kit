import {  TabProps } from "./Tab.types";

export const tabItem: TabProps[] = [
  {
    isActive: true,
    contentProps: {
      position: 'absolute',
      left: 0,
    },
    id: 'tab-1',
    children: <p>Tab 1</p>,
    navProps: {
      activeColor: 'red70',
      hoverColor: 'red',
      title: {
        children: 'Tab 1',
      },
    },
  },
  {
    isActive: false,
    contentProps: {
      position: 'absolute',
      left: 0,
    },
    id: 'tab-2',
    children: <p>Tab 2</p>,
    navProps: {
      activeColor: 'red70',
      hoverColor: 'red',
      title: {
        children: 'Tab 2',
      },
    },
  },
]