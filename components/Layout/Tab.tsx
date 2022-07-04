import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useEffect } from 'react';
import styles from './Navbar.module.scss';

interface TabProps {
  href: string;
  title: string;
  iconSrc?: string;
}
const Tab = (props: TabProps) => {
  const { locale, locales } = useRouter();
  // console.log(locales![0], locales![1]);
  console.log(locale);
  const title = props.iconSrc ? locale?.toString().toUpperCase() : props.title;
  console.log(title);

  return (
    <Link href={props.href || '/'} locale={props.iconSrc ? (locale === 'en' ? 'de' : 'en') : locale}>
      <a className={'hover-title flex-center'}>
        {props.iconSrc ? <img src={props.iconSrc} /> : <></>}
        <span className={'small-text'}>{title}</span>
      </a>
    </Link>
  );
};
export default Tab;
