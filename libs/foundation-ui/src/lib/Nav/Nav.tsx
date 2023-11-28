import { NavItemProps, NavProps } from '.';
import { Link } from '../Link';
import { Icon } from '../Icon';
import { forwardRef, useState } from 'react';
import { StyledList, StyledNav } from './Nav.style';
import { Text } from '../Text';
import { Url } from 'next/dist/shared/lib/router/router';
import { View } from '../View';
import { usePathname } from 'next/navigation';
import { NavItemLinkProps } from './Nav.types';

const NavItemLink = (props: NavItemLinkProps) => {
  const { link, label, pathname } = props;
  return (
    <Link {...link}>
      <Text
        {...label}
        className={`nav-item-label${link.href === pathname && ' active'}`}
      />
    </Link>
  );
};

const NavChildrenList = (
  props: {
    onShowChildren: (key: string) => void;
    onCloseChildren: () => void;
    activeMenu: string | Url;
  } & NavItemProps
) => {
  const {
    prefixIcon,
    suffixIcon,
    label,
    link,
    type,
    onShowChildren,
    onCloseChildren,
    children,
    activeMenu,
    behaviorDropdown = 'hover',
  } = props;

  const pathname = usePathname();
  const navItem = label.children as string;


  if (type === 'dropdown') {
    return (
      <li
        onMouseEnter={() =>  behaviorDropdown === 'hover' && onShowChildren(label.children as string)}
        onClick={() => {
          if(behaviorDropdown === 'click'){
            if (activeMenu === navItem) {
              onCloseChildren();
            } else {
              onShowChildren(label.children as string);
            }
          }
        }}
        className="nav-item"
      >
        {prefixIcon && <Icon {...prefixIcon} />}
        {navItem ? (
          <NavItemLink link={link} label={label} pathname={pathname} />
        ) : (
          <Text
            {...label}
            className={`nav-item-label${
              link.href === pathname ? ' active' : ''
            }`}
          />
        )}
        {suffixIcon && <Icon {...suffixIcon} />}
        <View
          onMouseLeave={() =>  behaviorDropdown === 'hover' && onCloseChildren}
          display={activeMenu === navItem ? 'block' : 'none'}
        >
          {children}
        </View>
      </li>
    );
  }

  return (
    <li onMouseEnter={() =>  behaviorDropdown === 'hover' && onCloseChildren} className="nav-item">
      {prefixIcon && <Icon {...prefixIcon} />}
      <NavItemLink link={link} label={label} pathname={pathname} />
      {suffixIcon && <Icon {...suffixIcon} />}
    </li>
  );
};

const Nav = forwardRef<HTMLElement, NavProps>((props, ref) => {
  const {
    className,
    behaviorDropdown,
    items,
    hoverColor,
    margin,
    marginTop,
    backgroundColor,
    marginBottom,
    marginLeft,
    marginRight,
    marginY,
    marginX,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingY,
    paddingX,
  } = props;
  const [activeMenu, setActiveMenu] = useState<string | Url>('');
  function onShowChildren(menu: string | Url) {
    setActiveMenu(menu);
  }
  function onCloseChildren() {
    setActiveMenu('');
  }
  return (
    <StyledNav
      className={className}
      ref={ref}
      backgroundColor={backgroundColor}
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginY={marginY}
      marginX={marginX}
      padding={padding}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingY={paddingY}
      paddingX={paddingX}
    >
      <StyledList hoverColor={hoverColor} className="nav">
        {items.map((item: NavItemProps, index: number) => (
          <NavChildrenList
            key={index}
            activeMenu={activeMenu}
            onShowChildren={onShowChildren}
            behaviorDropdown={behaviorDropdown}
            onCloseChildren={onCloseChildren}
            {...item}
          />
        ))}
      </StyledList>
    </StyledNav>
  );
});

export default Nav;
