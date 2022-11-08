// BurgerIcon from @SeyfDesigner
import Image from 'next/image';
import { slide as Menu } from 'react-burger-menu';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const BurgerMenu = () => {
const InnerBurgerMenu = dynamic<React.ReactNode | {}>(() => import('./InnerBurgerMenu').then(module => module), {
    loading: ()=> <p>loading...</p>,
    ssr: false,
  });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu
      right
      customBurgerIcon={<Image loading='lazy' src={'/burger-menu.png'} width={23} height={23} alt="Burger Menu Button" />}
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
