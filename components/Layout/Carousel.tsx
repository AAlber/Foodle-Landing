import React from 'react';
import styles from '../../styles/pages/Home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, Scrollbar, FreeMode, Mousewheel } from 'swiper';
import { Recoverable } from 'repl';
import SwiperCard, { KitchenCardInfo } from './SwiperCard';

// interface CarouselProps {
//   leftText: string;
//   rightText: string;
//   containerStyle: string;
// }

SwiperCore.use([Navigation]);

export const KitchenCards: KitchenCardInfo[] = [
  {
    title: 'Industrial Grade Kitchen Mitte',
    description: 'Practically New Kitchen in the center of the center. ',
    shared: true,
    verified: true,
    oven: true,
    skillet: true,
    freezer: true,
    fridge: true,
    hotPlate: true,
  },
  {
    title: 'Cozy 3 person kitchen Moabit. We like to keep clean and ',
    description: 'Small kitchen with not so much equipment, but  but an opportunity for long term rental.',
    verified: true,
    oven: true,
    fridge: true,
    hotPlate: true,
  },
  {
    title: 'Pizzeria Kitchen Friedrichshain',
    description: 'Practically New Kitchen in the center of the center. We have many tools',
    shared: true,
    verified: true,
    oven: true,
    skillet: true,
    freezer: true,
    fridge: true,
    hotPlate: true,
  },
];
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
        grabCursor={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          // when window width is >= 640px

          0: {
            // width: 640,
            slidesPerView: 1,
            // spaceBetween: 50,
          },
          700: {
            slidesPerView: 2,
          },

          // when window width is >= 768px
          1080: {
            // width: 768,
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
        modules={[Pagination, Navigation, Autoplay, FreeMode, Mousewheel]}
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
