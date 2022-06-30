import React from 'react';
import styles from './Footer.module.scss';
import Tab from './Tab';
import Image from 'next/image';
import Link from 'next/link';
import { FormattedMessage, useIntl } from 'react-intl';

const Footer = () => {
  const intl = useIntl();
  const about = intl.formatMessage({ id: 'component.footer.about' });
  const feature = intl.formatMessage({ id: 'component.footer.feature' });
  const pricing = intl.formatMessage({ id: 'component.footer.pricing' });
  const careers = intl.formatMessage({ id: 'component.footer.careers' });
  const help = intl.formatMessage({ id: 'component.footer.help' });
  const privacy = intl.formatMessage({ id: 'component.footer.privacy' });
  return (
    <div className={styles['footer']}>
      <div className={styles['footer__main'] + ' flex-center__column'}>
        <div className="flex-center">
          <Image src={'/foodle_logo.svg'} alt="foodle logo" width={40} height={29} />
          <h3 className={styles['footer__logo'] + ' logo-text'}>Foodle</h3>
        </div>
        <div className={styles['footer__elements'] + ' flex-center mt-one'}>
          <Link href={'/'}>
            <a className="body-text--hover">{about}</a>
          </Link>
          <Link href={'/'}>
            <a className="body-text--hover">{feature}</a>
          </Link>
          <Link href={'/'}>
            <a className="body-text--hover">{pricing}</a>
          </Link>
          <Link href={'/'}>
            <a className="body-text--hover">{careers}</a>
          </Link>
          <Link href={'/'}>
            <a className="body-text--hover">{help}</a>
          </Link>
          <Link href={'/'}>
            <a className="body-text--hover">{privacy}</a>
          </Link>
        </div>
      </div>
      <div className={styles['footer__end']}>
        <a>© 2022 Foodle inc. All rights reserved</a>
        <div className={styles['footer__end--socials'] + ' flex-center'}>
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
        </div>
      </div>
    </div>
  );
};
export default Footer;
