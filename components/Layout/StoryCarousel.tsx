import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../../styles/pages/Home.module.scss';
import Tab from './Tab';
import { FormattedMessage, useIntl } from 'react-intl';
import SeeMoreCmponent, { WithSeeMore } from 'react-insta-stories';
import Stories from 'react-insta-stories';
import Story from 'react-insta-stories/dist/interfaces';
import SwiperCard, { KitchenCardInfo } from './SwiperCard';
import { createDecipheriv } from 'crypto';
import { nonExecutableDefinitionMessage } from 'graphql/validation/rules/ExecutableDefinitions';

export type StoryCarouselProps = {
  cardInfo: KitchenCardInfo[];
  width: number;
};
const StoryCarousel = (props: StoryCarouselProps) => {
  const intl = useIntl();
  const contact = intl.formatMessage({ id: 'component.navbar.contact' });
  const seeMoreObj = ({ close }: { close: () => void }) => {
    return (
      <div
        style={{
          width: '100%',
          height: '105%',
          display: 'flex',
          opacity: 0.96,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: 20,
          border: 'none !important',

          background: '#00695c',

          zIndex: -1000,
          gap: '2rem',
        }}
      >
        <Image src={'/construction.png'} width={50} height={50} />
        <p className="body-text semi-bold-text">
          Foodle is still under construction
          <br />
        </p>
        <p className="smallest-text">
          However, we are already beginning to match up cooks and bakers with licensed kitchens. So simply go up and and
          enter your email to join.
        </p>
        <p className="primary-btn-small small-text pb-1" onClick={close}>
          {' '}
          Return To Posts
        </p>
      </div>
    );
  };
  const contentObj = (index: number, card: KitchenCardInfo) => {
    return {
      content: ({ action, story }: { action: any; story: any }) => {
        return (
          // props.cardInfo.map((card, index)=>
          <WithSeeMore story={story} action={action}>
            <SwiperCard width={props.width} index={index} cardInfo={card} />
          </WithSeeMore>
        );
      },
    };
  };

  const customSeeMore = {
    textAlign: 'center',
    fontSize: 14,
    bottom: 20,
    position: 'relative',
  };
  const getStories = () => {
    const stories: any = [];
    for (let i = 0; i < 6; i++) {
      stories.push({
        header: {
          heading: props.cardInfo[i].cityRegion,
          profileImage: props.cardInfo[i].cityRegion,
          subheading: props.cardInfo[i].cityRegion,
        },
        seeMore: seeMoreObj,
        content: contentObj(i, props.cardInfo[i]).content,
      });
    }
    return stories;
  };

  return (
    <div className={styles['stories-wrapper']}>
      <Stories stories={getStories()} defaultInterval={15000} loop width={'calc(30rem + 8vw)'} height={'50rem'} />
    </div>
  );
};
export default StoryCarousel;

// {
//     header: {
//       heading: 'Hello1',
//       profileImage: 'https://picsum.photos/100/100',
//       subheading: 'Hello',
//     },
//     seeMore: seeMoreObj,
//     content: contentObj('The Officers').content,
//   }

// })

// [
//   {
//     header: {
//       heading: 'Hello1',
//       profileImage: 'https://picsum.photos/100/100',
//       subheading: 'Hello',
//     },
//     seeMore: seeMoreObj,
//     content: contentObj('Trending JEwelry Offers').content,
//   },
//   {
//     header: {
//       heading: 'Hello1',
//       profileImage: 'https://picsum.photos/100/100',
//       subheading: 'Hello',
//     },
//     seeMore: seeMoreObj,
//     content: contentObj('The Officers').content,
//   },
//   {
//     header: {
//       heading: 'Hello1',
//       profileImage: 'https://picsum.photos/100/100',
//       subheading: 'Hello',
//     },
//     seeMore: seeMoreObj,
//     content: contentObj('Trending JEwelry Offers').content,
//   },
//   {
//     header: {
//       heading: 'Hello1',
//       profileImage: 'https://picsum.photos/100/100',
//       subheading: 'Hello',
//     },
//     seeMore: seeMoreObj,
//     content: contentObj('The Officers').content,
//   },
//   {
//     header: {
//       heading: 'Hello1',
//       profileImage: 'https://picsum.photos/100/100',
//       subheading: 'Hello',
//     },
//     seeMore: seeMoreObj,
//     content: contentObj('Trending JEwelry Offers').content,
//   },
//   {
//     header: {
//       heading: 'Hello1',
//       profileImage: 'https://picsum.photos/100/100',
//       subheading: 'Hello',
//     },
//     seeMore: seeMoreObj,
//     content: contentObj('The Officers').content,
//   },
// ];
{
  /* <div
              style={{
                backgroundImage: `url( https://i.picsum.photos/id/672/1080/1920.jpg?hmac=sI0XyippRsLfYo8ZM6V4ZUwIJvCcb06wro7UewMB7x8 )`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '100%',
                height: '100%',
              }}
            >
              <Image src={'/landing-2.jpg'} width={50} height={50} />
              <h3
                style={{
                  textAlign: 'center',
                  paddingTop: '100%',
                }}
              >
                {title}
              </h3> */
}
{
  /* </div> */
}

