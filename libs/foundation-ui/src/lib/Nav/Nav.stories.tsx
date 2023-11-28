/** @jsxImportSource @emotion/react */
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Nav from './Nav';
import StoriesThemeProvider from '../Theme/StoriesThemeProvider';
import { NavChildItemProps, NavProps } from './Nav.types';
import Link from '../Link/Link';
import { Text } from '../Text';
import { css } from '@emotion/react';
import IconCaretDown from '../../../assets/icons/caret-down.svg';
import { View, ViewProps } from '../View';

const ChildContainer = () => {
  const childItems: NavChildItemProps[] = [
    {
      label: { children: 'Home', fontColor: 'black' },
      link: {
        href: '/',
      },
    },
    {
      label: { children: 'Tech', fontColor: 'black' },
      link: {
        href: '/tech',
      },
    },
    {
      label: { children: 'Iphone 14 Pro Maxxxx', fontColor: 'black' },
      link: {
        href: '/tech/iphone-14-pro-max',
      },
    },
  ];

  return (
    <View
      padding="30px 30px"
      minWidth="815px"
      width="100%"
      position="absolute"
      right="0"
      left="0"
      margin="0 auto"
      top="40px"
      zIndex={12}
      backgroundColor="gray60"
    >
      <ul
        css={css`
          padding: 0px;
          display: flex;
          gap: 10px;
        `}
      >
        {childItems?.map((item: NavChildItemProps, index: number) => (
          <li
            key={index}
            css={css({
              listStyle: 'none',
            })}
          >
            <Link {...item.link}>
              <Text {...item.label} />
            </Link>
          </li>
        ))}
      </ul>
    </View>
  );
};

const mockData: NavProps = {
  items: [
    {
      label: { children: 'Home', fontColor: 'black' },
      link: {
        href: '/',
      },
    },
    {
      label: { children: 'Tech', fontColor: 'black' },
      link: {
        href: '#', // using # if the link is having dropdowns
      },
      type: 'dropdown',
      suffixIcon: {
        size: 'sm',
        tintColor: 'black',
        icon: IconCaretDown,
      },
      children: <ChildContainer />,
    },
    {
      label: { children: 'Iphone 14 Pro', fontColor: 'black' },
      link: {
        href: '/tech/iphone-14-pro-max',
      },
    },
    {
      label: { children: 'Iphone 11 Pro', fontColor: 'black' },
      link: {
        href: '/tech/iphone-11-pro-max',
      },
    },
    {
      label: { children: 'Iphone 13 Pro', fontColor: 'black' },
      link: {
        href: '/tech/iphone-13-pro-max',
      },
    },
    {
      label: { children: 'Iphone 15 Pro', fontColor: 'black' },
      link: {
        href: '/tech/iphone-15-pro-max',
      },
    },
    {
      label: { children: 'Iphone 16 Pro', fontColor: 'black' },
      link: {
        href: '/tech/iphone-16-pro-max',
      },
      type: 'dropdown',
      children: <ChildContainer />,
    },
  ],
  behaviorDropdown: 'click',
};

export default {
  title: 'Foundation/Nav',
  component: Nav,
} as ComponentMeta<typeof Nav & ViewProps>;

const Template: ComponentStory<typeof Nav & ViewProps> = (args) => (
  <StoriesThemeProvider>
    <Nav {...args} />
  </StoriesThemeProvider>
);

export const Default = Template.bind({});
Default.args = { ...mockData };
