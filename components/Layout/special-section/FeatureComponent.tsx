import Image from 'next/image';
import styles from "./FeatureComponent.module.scss";

type FeatureComponentProps = {
    title: string;
    body:string;
    imageUrl:string;
    alignRight:boolean;
}
function FeatuerComponent(props:FeatureComponentProps){
    return (<>
         <div className={styles["featuresLayout"]}>
                    <div className={styles["featuresLayout__imageSection"]}>
                    <Image src={props.imageUrl} alt="An icon" width="237"height="237"/>
                    </div>
                    <div className={styles["featuresLayout__header"]+ " "+ "header-secondary"}>
                        <h2>{props.title}</h2>
                    </div>
                    <p className={styles["featuresLayout__body"]+ " "+ "body-text"}>
                        {props.body}
                    </p>
                </div>
    </>)
}
export default FeatuerComponent;