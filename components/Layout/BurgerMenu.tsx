// BurgerIcon from @SeyfDesigner
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';
import { FormattedMessage, useIntl } from 'react-intl';
import Tab from './Tab';
import Image from 'next/image';

import styles from './Footer.module.scss';
import { useRef, useState } from 'react';

const BurgerMenu = () => {
  const intl = useIntl();
  const findKitchen = intl.formatMessage({ id: 'component.navbar.find' });
  const listKitchen = intl.formatMessage({ id: 'component.navbar.list' });
  const contact = intl.formatMessage({ id: 'component.navbar.contact' });

  return (
    <Menu right customBurgerIcon={<Image src={'/burger-menu.png'} width={23} height={23} alt="Burger Menu Button"/>} width={300}>
      <header className="bm-top">
        <div className="bm-top__right">
          <Tab href="/" iconSrc="/world-icon.svg" title="EN" />
        </div>
        <div className="bm-top__left mt-two">
          <Tab href="/" title={findKitchen} burger />
          <Tab href="/" title={listKitchen} burger />
          <Tab href="/" title="F.A.Q." burger />
          <Tab href="/" title={contact} burger />
        </div>
      </header>
      <footer>
        <div className="flex-center">
          <Image src={'/foodle_logo.svg'} alt="foodle logo" width={40} height={29} />
          <h3 className={styles['footer__logo'] + ' logo-text'}>Foodle</h3>
        </div>
        <section className={styles['footer__end--socials'] + ' flex-center'}>
          <Image
            className={styles['footer__end--socials__image']}
            src={'/instagram.svg'}
            alt="instagram logo"
            width={30}
            height={30}
          />
          <Image
            className={styles['footer__end--socials__image']}
            src={'/twitter.svg'}
            alt="twitter logo"
            width={30}
            height={30}
          />
          <Image
            className={styles['footer__end--socials__image']}
            src={'/youtube.svg'}
            alt="youtube logo"
            width={30}
            height={30}
          />
        </section>
      </footer>
    </Menu>
  );
};

export default BurgerMenu;
