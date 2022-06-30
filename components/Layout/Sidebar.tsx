import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';
import { FormattedMessage, useIntl } from 'react-intl';
import Tab from './Tab';

const Sidebar = () => {
  const intl = useIntl();
  const findKitchen = intl.formatMessage({ id: 'component.navbar.find' });
  const listKitchen = intl.formatMessage({ id: 'component.navbar.list' });
  const contact = intl.formatMessage({ id: 'component.navbar.contact' });

  const FoodleHamburger = () => (
    <div className="svg-burger">
      <svg width="31" height="21" viewBox="0 0 31 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.5" width="16" height="2" fill="black" />
        <rect y="9.5" width="31" height="2" fill="black" />
        <rect x="16" y="18.5" width="15" height="2" fill="black" />
      </svg>
    </div>
  );

  return (
    <Menu right customBurgerIcon={<FoodleHamburger />} width={300}>
      <Tab href="/" iconSrc="./world-icon.svg" title="EN" />
      <Tab href="/" title="F.A.Q." />
      <Tab href="/" title={findKitchen} />
      <Tab href="/" title={listKitchen} />
      <Tab href="/" title={contact} />
    </Menu>
  );
};

export default Sidebar;
