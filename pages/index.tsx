import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../styles/pages/Home.module.scss';
import Navbar from '../components/Layout/Navbar';
import LandingInfo from '../components/Layout/LandingInfo';
import axios from 'axios';
import Carousel from '../components/Layout/Carousel';
import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Footer from '../components/Layout/Footer';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

// import Tween, { Power3 } from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

const Home: NextPage = () => {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle');
  const [errorMsg, setErrorMsg] = useState(null);
  const { locales } = useRouter();

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
  const description = intl.formatMessage({ id: 'page.home.hero.description' });
  const easy = intl.formatMessage({ id: 'page.home.hero.easy' });
  const submitLabel = intl.formatMessage({ id: 'page.home.hero.submit.label' });
  const submitPlaceholder = intl.formatMessage({ id: 'page.home.hero.submit.placeholder' });
  const submit = intl.formatMessage({ id: 'page.home.hero.submit' });
  const food = intl.formatMessage({ id: 'page.home.food' });
  const dreams = intl.formatMessage({ id: 'page.home.dreams' });
  const carouselTitle = intl.formatMessage({ id: 'page.home.carousel.title' });
  const recipes = intl.formatMessage({ id: 'page.home.recipes' });
  const finding = intl.formatMessage({ id: 'page.home.finding' });
  const signupLabel = intl.formatMessage({ id: 'page.home.signup.label' });
  const signup = intl.formatMessage({ id: 'page.home.signup' });
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
      <div className={styles['hero']}>
        <div className={styles['hero__left']}>
          <div className={styles['hero__left--inner']}>
            <h1 className={'header-primary'}>
              {title}
              <span className={styles['rainbow']}>{easy}</span>.
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
      <h2 className={styles['random-text'] + ' header-secondary'}>
        {food}
        <span className={styles['rainbow-multi']}> {dreams}</span>
      </h2>
      <div className={styles['carousel']}>
        <h2 className={'header-secondary centered'}>{carouselTitle}</h2>
        <div className="mt-two">
          <Carousel />
        </div>
      </div>
      <LandingInfo leftText={recipes} rightText={finding} containerStyle={'landing-info__white'} />
      <div className={styles['landing-info__lower']}>
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
