import React from 'react';
import styles from '../../styles/pages/Home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Recoverable } from 'repl';
import SwiperCard from './SwiperCard';

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
        breakpoints={{
          // when window width is >= 640px

          0: {
            // width: 640,
            slidesPerView: 1,
            // spaceBetween: 50,
          },
          // when window width is >= 768px
          900: {
            // width: 768,
            slidesPerView: 2,
          },
          1560: {
            slidesPerView: 3,
          },
        }}
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
              <SwiperCard index={index} />
            </SwiperSlide>
            // </>
          );
        })}
      </Swiper>
    </>
  );
};
export default Carousel;
