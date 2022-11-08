import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/pages/Home.module.scss';
import Navbar from '../components/Layout/Navbar';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Script from 'next/script';
import BurgerMenu from '../components/Layout/BurgerMenu';
import { ServerZone } from '@amplitude/analytics-types';
import { init, setOptOut, track } from '@amplitude/analytics-browser';
import { useEffect, useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import dynamic from 'next/dynamic';

const Home: NextPage = () => {
  const { width } = useWindowDimensions();
  console.log(process.env.NODE_ENV);

  useEffect(() => {
    process.env.NODE_ENV === 'production'
      ? init(process.env['NEXT_PUBLIC_AMPLITUDE_KEY']!, undefined, {
          serverZone: ServerZone.EU,
          // trackingOptions: { ipAddress: false },
        })
      : null;
    
  });

  const onButtonClick = () => track('Funnel Click');
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.home.hero.title' });
  const description = intl.formatMessage({ id: 'page.home.hero.description' });
  const submit = intl.formatMessage({ id: 'page.home.hero.submit' });
  const overline = intl.formatMessage({ id: 'page.home.hero.overline' });
  const specialTitle = intl.formatMessage({id:"page.home.special.mainTitle"})
  const trustNumber1 = intl.formatMessage({ id: 'page.home.hero.trustNumber.1' });
  const trustNumber2 = intl.formatMessage({ id: 'page.home.hero.trustNumber.2' });
  const trustNumber3 = intl.formatMessage({ id: 'page.home.hero.trustNumber.3' });
  const cookieMessage = intl.formatMessage({ id: 'component.cookie.message' });

  const metaTitle = intl.formatMessage({ id: 'page.home.meta.title'});
  const metaDescription = intl.formatMessage({ id: 'page.home.meta.description' });

  //Animations
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   const dreamScrollAnim = getFadeInAnim(dreamsScroll);
  //   const signupAnim = getSlideUpAnim(signupRef);
  //   const textAnimTl = getTextTransformTimeline(easyAdjectives.split(' '));
  //   return () => {
  //     textAnimTl.kill();
  //     signupAnim.kill();
  //     dreamScrollAnim.kill();
  //   };
  // }, [easyAdjectives, width]);
  const [wasScrolled, setWasScrolled]= useState(false)
  const onScroll= ()=> wasScrolled ? null: setWasScrolled(true);

  useEffect(() => {
    window.addEventListener("scroll", ()=>onScroll());
    return (
       window.removeEventListener("scroll", ()=>onScroll())
    )
  }, []);

  const SpecialSection = dynamic<{title:string}>(() => import('../components/Layout/special-section/SpecialSection').then(module => module), {
    loading: ()=> <p>loading...</p>,
    ssr: false,
  });
  const TrustFactors = dynamic<{width:number}>(() => import('../components/landing/TrustFactors').then(module => module), {
    loading: ()=> <p>loading...</p>,
    ssr: false,
  });
  const Faq = dynamic(() => import('../components/landing/Faq'), {
    loading: ()=> <p>loading...</p>,
    ssr: false,
  });
  const Footer = dynamic<{}>(() => import('../components/Layout/Footer').then(module => module), {
    loading: ()=> <p>loading...</p>,
    ssr: false,
  });


  return (
    <div>
      <Head>
        <title>{metaTitle}</title>
        <meta
          name="description"
          content={metaDescription}
        />
        <link rel="icon" href="/foodle_logo.svg" />
        <link rel="alternate" href="https://www.foodle-kitchens.com/de" hrefLang="de" />
        <link rel="alternate" href="https://www.foodle-kitchens.com/en" hrefLang="en" />
        {/* Web Analytics */}
      </Head>
      <Navbar screenWidth={width} />
      <div className={styles['sidebar']}>
        <BurgerMenu/>
      </div>
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
        {/* Section 1 TOP */}
        {/* <div className={styles['hero__image']}> */}
        <Image
          priority={true}
          src="/landing.png"
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


      <div id="special-section">
        {wasScrolled && 
        // @ts-ignore
        <SpecialSection title={specialTitle}/>}

      </div>
      <div id="trust-factors"></div>
      {wasScrolled && 
      // @ts-ignore
        <TrustFactors width={width!}/>
      }
      <div id="faq"></div>
      {/*Empty div to prevent scrolling down to much and over the FAQ title section*/}
      {wasScrolled && 
        // @ts-ignore
      <Faq />}
      <div id="contact">
      {wasScrolled && 
        // @ts-ignore
        <Footer />
      }
      </div>
    </div>
  );
};

export default Home;
