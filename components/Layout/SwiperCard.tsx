import React from 'react';
import styles from '../../styles/pages/Home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Recoverable } from 'repl';

// interface CarouselProps {
//   leftText: string;
//   rightText: string;
//   containerStyle: string;
// }

SwiperCore.use([Navigation]);
type SwiperCardProps = {
  index: number;
};
const SwiperCard = (props: SwiperCardProps) => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card__thumb">
            {/* <img
              src="https://source.unsplash.com/75S9fpDJVdo/300x510"
              alt="Picture by Kyle Cottrell"
              className="card__image"
            /> */}
            <img
              className="slide card__image"
              src={`/carousel-image-${props.index + 1}.png`}
              alt={`Slide ${props.index}`}
            />
            <div className="card__caption">
              <h2 className="card__title">NASA Has Found Hundreds Of Potential New Planets</h2>
              <p className="card__snippet">
                NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of
                which are similar to Earth’s size and may be habitable by other life forms.
              </p>
              <a href="" className="card__button">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SwiperCard;
