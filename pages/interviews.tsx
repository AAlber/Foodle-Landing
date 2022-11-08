import { init, setOptOut, track } from '@amplitude/analytics-browser';
import { ServerZone } from '@amplitude/analytics-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';
import { useIntl } from 'react-intl';
import Faq from '../components/landing/Faq';
import TrustFactorContainer from '../components/landing/TrustFactors';
import BurgerMenu from '../components/Layout/BurgerMenu';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';
import SpecialSection from '../components/Layout/special-section/SpecialSection';
import useWindowDimensions from '../hooks/useWindowDimensions';
import styles from '../styles/pages/Home.module.scss';

const Interviews: NextPage = () => {
  const { width } = useWindowDimensions();
  console.log(process.env.NODE_ENV);

  useEffect(() => {
    process.env.NODE_ENV === 'production'
      ? init(process.env['NEXT_PUBLIC_AMPLITUDE_KEY']!, undefined, {
          serverZone: ServerZone.EU,
          trackingOptions: { ipAddress: false },
        })
      : null;
  });

  const onButtonClick = () => track('Funnel Click');
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.interviews.hero.title' });
  const subheader = intl.formatMessage({ id: 'page.interviews.hero.subheader' });
  const description = intl.formatMessage({ id: 'page.interviews.hero.description' });
  const book = intl.formatMessage({ id: 'page.interviews.hero.book' });
  const specialTitle = intl.formatMessage({id:"page.interviews.special.mainTitle"});
  const cookieMessage = intl.formatMessage({ id: 'component.cookie.message' });

  //Animations
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);
  return (
    <div>
      <Head>
        <title>Foodle</title>
        <meta
          name="description"
          content="Foodle is a licensed kitchen rental service where food businesses (like restaurants, bakeries, ice cream shops, etc.) rent out their kitchens to cooks, bakers or other food producers.
          Foodle ist eine .
          "
        />
        <link rel="icon" href="/foodle_logo.svg" />
        <link rel="alternate" href="http://localhost:3000" hrefLang="de" />
        <link rel="alternate" href="http://localhost:3000/en" hrefLang="en" />
        {/* Web Analytics */}
      </Head>
      <Navbar />
      <div className={styles['sidebar']}>
        <BurgerMenu />
      </div>
      <CookieConsent
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
        {/* Section 1 TOP */}
        <Image
          priority={true}
          src="/interviews.png"
          className={styles['hero-image']}
          alt="Cook cutting vegetables on a kitchen counter"
          layout="fill"
          objectFit="cover"
        ></Image>
        <div className={styles['hero__top']}>
          <div className={styles['hero__top--inner']}>
            <h1 className={'header-primary'}>{title}</h1>
            <h4 className={styles['hero__subheader']}>{subheader}</h4>
            <p className={'body-text'}>{description}</p>
            <Link href={'https://calendly.com/alex-alber/interview-with-foodle'} passHref>
              <a onClick={onButtonClick} className={styles['home-btn'] + ' bold-medium'}>
                {book}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div id="special-section">
        <SpecialSection title={specialTitle} />
      </div>
      <div id="trust-factors"></div>
      <TrustFactorContainer width={width!}/>
      <div id="faq"></div>
      {/*Empty div to prevent scrolling down to much and over the FAQ title section*/}
      <Faq />
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Interviews;
