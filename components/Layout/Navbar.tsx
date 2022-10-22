import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import Tab from './Tab';
import { FormattedMessage, useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import Sidebar from './BurgerMenu';
export type NavbarProps = {
  screenWidth?: number;
};

const Navbar = (props: NavbarProps) => {
  const intl = useIntl();
  const why = intl.formatMessage({ id: 'component.navbar.why' });
  const joinFoodle = intl.formatMessage({ id: 'component.navbar.join' });
  const contact = intl.formatMessage({ id: 'component.navbar.contact' });
  const what = intl.formatMessage({ id: 'component.navbar.what' });

  const router = useRouter()
  const isInterviewPage= router.pathname === '/interviews';
  return (
    <nav className={isInterviewPage ?  'flex-center '+ styles['navbar']: styles['navbar']}>
      <div className={styles['navbar__logo'] }>
        <Link href="/" passHref>
          <div className="flex-center">
            <p>
              <Image src="/foodle_logo.svg" width={45} height={27} alt="Foodle Logo" />
            </p>
            <h1 className="logo-text green-text">Foodle</h1>
          </div>
        </Link>
      </div>
      {
        isInterviewPage? <></>: 
        <div className={styles['navbar__menu']}>
        <Tab href="/" iconSrc={'/world-icon.svg'} title="EN" burger={false} />
        <Tab href="#join-foodle" title={joinFoodle} />
        <Tab href="#special-section" title={what} />
        <Tab href="#trust-factors" title={why} />
        {/* <Tab href="#contact" title={contact} /> */}
        <Tab href="#faq" title="F.A.Q." />
      </div>
              
      }
      
    </nav>
  );
};
export default Navbar;
