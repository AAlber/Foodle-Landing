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
import Sidebar from '../components/Layout/Sidebar';
import useWindowDimensions from '../hooks/useWindowDimensions';

// import Tween, { Power3 } from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

const Home: NextPage = () => {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle');
  const [errorMsg, setErrorMsg] = useState(null);
  const { locales } = useRouter();
  const { height, width } = useWindowDimensions();

  const intl = useIntl();

  const subscribe = async (e: any) => {
    e.preventDefault();
    setState('Loading');

    try {
      const response = await axios.post('/api/subscribe', { email });
      console.log(response);
      setState('Success');
      setEmail('');
    } catch (e: any) {
      console.log(e.response.data.error);
      setErrorMsg(e.response.data.error);
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

  return (
    <div>
      <Head>
        <title>Foodle</title>
        <meta
          name="description"
          content="The landing page of the up and coming
        kitchen rental portal, Foodle."
        />
        <link rel="icon" href="/foodle_logo.svg" />
        <link rel="alternate" href="http://localhost:3000" hrefLang="de" />
        <link rel="alternate" href="http://localhost:3000/en" hrefLang="en" />
      </Head>
      <Navbar />
      <div className={styles['sidebar']}>
        <Sidebar />
      </div>

      <div className={styles['hero']}>
        <div className={styles['hero__left']}>
          <div className={styles['hero__left--inner']}>
            <h1 className={'header-primary'}>
              {title}
              <span className={styles['rainbow']} ref={easyRef}></span>.
            </h1>
            <h3 className={'body-text-secondary'}>
              {description}
              <br />
              <br />
              {submitLabel}
            </h3>
            <form onSubmit={subscribe}>
              <div>
                <input
                  className="standard-form__inputMedium"
                  required
                  id="email-input"
                  name="email"
                  type="email"
                  placeholder={submitPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  disabled={state === 'Loading'}
                  type="submit"
                  className="primary-btn bold-medium"
                  onClick={subscribe}
                >
                  {submit}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles['hero__right']}>
          <div className={styles['hero__right']}>
            <Image alt={'Hero Image'} src={'/programming.png'} width={450} height={350} />
          </div>
        </div>
      </div>
      <h2 className={styles['random-text'] + ' header-secondary mb-two'} ref={dreamsScroll}>
        {food}
        <span className={styles['rainbow-multi']}> {dreams} </span>
      </h2>
      <div className={styles['carousel']}>
        <h2 className={styles['carousel__header'] + ' header-secondary centered'}>{carouselTitle}</h2>
        <h3 className={styles['carousel__instructions'] + ' subtitle-text centered'}>{click}</h3>
        <div className="mt-two">
          <Carousel />
        </div>
      </div>
      <LandingInfo width={width!} />
      <div className={styles['landing-info__lower']}>
        <div ref={signupRef} className={width! > 1000 ? 'flex-center__column' : ''}>
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
