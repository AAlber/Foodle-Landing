import React from 'react';
import styles from '../../styles/pages/Home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Recoverable } from 'repl';
import { BooleanValueNode } from 'graphql';
import Image from 'next/image';

import { useIntl } from 'react-intl';

// interface CarouselProps {
//   leftText: string;
//   rightText: string;
//   containerStyle: string;
// }
export type KitchenCardInfo = {
  title: string;
  description: string;
  tags: string[];
  cityRegion: string;
  distance: number;
  price: number;
};

SwiperCore.use([Navigation]);
type SwiperCardProps = {
  index: number;
  cardInfo: KitchenCardInfo;
  //   title: string;
  //   description: string;
  //   tags: string[];
  //   size: string;
};

const SwiperCard = (props: SwiperCardProps) => {
  const intl = useIntl();
  const hr = intl.formatMessage({ id: 'component.swiperCard.hr' });
  if (props !== undefined) {
    return (
      <div className="card">
        <img
          className="slide card__image"
          src={`/carousel-image-${props.index + 1}.png`}
          alt={`Slide ${props.index + 1}`}
        />
        {/* <Image src={'/landing-2.jpg'} width={50} height={50} /> */}
        <h2 className="location primary-btn__smallest">
          {props.cardInfo.cityRegion + ' '}
          <img src={'/location.png'} width={15} height={15} />
          {' ' + props.cardInfo.distance} km {'  '}
          <img src={'/euro.png'} width={15} height={15} /> {' ' + props.cardInfo.price}
        </h2>
        <h3 className="location"></h3>
        <div className="info flex-center__column">
          <h1 className="semi-bold-text">{props.cardInfo.title}</h1>
          <p>{props.cardInfo.description}</p>
          <div className={'info__tags'}>
            {props.cardInfo.tags.map((tag: string) => {
              return <h2 className="card__tag">{tag}</h2>;
            })}
          </div>
          <div className="card__bottom">
            <div className="card__badge">
              <h3 className="body-text">
                <img src={'/location-black.png'} width={12} height={12} />
                {' ' + props.cardInfo.distance} km
              </h3>
              <h4 className="body-text">
                <img src={'/euro.png'} width={10} height={10} />
                {' ' + props.cardInfo.price}/{hr}
              </h4>
            </div>
            <button className="primary-btn__smallest">Read More</button>
          </div>
        </div>
      </div>
    );
  } else return <></>;
};
export default SwiperCard;
