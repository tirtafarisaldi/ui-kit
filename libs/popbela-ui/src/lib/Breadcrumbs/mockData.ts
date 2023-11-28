import { BreadcrumbsProps } from './Breadcrumbs.type';


export const mockData: BreadcrumbsProps = {
  items: [
    {
      label: { children: 'Home' },
      link: {
        href: '/',
      },
    },
    {
      label: { children: 'Tech' },
      link: {
        href: '/tech',
      },
    },
    {
      label: { children: 'Iphone 14 Pro Max' },
      link: {
        href: '/tech/iphone-14-pro-max',
      },
    },
  ],
}

export default mockData