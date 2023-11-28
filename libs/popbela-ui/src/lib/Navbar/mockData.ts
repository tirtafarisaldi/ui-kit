import { NavbarProps } from "./Navbar.types";

const defaultNavbar: NavbarProps = {
    activeColor: 'redVividCerise',
    hoverColor: 'redVividCerise',
    isMobile: true,
    items: [
      {
        label: {
          children: 'Fashion',
          fontColor: 'darkGray',
          fontSize: 'lg',
        },
    
        link: {
          href: '/',
        },
      },
      {
        label: {
          children: 'Beauty',
          fontColor: 'darkGray',
          fontSize: 'lg',
        },
        link: {
          href: '/tech',
        },
      },
      {
        label: {
          children: 'Career',
          fontColor: 'darkGray',
          fontSize: 'lg',
        },
        link: {
          href: '/tech/iphone-14-pro-max',
        },
      },
      {
        label: {
          children: 'Lifestyle',
          fontColor: 'darkGray',
          fontSize: 'lg',
        },
        link: {
          href: '/tech/iphone-14-pro-max',
        },
      },
      {
        label: {
          children: 'Relationship',
          fontColor: 'darkGray',
          fontSize: 'lg',
        },
        link: {
          href: '/tech/iphone-14-pro-max',
        },
      },
      {
        label: {
          children: 'Category Baru',
          fontColor: 'darkGray',
          fontSize: 'lg',
        },
        link: {
          href: '/tech/iphone-14-pro-max',
        },
      },
    ],
    behaviorDropdown: 'hover',
  }

export {
    defaultNavbar
}