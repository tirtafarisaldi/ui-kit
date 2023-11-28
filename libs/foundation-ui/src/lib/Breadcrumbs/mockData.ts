import { BreadcrumbsProps } from '.';

const IconArrowDownCircle: string = require("../../../assets/icons/divider-breadcrumbs.svg").default;

export const mockData: BreadcrumbsProps = {
  items: [
    {
      label: { children: 'Home', fontColor: 'gray90' },
      link: {
        href: '/',
      },
    },
    {
      label: { children: 'Tech', fontColor: 'gray90' },
      link: {
        href: '/tech',
      },
    },
    {
      label: { children: 'Iphone 14 Pro Max', fontColor: 'gray70' },
      link: {
        href: '/tech/iphone-14-pro-max',
      },
    },
  ],
  separatorIcon: {
    icon: IconArrowDownCircle,
    size: 'xs',
  },
}

export default mockData