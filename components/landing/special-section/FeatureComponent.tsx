import Image from 'next/image';
import styles from './FeatureComponent.module.scss';

type FeatureComponentProps = {
  title: string;
  body: string;
  imageUrl: string;
  br?: boolean;
};
function FeatureComponent(props: FeatureComponentProps) {
  return (
    <>
      <div className={styles['featuresLayout']}>
        <Image src={props.imageUrl} alt="An icon" width="200" height="200" />
        <div className={styles['textContainer']}>
          <h3 className={styles['textContainer__header'] + ' header-tertiary'}>
            {props.title}
            {/* TODO: Make these header's contain keywords */}
          </h3>
          <p className={styles['textContainer__body'] + ' ' + 'body-text'}>{props.body}</p>
        </div>
      </div>
    </>
  );
}
export default FeatureComponent;

