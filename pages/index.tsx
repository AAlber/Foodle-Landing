import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../styles/pages/Home.module.scss';
import Navbar from '../components/Layout/Navbar';
import LandingInfo from '../components/Layout/LandingInfo';
import Modal from '../components/Layout/Modal';

const Home: NextPage = () => {
  const [email, setEmail] = React.useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
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
            </h3>
            <div>
              <button onClick={() => setOpenModal(true)} className="primary-btn bold-medium">
                Sign Up With Google
              </button>
              <Modal onClose={() => setOpenModal(false)} show={openModal} />
            </div>
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
        <h2 className={'header-secondary'}>Licensed Kitchens For Rent</h2>
        <div className={styles['carousel__wrapper']}>
          <Image alt="carousel-image" src={'/carousel-image-1.png'} width={361} height={415} />
          <Image alt="carousel-image" src={'/carousel-image-2.png'} width={361} height={415} />
          <Image alt="carousel-image" src={'/carousel-image-3.png'} width={361} height={415} />
        </div>
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
