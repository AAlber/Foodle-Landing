import styles from "./SpecialSection.module.scss";
import Image from "next/image";
function SpecialSection(){
    return (<>
        <div>
            <div className={styles["specialSection"]}>
                <div className={styles["specialSection__grid"]}>
                <h3 className={styles["specialSection__grid__title"]}>What makes foodle special</h3>
                <div className={styles["featuresLayout"]+ " "+ styles["feature1"]}>
                    <div className={styles["featuresLayout__imageSection"]}>
                    <Image src="/pan.png" alt="A pan with food icon" width="300"height="300"/>
                    </div>
                    <div className={styles["featuresLayout__header"]+ " " + "header-tertiary"}>
                        <h2>No upfront costs, focus on what matters: cooking!</h2>
                    </div>
                    <p className={styles["featuresLayout__body"]+ " "+ "body-text"}>
                    Starting a restaurant in Germany is a huge commitment that costs no less than 65K€. Whereas Foodle allows culinary artists to persue their dreams without worrying about money.
                    </p>
                </div>
                <div className={styles["featuresLayout--align-right"]+ " "+ styles["feature2"]}>
                    <div className={styles["featuresLayout__imageSection--align-right"]}>
                    <Image src="/pan.png" alt="A pan with food icon" width="300"height="300"/>
                    </div>
                    <div className={styles["featuresLayout__header--align-right"]+ " "+ "header-tertiary"}>
                        <h2>No upfront costs, focus on what matters: cooking!</h2>
                    </div>
                    <p className={styles["featuresLayout__body--align-right"]+ " " + "body-text"}>
                    Starting a restaurant in Germany is a huge commitment that costs no less than 65K€. Whereas Foodle allows culinary artists to persue their dreams without worrying about money.
                    </p>
                </div>
                <div className={styles["featuresLayout"]+ " " + styles["feature3"]}>
                    <div className={styles["featuresLayout__imageSection"]}>
                    <Image src="/pan.png" alt="A pan with food icon" width="390"height="300"/>
                    </div>
                    <div className={styles["featuresLayout__header"] + " "+ "header-tertiary"}>
                        <h2>No upfront costs, focus on what matters: cooking!</h2>
                    </div>
                    <p className={styles["featuresLayout__body"] + " " + "body-text"}>
                    Starting a restaurant in Germany is a huge commitment that costs no less than 65K€. Whereas Foodle allows culinary artists to persue their dreams without worrying about money.
                    </p>
                </div>
                <div className={styles["featuresLayout--align-right"]+ " "+ styles["feature4"]}>
                    <div className={styles["featuresLayout__imageSection--align-right"]}>
                    <Image src="/pan.png" alt="A pan with food icon" width="300"height="300"/>
                    </div>
                    <div className={styles["featuresLayout__header--align-right"]+ " "+"header-tertiary"}>
                        <h2>No upfront costs, focus on what matters: cooking!</h2>
                    </div>
                    <p className={styles["featuresLayout__body--align-right"] + " " +"body-text"}>
                    Starting a restaurant in Germany is a huge commitment that costs no less than 65K€. Whereas Foodle allows culinary artists to persue their dreams without worrying about money.
                    </p>
                </div>           
            </div>
        </div>
    </div>
</>);
}

export default SpecialSection;