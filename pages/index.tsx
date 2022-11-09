import { init, setOptOut, track } from '@amplitude/analytics-browser';
import { ServerZone } from '@amplitude/analytics-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import { useIntl } from 'react-intl';
import BurgerMenu from '../components/Layout/BurgerMenu';
import Navbar from '../components/Layout/Navbar';
import useWindowDimensions from '../hooks/useWindowDimensions';
import styles from '../styles/pages/Home.module.scss';

const Home: NextPage = () => {
  const { width } = useWindowDimensions();

  useEffect(() => {
    process.env.NODE_ENV === 'production'
      ? init(process.env['NEXT_PUBLIC_AMPLITUDE_KEY']!, undefined, {
          serverZone: ServerZone.EU,
        })
      : null;
  });

  const onButtonClick = () => track('Funnel Click');
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.home.hero.title' });
  const description = intl.formatMessage({ id: 'page.home.hero.description' });
  const submit = intl.formatMessage({ id: 'page.home.hero.submit' });
  const overline = intl.formatMessage({ id: 'page.home.hero.overline' });
  const specialTitle = intl.formatMessage({ id: 'page.home.special.mainTitle' });
  const trustNumber1 = intl.formatMessage({ id: 'page.home.hero.trustNumber.1' });
  const trustNumber2 = intl.formatMessage({ id: 'page.home.hero.trustNumber.2' });
  const trustNumber3 = intl.formatMessage({ id: 'page.home.hero.trustNumber.3' });
  const cookieMessage = intl.formatMessage({ id: 'component.cookie.message' });

  const metaTitle = intl.formatMessage({ id: 'page.home.meta.title' });
  const metaDescription = intl.formatMessage({ id: 'page.home.meta.description' });

  //Animations
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);
  const [wasScrolled, setWasScrolled] = useState(false);
  const onScroll = () => (wasScrolled ? null : setWasScrolled(true));

  useEffect(() => {
    window.addEventListener('scroll', () => onScroll());
    return window.removeEventListener('scroll', () => onScroll());
  }, []);

  const SpecialSection = dynamic<{ title: string }>(
    () => import('../components/Layout/special-section/SpecialSection').then((module) => module),
  );
  const TrustFactors = dynamic<{ width: number }>(
    () => import('../components/landing/TrustFactors').then((module) => module),
  );
  const Faq = dynamic(() => import('../components/landing/Faq'), {
  });
  const Footer = dynamic<{}>(() => import('../components/Layout/Footer').then((module) => module), {
  });

  return (
    <div>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="/foodle_logo.svg" />
        <link rel="alternate" href="https://www.foodle-kitchens.com/de" hrefLang="de" />
        <link rel="alternate" href="https://www.foodle-kitchens.com/en" hrefLang="en" />
        {/* Web Analytics */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div className={styles['sidebar']}>{wasScrolled && <BurgerMenu />}</div>
      <CookieConsent
        z-index={99999}
        hideOnAccept={true}
        enableDeclineButton
        onDecline={() => setOptOut(true)}
        onAccept={(acceptedByScrolling) => {
          if (acceptedByScrolling) {
            setOptOut(false);
          } else {
            setOptOut(true);
          }
        }}
      >
        {cookieMessage}
      </CookieConsent>

      {/* <=== Section 1 ===> */}
      <div id="join-foodle"></div>
      <div className={styles['hero']}>
        <Image
          priority={true}
          src={width!>720? "/landing.png": "/landing-small.png"}
          className={styles['hero-image']}
          alt="Cook cutting vegetables on a kitchen counter"
          layout="fill"
          objectFit="cover"
        />
        {/* </div> */}
        <div className={styles['hero__top']}>
          <div className={styles['hero__top--inner']}>
            <p className="overline">{overline}</p>
            <h1 className={'header-primary'}>{title}</h1>
            <p className={'body-text'}>{description}</p>
            <Link href={'https://form.typeform.com/to/FuAphrrA'} passHref>
              <a onClick={onButtonClick} className={styles['home-btn'] + ' bold-medium'}>
                {submit}
              </a>
            </Link>
          </div>
          {/* Section 1 Trust Factors DESKTOP */}
          <div className="flex-center">
            <div className={styles['trustNumbers']}>
              <div className={styles['trustNumbers__container']}>
                <p className={styles['trustNumbers__number']}>0€</p>
                <div className="flex-center">
                  <p className={styles['trustNumbers__text'] + ' body-text'}>{trustNumber1}</p>
                </div>
              </div>
              <div className={styles['trustNumbers__container']}>
                <p className={styles['trustNumbers__number']}>+15</p>
                <div className="flex-center">
                  <p className={styles['trustNumbers__text'] + ' body-text'}>{trustNumber2}</p>
                </div>
              </div>
              <div className={styles['trustNumbers__container--last-child']}>
                <p className={styles['trustNumbers__number']}>0</p>
                <div className="flex-center">
                  <p className={styles['trustNumbers__text--last-child'] + ' body-text'}>{trustNumber3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {wasScrolled && (
        <>
          <div id="special-section">
            {/* @ts-ignore */}
            <SpecialSection title={specialTitle} />
          </div>
          <div id="trust-factors"></div>

          {/* @ts-ignore */}
          <TrustFactors width={width!} />

          <div id="faq"></div>
          {/*Empty div to prevent scrolling down to much and over the FAQ title section*/}

          {/* @ts-ignore */}
          <Faq />
          <div id="contact">
            {/* @ts-ignore */}
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
