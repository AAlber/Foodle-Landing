import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import Tab from './Tab';

const Navbar = () => {
  return (
    <nav className={styles['navbar'] + ' flex-center'}>
      <div className={styles['navbar__logo']}>
        <Link href="/" passHref>
          <a>
            <Image src="/foodle_logo.svg" width={50} height={35} alt="Foodle Logo" />
          </a>
        </Link>
      </div>
      <div className={styles['navbar__menu']}>
        <Tab href="/" title="EN/DE" />
        <Tab href="/" title="How It Works" />
        <Tab href="/create" title="List Your Kitchen" />
        <Tab href="/" title="Contact" />
      </div>
    </nav>
  );
};
export default Navbar;
