import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/pages/Home.module.scss';
import Navbar from '../components/Layout/Navbar';
import axios from 'axios';
import Link from 'next/link';
import Footer from '../components/Layout/Footer';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { dir } from 'console';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Script from 'next/script';
import posthog from 'posthog-js';
import SpecialSection from '../components/Layout/special-section/SpecialSection';
import Faq from '../components/landing/Faq';
import TrustFactor from '../components/landing/TrustFactor';
import BurgerMenu from '../components/Layout/BurgerMenu';

const Home: NextPage = () => {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle');

  const { locales } = useRouter();
  const { height, width } = useWindowDimensions();

  const intl = useIntl();

  const subscribe = async (e: any) => {
    setState('Loading');

    try {
      const response = await axios.post('/api/subscribe', { email });
      console.log(response);
      setState('Success');
      setEmail('');
    } catch (e: any) {
      console.log(e.response.data.error.message);
      setState('Error');
    }
  };

  const title = intl.formatMessage({ id: 'page.home.hero.title' });
  const description = intl.formatMessage({ id: 'page.home.hero.description' });
  const submit = intl.formatMessage({ id: 'page.home.hero.submit' });
  const submitSubtitle = intl.formatMessage({ id: 'page.home.hero.submitSubtitle' });
  const trustNumber1 = intl.formatMessage({ id: 'page.home.hero.trustNumber.1' });
  const trustNumber2 = intl.formatMessage({ id: 'page.home.hero.trustNumber.2' });
  const trustNumber3 = intl.formatMessage({ id: 'page.home.hero.trustNumber.3' });
  const trustFactorTitle1 = intl.formatMessage({ id: 'page.home.trustFactor.title.1' });
  const trustFactorTitle2 = intl.formatMessage({ id: 'page.home.trustFactor.title.2' });
  const trustFactorTitle3 = intl.formatMessage({ id: 'page.home.trustFactor.title.3' });
  const trustFactorTitle4 = intl.formatMessage({ id: 'page.home.trustFactor.title.4' });
  const trustFactorText1 = intl.formatMessage({ id: 'page.home.trustFactor.text.1' });
  const trustFactorText2 = intl.formatMessage({ id: 'page.home.trustFactor.text.2' });
  const trustFactorText3 = intl.formatMessage({ id: 'page.home.trustFactor.text.3' });
  const trustFactorText4 = intl.formatMessage({ id: 'page.home.trustFactor.text.4' });
  const trustFactorTextShort1 = intl.formatMessage({ id: 'page.home.trustFactor.text.short.1' });
  const trustFactorTextShort2 = intl.formatMessage({ id: 'page.home.trustFactor.text.short.2' });
  const trustFactorTextShort3 = intl.formatMessage({ id: 'page.home.trustFactor.text.short.3' });
  const trustFactorTextShort4 = intl.formatMessage({ id: 'page.home.trustFactor.text.short.4' });

  //Animations
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);
  const dreamsScroll = useRef(null);
  const easyRef = useRef(null);

  const getTextTransformTimeline = (textList: string[]) => {
    var textAnimTl = gsap.timeline({ repeat: -1 });
    textList.forEach((text) => {
      textAnimTl.add(gsap.to(easyRef.current, { duration: 1, text: { value: text, delimiter: '' } }));
      textAnimTl.add(gsap.to(easyRef.current, { duration: 1, text: { value: '', delimiter: ' ' } }), '+=2');
    });
    return textAnimTl;
  };

  const getSlideUpAnim = (ref: React.MutableRefObject<null>) => {
    return gsap.to(ref.current, {
      y: -100,
      duration: 5,
      scrollTrigger: {
        trigger: ref.current,

        start: 'bottom 800px',
        end: 'bottom 80px',
        scrub: 0.5,
      },
    });
  };

  const getFadeInAnim = (ref: React.MutableRefObject<null>) => {
    return gsap.fromTo(
      ref.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ref.current,

          start: '-200px center',
          end: '200px center',
          scrub: 0.5,
          markers: false,
        },
      }
    );
  };
  const signupRef = useRef(null);

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
      <Script

      // defer
      // src="https://static.cloudflareinsights.com/beacon.min.js"
      // data-cf-beacon='{"token": "39f2e396c9d545eb89eea1d7fd8ccdaf"}'
      ></Script>
      <div className={styles['sidebar']}>
        <BurgerMenu />
      </div>

      {/* <=== Section 1 ===> */}
      <div className={styles['hero']}>
        {/* Section 1 TOP */}
        <div className={styles['hero__top']}>
          <div className={styles['hero__top--inner']}>
            <p className="overline">Democratise food-making</p>
            <h1 className={'header-primary'}>{title}</h1>

            <p className={'body-text'}>{description}</p>
            <Link href={'https://form.typeform.com/to/FuAphrrA'}>
              <a className={styles['home-btn'] + ' bold-medium'}>{submit}</a>
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

      <SpecialSection />
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
      <Faq />

      <Footer />
    </div>
  );
};

export default Home;
