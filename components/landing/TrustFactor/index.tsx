import React, { useRef } from 'react';
import styles from './TrustFactor.module.scss';
import Image from 'next/image';

interface TrustFactorProps {
  width: number;
  title: string;
  text: string;
  shortText: string;
  iconSrc: string;
}

const TrustFactor = (props: TrustFactorProps) => {
  return (
    <div className={styles['trustFactor']}>
      <div>
        <Image loading='lazy' src={props.iconSrc} width={70} height={70} alt={" - "+props.title}/>
        {/* TODO: Make headers SEO friendly */}
        <h3 className={'header-tertiary'}>{props.title}</h3>
        <p className={'body-text'}>{props.width < 720 ? props.shortText : props.text}</p>
      </div>
    </div>
  );
};
export default TrustFactor;
