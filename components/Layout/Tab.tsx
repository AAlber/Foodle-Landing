import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useEffect } from 'react';
import styles from './Navbar.module.scss';

interface TabProps {
  href: string;
  title: string;
  iconSrc?: string;
  burger?: boolean;
}
const Tab = (props: TabProps) => {
  const { locale } = useRouter();
  const title = props.iconSrc ? locale?.toString().toUpperCase() : props.title;
  return (
    <Link href={props.href || '/'} locale={props.iconSrc ? (locale === 'en' ? 'de' : 'en') : locale}>
      <a className={'hover-title' + (props.burger ? '' : ' flex-center ')}>
        {props.iconSrc ? <img src={props.iconSrc} alt="world-icon" /> : <></>}
        <h2 className={'small-text'}>{title}</h2>
      </a>
    </Link>
  );
};
export default Tab;
