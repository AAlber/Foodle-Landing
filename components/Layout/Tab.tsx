import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.scss';

interface TabProps {
  href: string;
  title: string;
  icon?: string;
}
const Tab = (props: TabProps) => (
  <Link href={props.href || '/'}>
    <a className={styles['navbar__menu--link'] + ' flex-center'}>
      <span className={'underline-link small-text'}>{props.title}</span>
    </a>
  </Link>
);
export default Tab;
