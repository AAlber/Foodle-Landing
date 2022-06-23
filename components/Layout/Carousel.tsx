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

const Carousel = () => {
  return (
    <>
      <Swiper
        id="swiper-replace"
        slidesPerView={3}
        // spaceBetween={5}
        // slidesPerGroup={3}
        centeredSlides={true}
        centeredSlidesBounds={true}
        // centerMode={true}
        freeMode={true}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {Array.from(Array(6)).map((el, index) => {
          return (
            // <>
            <SwiperSlide key={index}>
              <img className="slide" src={`/carousel-image-${index + 1}.png`} alt={`Slide ${index}`} />
            </SwiperSlide>
            // </>
          );
        })}
      </Swiper>
    </>
  );
};
export default Carousel;
