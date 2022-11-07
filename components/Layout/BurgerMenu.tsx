// BurgerIcon from @SeyfDesigner
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';
import { FormattedMessage, useIntl } from 'react-intl';
import Tab from './Tab';
import Image from 'next/image';

import styles from './Footer.module.scss';
import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const BurgerMenu = () => {
const InnerBurgerMenu = dynamic<React.ReactNode | {}>(() => import('./InnerBurgerMenu').then(module => module), {
    loading: ()=> <p>loading...</p>,
    ssr: false,
  });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu
      right
      customBurgerIcon={<Image src={'/burger-menu.png'} width={23} height={23} alt="Burger Menu Button" />}
      width={300}
      isOpen= {isOpen}
      onOpen= {()=> setIsOpen(true)}
      onClose= {()=> setIsOpen(false)}

    >
      {isOpen && (
        // @ts-ignore
      <InnerBurgerMenu/>)}
    </Menu>
  );
};

export default BurgerMenu;
