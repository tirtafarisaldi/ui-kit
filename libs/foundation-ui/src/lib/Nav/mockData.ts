import { NavProps } from '.';

export const mockData: NavProps = {
  items: [
    {
      label: { children: 'Home', fontColor: 'black' },
      link: {
        href: '/',
      },
      type: 'dropdown',

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
  ],
  behaviorDropdown: 'hover'
}

export default mockData