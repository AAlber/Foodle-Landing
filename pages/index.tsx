import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/pages/Home.module.scss';
import Navbar from '../components/Layout/Navbar';
import LandingInfo from '../components/Layout/LandingInfo';
import axios from 'axios';
import Carousel from '../components/Layout/Carousel';
import Link from 'next/link';
import Footer from '../components/Layout/Footer';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { dir } from 'console';
import Sidebar from '../components/Layout/BurgerMenu';
import useWindowDimensions from '../hooks/useWindowDimensions';
import StoryCarousel from '../components/Layout/StoryCarousel';
import { KitchenCardInfo } from '../components/Layout/SwiperCard';
import Script from 'next/script';
import posthog from 'posthog-js';
import Faq from '../components/landing/Faq';
import TrustFactor from '../components/landing/TrustFactor';

export const kitchenCards: KitchenCardInfo[] = [
  {
    title: 'Industrial Grade Kitchen Mitte',
    description: 'Practically New Kitchen in the center of the center. Come Join our...',
    tags: ['Verified', 'Oven', 'Skillet', 'Freezer', 'Fridge', '...'],
    cityRegion: 'Mitte',
    distance: 5.1,
    price: 50,
  },
  {
    title: 'Cozy 3 person kitchen Moabit',
    description: 'Small kitchen with not so much equipment, but an opportunity for...',
    tags: ['Verified', 'Oven', 'Fridge', 'Hot Plate', 'Air Fryer', '...'],
    cityRegion: 'Moabit',
    distance: 3.2,
    price: 40,
  },
  {
    title: 'Pizzeria Kitchen Friedrichshain',
    description: 'Fully stocked kitchen in a very popular area. Please take a loot at...',
    tags: ['Shared', 'Verified', 'Pizza Oven', 'Skillet', '...'],
    cityRegion: 'Friedrichshain',
    distance: 4.3,
    price: 19,
  },
  {
    title: 'Sushi Kitchen in Reinickendorf',
    description: 'Sushi kitchen open for 2 days a week, very well equipped and flexible... ',
    tags: ['Verified', 'Oven', 'Skillet', 'Freezer', 'Fridge', '...'],
    cityRegion: 'Reinickendorf',
    distance: 6.5,
    price: 32,
  },
  {
    title: 'Bakery Open 7 evenings a Week ',
    description: 'Our bakery kitchen is usable from 1pm onwards, please be careful with...',
    tags: ['Verified', 'Dual-Oven', 'Oven', 'Fridge', '...'],
    cityRegion: 'Kreuzberg',
    distance: 1.1,
    price: 60,
  },
  {
    title: 'Thai kitchen for rent Neukölln',
    description: 'Newly opened Thai kitchen available on Mondays and Tuesdays...',
    tags: ['Shared', 'Verified', 'Oven', 'Skillet', 'Deep-Fryer', '...'],
    cityRegion: 'Neukölln',
    distance: 5.1,
    price: 25,
  },
];
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
  const click = intl.formatMessage({ id: 'page.home.carousel.click' });
  const description = intl.formatMessage({ id: 'page.home.hero.description' });
  const easyAdjectives = intl.formatMessage({ id: 'page.home.hero.easyAdjectives' });
  const submitLabel = intl.formatMessage({ id: 'page.home.hero.submit.label' });
  const submitPlaceholder = intl.formatMessage({ id: 'page.home.hero.submit.placeholder' });
  const submit = intl.formatMessage({ id: 'page.home.hero.submit' });
  const food = intl.formatMessage({ id: 'page.home.food' });
  const dreams = intl.formatMessage({ id: 'page.home.dreams' });
  const carouselTitle = intl.formatMessage({ id: 'page.home.carousel.title' });
  const signupLabel = intl.formatMessage({ id: 'page.home.signup.label' });
  const signup = intl.formatMessage({ id: 'page.home.signup' });
  const signupError = intl.formatMessage({ id: 'page.home.signup.error' });
  // "Please enter a valid email that you haven't entered before.";
  const signupSuccess = intl.formatMessage({ id: 'page.home.signup.success' });
  // 'successfully submitted';
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

  useEffect(() => {
    const dreamScrollAnim = getFadeInAnim(dreamsScroll);
    const signupAnim = getSlideUpAnim(signupRef);
    const textAnimTl = getTextTransformTimeline(easyAdjectives.split(' '));
    return () => {
      textAnimTl.kill();
      signupAnim.kill();
      dreamScrollAnim.kill();
    };
  }, [easyAdjectives, width]);

  const handleOnBuy = () => {
    console.log("s'happening");
    posthog.capture('my event', { property: 'value' });
  };

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
      <Script

      // defer
      // src="https://static.cloudflareinsights.com/beacon.min.js"
      // data-cf-beacon='{"token": "39f2e396c9d545eb89eea1d7fd8ccdaf"}'
      ></Script>
      <div className={styles['sidebar']}>
        <Sidebar />
      </div>

      {/* <=== Section 1 ===> */}
      <div className={styles['hero']}>
        {/* Section 1 TOP */}
        <div className={styles['hero__top']}>
          <div className={styles['hero__top--inner']}>
            <p className="overline">Democratise food-making</p>
            <h1 className={'header-primary'}>
              {title}
              <span className={'header-primary'} ref={easyRef}></span>.
            </h1>

            <p className={'body-text'}>{description}</p>

            <button
              disabled={state === 'Loading'}
              type="submit"
              className={styles['home-btn'] + ' bold-medium'}
              onClick={handleOnBuy} //subscribe
            >
              {submit}
            </button>
          </div>
          {/* Section 1 Trust Factors DESKTOP */}
          <div className="flex-center">
            <div className={styles['trustNumbers']}>
              <div className={styles['trustNumbers__container']}>
                <p className={styles['trustNumbers__number']}>0€</p>
                <div className="flex-center">
                  <p className={styles['trustNumbers__text'] + ' body-text'}>of upfront costs</p>
                </div>
              </div>
              <div className={styles['trustNumbers__container']}>
                <p className={styles['trustNumbers__number']}>+15</p>
                <div className="flex-center">
                  <p className={styles['trustNumbers__text'] + ' body-text'}>cooks onboarded with Foodle</p>
                </div>
              </div>
              <div className={styles['trustNumbers__container--last-child']}>
                <p className={styles['trustNumbers__number']}>0</p>
                <div className="flex-center">
                  <p className={styles['trustNumbers__text--last-child'] + ' body-text'}>cooking equipment needed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faq />
      <div className={styles['trustFactors']}>
        <div className={styles['trustGrid']}>
          <TrustFactor
            width={width!}
            title={'Hello'}
            text={
              'Get cooking in weeks, not months. We make it easy to get your own kitchen up and running, whether you’re launching one from scratch, or expanding an established brand to a new market.'
            }
            shortText={'Get cooking in weeks, not months.'}
            iconSrc={'/burger-menu.png'}
          />
          <TrustFactor
            width={width!}
            title={'Hello'}
            text={
              'Get cooking in weeks, not months. We make it easy to get your own kitchen up and running, whether you’re launching one from scratch, or expanding an established brand to a new market.'
            }
            shortText={'Get cooking in weeks, not months.'}
            iconSrc={'/burger-menu.png'}
          />
          <TrustFactor
            width={width!}
            title={'Hello'}
            text={
              'Get cooking in weeks, not months. We make it easy to get your own kitchen up and running, whether you’re launching one from scratch, or expanding an established brand to a new market.'
            }
            shortText={'Get cooking in weeks, not months.'}
            iconSrc={'/burger-menu.png'}
          />
          <TrustFactor
            width={width!}
            title={'Hello'}
            text={
              'Get cooking in weeks, not months. We make it easy to get your own kitchen up and running, whether you’re launching one from scratch, or expanding an established brand to a new market.'
            }
            shortText={'Get cooking in weeks, not months.'}
            iconSrc={'/burger-menu.png'}
          />
        </div>
      </div>
      <div className={styles['carousel']}>
        <h2 className={styles['carousel__header'] + ' header-secondary centered'}>{carouselTitle}</h2>
        <h3 className={styles['carousel__instructions'] + ' subtitle-text centered'}>{click}</h3>
        <div className="mt-two">
          {width! < 480 ? <StoryCarousel cardInfo={kitchenCards} width={width!} /> : <Carousel width={width!} />}
        </div>
      </div>

      <LandingInfo width={width!} />
      <div ref={signupRef} className={styles['landing-info__lower']}>
        <div className="flex-center__column">
          <h2 className="subtitle-text semi-bold-text">{signupLabel}</h2>
          <Link href={'/'}>
            <a className="primary-btn">{signup}</a>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
