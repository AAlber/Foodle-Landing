import Image from 'next/image';
import styles from './FeatureComponent.module.scss';

type FeatureComponentProps = {
  title: string;
  body: string;
  imageUrl: string;
};
function FeatuerComponent(props: FeatureComponentProps) {
  return (
    <>
      <div className={styles['featuresLayout']}>
        <Image src={props.imageUrl} alt="An icon" width="235" height="235" />
        <div className={styles['textContainer']}>
          <h3 className={styles['textContainer__header'] + ' header-tertiary'}>{props.title}</h3>
          <p className={styles['textContainer__body'] + ' ' + 'body-text'}>{props.body}</p>
        </div>
      </div>
    </>
  );
}
export default FeatuerComponent;

{
  /* <div className={styles["featuresLayout"]+ " "+ styles["feature1"]}>
                    <div className={styles["featuresLayout__imageSection"]}>
                    <Image src="/pan.png" alt="A pan with food icon" width="300"height="300"/>
                    </div>
                    <div className={styles["featuresLayout__header"]+ " " + "header-tertiary"}>
                        <h2>No upfront costs, focus on what matters: cooking!</h2>
                    </div>
                    <p className={styles["featuresLayout__body"]+ " "+ "body-text"}>
                    Starting a restaurant in Germany is a huge commitment that costs no less than 65K€. Whereas Foodle allows culinary artists to persue their dreams without worrying about money.
                    </p>
                </div> */
}
