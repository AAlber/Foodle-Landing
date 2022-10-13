import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './Faq.module.scss';
import FaqAccordion from '../FaqAccordion/index';

import { useIntl } from 'react-intl';
import FadeInWrapper from '../../../utils/FadeInWrapper';

const Faq = () => {
  const intl = useIntl();
  const faqQuestion1 = intl.formatMessage({ id: 'page.home.faq.question.1' });
  const faqQuestion2 = intl.formatMessage({ id: 'page.home.faq.question.2' });
  const faqQuestion3 = intl.formatMessage({ id: 'page.home.faq.question.3' });
  const faqAnswer1 = intl.formatMessage({ id: 'page.home.faq.answer.1' });
  const faqAnswer2 = intl.formatMessage({ id: 'page.home.faq.answer.2' });
  const faqAnswer3 = intl.formatMessage({ id: 'page.home.faq.answer.3' });
  const faqData: { title: string; content: string }[] = [
    {
      title: faqQuestion1,
      content: faqAnswer1,
    },
    {
      title: faqQuestion2,
      content: faqAnswer2,
    },
    {
      title: faqQuestion3,
      content: faqAnswer3,
    },
  ];

  return (
    <div className={styles['faq']}>
      <div className="header-primary">
        <FadeInWrapper>
        <h4>F.A.Q.</h4>
        </FadeInWrapper>
      </div>

      <div className={styles['accordion']}>
        <hr />
        {faqData.map(({ title, content }, index) => (
          <FaqAccordion title={title} content={content} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
