import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { ViewProps } from 'react-device-detect';
import ConstructionPopup from './ConstructionPopup';
import styles from './Navbar.module.scss';

interface TabProps {
  href: string;
  title: string;
  iconSrc?: string;
  burger?: boolean;
  onClick?: () => void;
}
const Tab = (props: TabProps) => {
  const { locale } = useRouter();
  const title = props.iconSrc ? locale?.toString().toUpperCase() : props.title;

  return (
    <Link
      href={props.iconSrc ? '/' : '/not-done-yet'}
      locale={props.iconSrc ? (locale === 'en' ? 'de' : 'en') : locale}
    >
      <a className={'hover-title' + (props.burger ? '' : ' flex-center ')}>
        {props.iconSrc ? <Image src={props.iconSrc} alt="world-icon" height={18} width={18} /> : <></>}
        <h2 className={'small-text'}>{title}</h2>
      </a>
    </Link>
  );
};
export default Tab;
