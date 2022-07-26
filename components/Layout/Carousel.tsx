import React from 'react';
import styles from '../../styles/pages/Home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, Scrollbar, FreeMode, Mousewheel } from 'swiper';
import { Recoverable } from 'repl';
import SwiperCard, { KitchenCardInfo } from './SwiperCard';
import { kitchenCards } from '../../pages';

SwiperCore.use([Navigation]);
export type CarouselProps = {
  width: number;
};
const Carousel = (props: CarouselProps) => {
  return (
    <>
      <Swiper
        id="swiper-replace"
        slidesPerView={3}
        centeredSlides={true}
        centeredSlidesBounds={true}
        grabCursor={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          1080: {
            slidesPerView: 3,
          },
          1560: {
            slidesPerView: 4,
          },
          2000: {
            slidesPerView: 5,
          },
        }}
        // centerMode={true}
        freeMode={true}
        mousewheel={true}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, FreeMode, Mousewheel]}
      >
        {Array.from(Array(6)).map((el, index) => {
          return (
            // <>
            <SwiperSlide key={index}>
              <SwiperCard width={props.width} index={index} cardInfo={kitchenCards[index]} />
            </SwiperSlide>
            // </>
          );
        })}
      </Swiper>
    </>
  );
};
export default Carousel;