// <div style={{ display: 'flex', width: '100%' }}>
//   MohitKarekar
//   <div style={{ display: 'flex', marginLeft: '60%' }}>
//     <MoreHorizIcon />
//     <CancelIcon onClick={close} />
//   </div>
// </div>,
// {
//       header: {
//         heading: (
//           <div style={{ display: 'flex', width: '100%' }}>
//             MohitKarekar
//             <div style={{ display: 'flex', marginLeft: '60%' }}>
//               <MoreHorizIcon />
//               <CancelIcon onClick={close} />
//             </div>
//           </div>
//         ),
//         profileImage: 'https://picsum.photos/100/100',
//       },

//       seeMore: ({ close }: { close: () => void }) => (
//         <div
//           style={{
//             maxWidth: '100%',
//             height: '100%',
//             padding: 40,
//             background: 'white',
//           }}
//         >
//           <h2>Just checking the see more feature.</h2>
//           <p style={{ textDecoration: 'underline' }} onClick={close}>
//             Go on, close this popup <CancelIcon />.
//           </p>
//         </div>
//       ),

//       content: ({ action, story }: { action: any; story: any }) => {
//         return (
//           <WithSeeMore story={story} action={action}>
//             <div
//               style={{
//                 backgroundImage: `url( https://i.picsum.photos/id/672/1080/1920.jpg?hmac=sI0XyippRsLfYo8ZM6V4ZUwIJvCcb06wro7UewMB7x8 )`,
//                 backgroundRepeat: 'no-repeat',
//                 backgroundSize: 'cover',
//                 width: '100%',
//                 height: '100%',
//               }}
//             >
//               <h3
//                 style={{
//                   textAlign: 'center',
//                   paddingTop: '100%',
//                 }}
//               >
//                 Trending Jewelry Offers .
//               </h3>
//             </div>
//           </WithSeeMore>
//         );
//       },
//       duration: 5000,
//     },
//     {
//       header: {
//         heading: (
//           <div style={{ display: 'flex', width: '100%' }}>
//             MohitKarekar
//             <div style={{ display: 'flex', marginLeft: '60%' }}>
//               <MoreHorizIcon />
//               <CancelIcon onClick={close} />
//             </div>
//           </div>
//         ),
//         profileImage: 'https://picsum.photos/100/100',
//       },

//       seeMore: ({ close }: { close: () => void }) => (
//         <div
//           style={{
//             maxWidth: '100%',
//             height: '100%',
//             padding: 40,
//             background: 'white',
//           }}
//         >
//           <h2>Just checking the see more feature.</h2>
//           <p style={{ textDecoration: 'underline' }} onClick={close}>
//             Go on, close this popup <CancelIcon />.
//           </p>
//         </div>
//       ),
//       content: ({ action, story }: { action: any; story: any }) => {
//         return (
//           <WithSeeMore story={story} action={action}>
//             <div
//               style={{
//                 backgroundImage: `url( https://i.picsum.photos/id/672/1080/1920.jpg?hmac=sI0XyippRsLfYo8ZM6V4ZUwIJvCcb06wro7UewMB7x8 )`,
//                 backgroundRepeat: 'no-repeat',
//                 backgroundSize: 'cover',
//                 width: '100%',
//                 height: '100%',
//               }}
//             >
//               <h3
//                 style={{
//                   textAlign: 'center',
//                   paddingTop: '100%',
//                 }}
//               >
//                 Trending Jewelry Offers .
//               </h3>
//             </div>
//           </WithSeeMore>
//         );
//       },
//       duration: 5000,
//     },
//     // export interface Story {
//     //   url?: string;
//     //   seeMore?: Function;
//     //   seeMoreCollapsed?: React.ComponentType<{
//     //     toggleMore: (show: boolean) => void;
//     //     action: Action;
//     //   }>;
//     //   header?: Header;
//     //   type?: string;
//     //   duration?: number;
//     //   styles?: object;
//     //   content?: Renderer;
//     //   originalContent?: Renderer;
//     // }
