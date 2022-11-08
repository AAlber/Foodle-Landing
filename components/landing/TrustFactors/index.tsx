import React, { useRef, useState } from 'react';
import styles from './TrustFactors.module.scss';
import Image from 'next/image';
import { useIntl } from 'react-intl';

interface TrustFactor {
  title: string;
  text: string;
  shortText: string;
  iconSrc: string;
}
interface TrustFactorsProps {
  width: number;
}

const TrustFactorContainer = (props: TrustFactorsProps) => {
  const intl = useIntl();
  const trustFactorTitle1 = intl.formatMessage({ id: 'page.home.trustFactor.title.1' });
  const trustFactorTitle2 = intl.formatMessage({ id: 'page.home.trustFactor.title.2' });
  const trustFactorTitle3 = intl.formatMessage({ id: 'page.home.trustFactor.title.3' });
  const trustFactorText1 = intl.formatMessage({ id: 'page.home.trustFactor.text.1' });
  const trustFactorText2 = intl.formatMessage({ id: 'page.home.trustFactor.text.2' });
  const trustFactorText3 = intl.formatMessage({ id: 'page.home.trustFactor.text.3' });
  const trustFactorTextShort1 = intl.formatMessage({ id: 'page.home.trustFactor.text.short.1' });
  const trustFactorTextShort2 = intl.formatMessage({ id: 'page.home.trustFactor.text.short.2' });
  const trustFactorTextShort3 = intl.formatMessage({ id: 'page.home.trustFactor.text.short.3' });
  const [trustFactors, setTrustFactors]=useState<TrustFactor[]>( [
    {
      title: trustFactorTitle1,
      text: trustFactorText1,
      iconSrc: '/pot.svg',
      shortText: trustFactorTextShort1,
    },
    {
      title: trustFactorTitle2,
      text: trustFactorText2,
      iconSrc: '/support.svg',
      shortText: trustFactorTextShort2,
    },
    {
      title: trustFactorTitle3,
      text: trustFactorText3,
      iconSrc: '/verified.svg',
      shortText: trustFactorTextShort3,
    },
  ]);

  return (
    <div className={styles['trustFactors']}>
      {trustFactors.map(({iconSrc,shortText,text,title}, index) => {
        return(
        <div className={styles['trustFactor']} key={index}>
          <div>
            <Image loading="lazy" src={iconSrc} width={70} height={70} alt={' - ' + title} />
            {/* TODO: Make headers SEO friendly */}
            <h3 className={'header-tertiary'}>{title}</h3>
            <p className={'body-text'}>{props.width < 720 ? shortText : text}</p>
          </div>
        </div>
        )
      })}
    </div>
  );
};
export default TrustFactorContainer;
