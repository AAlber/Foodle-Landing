import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/pages/Home.module.scss';
import Navbar from '../components/Layout/Navbar';
import Link from 'next/link';
import Footer from '../components/Layout/Footer';
import { useIntl } from 'react-intl';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Script from 'next/script';
import SpecialSection from '../components/Layout/special-section/SpecialSection';
import Faq from '../components/landing/Faq';
import TrustFactor from '../components/landing/TrustFactor';
import BurgerMenu from '../components/Layout/BurgerMenu';
import { ServerZone } from '@amplitude/analytics-types';
import { init, setOptOut, track } from '@amplitude/analytics-browser';
import { useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';

const Home: NextPage = () => {
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
  const title = intl.formatMessage({ id: 'page.home.hero.title' });
  const description = intl.formatMessage({ id: 'page.home.hero.description' });
  const submit = intl.formatMessage({ id: 'page.home.hero.submit' });
  const specialTitle = intl.formatMessage({id:"page.home.special.mainTitle"})
  const trustNumber1 = intl.formatMessage({ id: 'page.home.hero.trustNumber.1' });
  const trustNumber2 = intl.formatMessage({ id: 'page.home.hero.trustNumber.2' });
  const trustNumber3 = intl.formatMessage({ id: 'page.home.hero.trustNumber.3' });
  const trustFactorTitle1 = intl.formatMessage({ id: 'page.home.trustFactor.title.1' });
  const trustFactorTitle2 = intl.formatMessage({ id: 'page.home.trustFactor.title.2' });
  const trustFactorTitle3 = intl.formatMessage({ id: 'page.home.trustFactor.title.3' });
  const trustFactorText1 = intl.formatMessage({ id: 'page.home.trustFactor.text.1' });
  const trustFactorText2 = intl.formatMessage({ id: 'page.home.trustFactor.text.2' });
  const trustFactorText3 = intl.formatMessage({ id: 'page.home.trustFactor.text.3' });
  const trustFactorTextShort1 = intl.formatMessage({ id: 'page.home.trustFactor.text.short.1' });
  const trustFactorTextShort2 = intl.formatMessage({ id: 'page.home.trustFactor.text.short.2' });
  const trustFactorTextShort3 = intl.formatMessage({ id: 'page.home.trustFactor.text.short.3' });
  const cookieMessage = intl.formatMessage({ id: 'component.cookie.message' });

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
      <Navbar screenWidth={width} />
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
          src="/landing.png"
          className={styles['hero-image']}
          alt="Cook cutting vegetables on a kitchen counter"
          layout="fill"
          objectFit="cover"
        ></Image>
        <div className={styles['hero__top']}>
          <div className={styles['hero__top--inner']}>
            <p className="overline">Democratise food-making</p>
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
        <SpecialSection title={specialTitle}/>
      </div>
      <div id="trust-factors"></div>
      <div className={styles['trustFactors']}>
        {/* <div className={styles['trustGrid']}> */}
        <TrustFactor
          width={width!}
          title={trustFactorTitle1}
          text={trustFactorText1}
          shortText={trustFactorTextShort1}
          iconSrc={'/pot.svg'}
        />
        <TrustFactor
          width={width!}
          title={trustFactorTitle2}
          text={trustFactorText2}
          shortText={trustFactorTextShort2}
          iconSrc={'/support.svg'}
        />
        <TrustFactor
          width={width!}
          title={trustFactorTitle3}
          text={trustFactorText3}
          shortText={trustFactorTextShort3}
          iconSrc={'/verified.svg'}
        />
      </div>
      <div id="faq"></div>
      {/*Empty div to prevent scrolling down to much and over the FAQ title section*/}
      <Faq />
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
