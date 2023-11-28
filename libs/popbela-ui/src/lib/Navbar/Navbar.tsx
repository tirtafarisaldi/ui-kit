import { NavbarProps } from './Navbar.types';
import { NavbarPopbela } from './Navbar.style';
export default function Navbar(props: NavbarProps) {
  const { items, ...rest } = props;
  return <NavbarPopbela data-testid="navbar" {...rest}  items={items} />;
}
