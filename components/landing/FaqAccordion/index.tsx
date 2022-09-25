import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './FaqAccordion.module.scss';

export type FaqAccordionProps = {
  title: string;
  content: string;
};

const FaqAccordion = (props: FaqAccordionProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [imageStyle, setImageStyle] = useState<string>('');
  useEffect(() => {
    imageStyle === '' ? setImageStyle(imageStyle + styles['rotate']) : setImageStyle('');
  }, [isActive]);

  return (
    <div>
      <div className={styles['question']} onClick={() => setIsActive(!isActive)}>
        <div className={styles['question__title']}>{props.title}</div>
        <Image className={imageStyle} alt={'xmark'} src={'/xmark.svg'} width={15} height={15} />
      </div>
      {isActive && <div className={styles['question__content']}>{props.content}</div>}

      <hr className={styles['hr']} />
    </div>
  );
};

export default FaqAccordion;
