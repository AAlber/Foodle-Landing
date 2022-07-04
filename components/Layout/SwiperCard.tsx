import React from 'react';
import styles from '../../styles/pages/Home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Recoverable } from 'repl';
import { BooleanValueNode } from 'graphql';

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
  distance: string;
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
  if (props !== undefined) {
    return (
      <div className="card">
        <img
          className="slide card__image"
          src={`/carousel-image-${props.index + 1}.png`}
          alt={`Slide ${props.index + 1}`}
        />
        <div className="info flex-center__column">
          <h1 className="semi-bold-text">{props.cardInfo.title}</h1>
          <p>{props.cardInfo.description}</p>
          <div>
            {props.cardInfo.tags.map((tag: string) => {
              return <h2 className="card__tag">{tag}</h2>;
            })}
          </div>
          <button className="primary-btn__smallest">Read More</button>
        </div>
      </div>
    );
  } else return <></>;
};
export default SwiperCard;
