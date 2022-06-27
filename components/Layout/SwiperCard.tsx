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
  //   image: string;
  verified?: boolean;
  oven?: boolean;
  fridge?: boolean;
  pizzaOven?: boolean;
  frontOfHouseIncluded?: boolean;
  freezer?: boolean;
  skillet?: boolean;
  hotPlate?: boolean;
  shared?: boolean;
};

SwiperCore.use([Navigation]);
type SwiperCardProps = {
  index: number;
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
        <div className="info">
          <h1>Mountain</h1>
          <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
          <button>Read More</button>
        </div>
      </div>
    );
  } else return <></>;
};
export default SwiperCard;
