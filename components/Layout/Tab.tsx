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
    <Link href={props.href || '/'} locale={locale === 'en' ? 'de' : 'en'}>
      {/* <div className="hover-title"> */}
      <a className={'hover-title flex-center'}>
        {props.iconSrc ? <img src={props.iconSrc} /> : <></>}
        <span className={'small-text'}>{title}</span>
      </a>
      {/* </div> */}
    </Link>
  );
};
export default Tab;
