import { NextComponentType, NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import React, { useRef } from 'react';
import styles from '../../styles/pages/Home.module.scss';
import Tab from './Tab';
import gsap from 'gsap';

import { useIntl } from 'react-intl';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

interface LandingInfoProps {
  width: number;
}

const LandingInfo = (props: LandingInfoProps) => {
  const intl = useIntl();

  const recipesRef = useRef(null);
  const findingRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const getSlideInAnim = (ref: React.MutableRefObject<null>, direction: string) => {
    return props.width < 600
      ? null
      : gsap.to(
          ref.current,
          direction === 'right'
            ? {
                x: 100,
                duration: 5,
                scrollTrigger: {
                  trigger: ref.current,
                  start: 'top 800px',
                  end: 'bottom 80px',
                  scrub: 0.5,
                },
              }
            : {
                x: -100,
                duration: 5,
                scrollTrigger: {
                  trigger: ref.current,

                  start: 'top 800px',
                  end: 'bottom 80px',
                  scrub: 0.5,
                },
              }
        );
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
  useEffect(() => {
    props.width > 600;
  });
  useEffect(() => {
    if (props.width > 1000) {
      const recipesRightSlideAnim = getSlideInAnim(recipesRef, 'right');
      const findingLeftSlideAnim = getSlideInAnim(findingRef, 'left');

      return () => {
        recipesRightSlideAnim && recipesRightSlideAnim.kill();
        findingLeftSlideAnim && findingLeftSlideAnim.kill();
      };
    } else {
      const recipesSlideUpAnim = getSlideUpAnim(recipesRef);
      const findingSlideUpAnim = getSlideUpAnim(findingRef);
      return () => {
        recipesSlideUpAnim.kill();
        findingSlideUpAnim.kill();
      };
    }
  });

  const recipes = intl.formatMessage({ id: 'page.home.recipes' });
  const finding = intl.formatMessage({ id: 'page.home.finding' });

  return (
    <div className={styles['landing-info__white']}>
      <div className={styles['landing-info__wrapper']}>
        <div ref={recipesRef} className={styles['landing-info__left'] + ' header-secondary'}>
          {recipes}
        </div>
        <div ref={findingRef} className={styles['landing-info__right'] + ' subtitle-text'}>
          {finding}
        </div>{' '}
      </div>
    </div>
  );
};
export default LandingInfo;
