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

  width: number;
};

const SwiperCard = (props: SwiperCardProps) => {
  const intl = useIntl();
  const hr = intl.formatMessage({ id: 'component.swiperCard.hr' });
  const indexIncremented = props.index + 1;
  if (props !== undefined) {
    return (
      <div className="card">
        <Image className="slide card__image" src={'/carousel-image-' + indexIncremented + '.png'} layout={'fill'} />
        <h2 className="location primary-btn__smallest">
          {props.cardInfo.cityRegion + ' '}
          <img src={'/location.png'} width={15} height={15} />
          {' ' + props.cardInfo.distance} km {'  '}
          <img src={'/euro.png'} width={15} height={15} /> {' ' + props.cardInfo.price}
        </h2>
        <div className="info flex-center__column">
          <h1 className="semi-bold-text">{props.cardInfo.title}</h1>
          {props.width > 450 ? (
            <>
              <p className="semi-bold-text">{props.cardInfo.description}</p>
              <div className={'info__tags'}>
                {props.cardInfo.tags.map((tag: string) => {
                  return (
                    <h2 key={tag} className="card__tag">
                      {tag}
                    </h2>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="flex-center card__tag--division">
              <div className={'info__tags'}>
                {props.cardInfo.tags.map((tag: string) => {
                  return (
                    <h2 key={tag} className="card__tag">
                      {tag}
                    </h2>
                  );
                })}
              </div>
              <p className="semi-bold-text">{props.cardInfo.description}</p>
            </div>
          )}

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
