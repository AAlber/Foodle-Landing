import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './faq.module.scss';
import FaqAccordion from '../FaqAccordion/index';


const Faq = () => {


    const faqData: { title: string, content: string }[] = [
        {
          title: 'hic temporibus velit dicta earu?',
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.`
        },
        {
          title: 'hic temporibus velit dicta earum suscipit commodi eu?',
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.`
        },
        {
          title: 'hic temporibus velit dicta earum suscipit commodi eum enim atque at?',
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`
        },
        {
          title: 'hic temporibus velit dicta earum susc?',
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.`
        },
        {
          title: 'hic temporibus velit dicta earum suscipit commodi eum?',
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`
        }
    ];

    return (

        <div className={styles['faq']}>

            <div className={styles['faq__title']}>
                <h1>F.A.Q</h1>
            </div>

            <div className="">
                {faqData.map(({ title, content }) => (
                    <FaqAccordion title={title} content={content} />
                ))}
            </div>
            
        </div>

    );
  };
  
  export default Faq;