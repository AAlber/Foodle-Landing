import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';

const Sidebar = () => {
  const FoodleHamburger = () => (
    <svg width="31" height="21" viewBox="0 0 31 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0.5" width="16" height="2" fill="black" />
      <rect y="9.5" width="31" height="2" fill="black" />
      <rect x="16" y="18.5" width="15" height="2" fill="black" />
    </svg>
  );
  return (
    <div className="right">
      <div id="outer-container">
        <Menu right customBurgerIcon={<FoodleHamburger />} width={300}>
          <Link href="/">
            <a className="menu-item">DE</a>
          </Link>
          <Link href="/">
            <a className="menu-item">F.A.Q.</a>
          </Link>
          <Link href="/">
            <a className="menu-item">Unsere Küchen</a>
          </Link>
          <Link href="/">
            <a className="menu-item">Vermiete deine Küche</a>
          </Link>
          <Link href="/">
            <a className="menu-item">Kontakt</a>
          </Link>
        </Menu>
      </div>
    </div>
  );
};

export default Sidebar;
