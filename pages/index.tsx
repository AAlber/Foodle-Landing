import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../styles/pages/Home.module.scss';
import Navbar from '../components/Layout/Navbar';
import LandingInfo from '../components/Layout/LandingInfo';
import axios from 'axios';
import Carousel from '../components/Layout/Carousel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';
import Item from '~/components/Layout/Item';

const Home: NextPage = () => {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle');
  const [errorMsg, setErrorMsg] = useState(null);

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
  //@ts-ignore
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={'/carousel-left-arrow.svg'} alt="prevArrow" {...props} />
  );

  //@ts-ignore
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={'/carousel-right-arrow.svg'} alt="nextArrow" {...props} />
  );
  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   //@ts-ignore
  //   prevArrow: <SlickArrowLeft />,
  //   //@ts-ignore
  //   nextArrow: <SlickArrowRight />,
  // };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const addItem = () => {
    const nextItem = Math.max(1, items.length + 1);
    setItems([...items, nextItem]);
  };

  const removeItem = () => {
    const endRange = Math.max(0, items.length - 1);
    setItems(items.slice(0, endRange));
  };
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
      </Head>
      <Navbar />
      <div className={styles['hero']}>
        <div className={styles['hero__left']}>
          <div className={styles['hero__left--inner']}>
            <h1 className={'header-primary'}>
              Renting kitchens just got <span className={styles['rainbow']}>easier</span>.
            </h1>
            <h3 className={'body-text-secondary'}>
              We pair licensed kitchen owners with new chefs and bakers so businesses can grow together.
              <br />
              <br />
              Submit your email so we can keep you up to date on our launch.
            </h3>
            <form onSubmit={subscribe}>
              <div>
                <input
                  className="standard-form__inputMedium"
                  required
                  id="email-input"
                  name="email"
                  type="email"
                  placeholder="What's your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  disabled={state === 'Loading'}
                  type="submit"
                  className="primary-btn bold-medium"
                  onClick={subscribe}
                >
                  Submit
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
        Make your entrepreneurial food<span className={styles['rainbow-multi']}> dreams come true.</span>
      </h2>
      <div className={styles['carousel']}>
        <h2 className={'header-secondary centered'}>Licensed Kitchens For Rent</h2>
        <div className="mt-two">
          <Carousel />
          {/* <Carousel breakPoints={breakPoints} isRTL={true}>
            
            {/* {items.map((item) => (
              <Item key={item}>{item}</Item>
            ))} */}
          {/* </Carousel> */}
        </div>
        {/* <div >  */}
        {/* <Slider {...settings}>
            {[0, 1, 2].map((item, index) => {
              return (
                <div key={index}>
                  <Image alt="carousel-image" src={'/carousel-image-1.png'} width={361} height={415} />
                  <Image alt="carousel-image" src={'/carousel-image-2.png'} width={361} height={415} />
                  <Image alt="carousel-image" src={'/carousel-image-3.png'} width={361} height={415} /> */}
        {/* <img src={item.url} alt="hero_img" />

                  <div className="card__container--inner--card--date_time">
                    <img src="https://www.wanderon.in/svg/clock.svg" alt="time" />
                    <p>4D-5D</p>

                    <img src="https://www.wanderon.in/svg/map-pin.svg" alt="location" style={{ marginLeft: 10 }} />
                    <p>Delhi</p>
                  </div>

                  <h2>Meghalaya Backpacking</h2>
                  <p>
                    starts at <span>₹15,999/-</span>
                  </p> */}
        {/* </div>
              );
            })} */}
        {/* </Slider>
          <Image alt="carousel-image" src={'/carousel-image-1.png'} width={361} height={415} />
          <Image alt="carousel-image" src={'/carousel-image-2.png'} width={361} height={415} />
          <Image alt="carousel-image" src={'/carousel-image-3.png'} width={361} height={415} />
        </div> */}
      </div>
      <LandingInfo
        leftText="Always wanted to sell your homemade recipes? "
        rightText="You’ll need to find a licensed kitchen near you. 
        That can be a big challenge."
        containerStyle={'landing-info__white'}
      />
      <LandingInfo
        leftText="Foodle helps you do just that."
        rightText="With the click of a button, browse and book the kitchen that best fits your needs.
        And support local businesses in the process."
        containerStyle={'landing-info__green'}
      />
    </div>
  );
};

export default Home;
