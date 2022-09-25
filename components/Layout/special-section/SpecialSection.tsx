import styles from './SpecialSection.module.scss';
import Image from 'next/image';
import FeatureComponent from './FeatureComponent';

function SpecialSection() {
  return (
    <>
      <div>
        <div className={styles['specialSection']}>
          <div className={styles['specialSection__flex']}>
            <h3 className={styles['specialSection__header'] + ' header-tertiary'}>What makes Foodle Special?</h3>

            <div className={styles['specialSectionGrid']}>
              <FeatureComponent
                title="No upfront costs, focus on what matters: cooking!"
                body="To start a new resturant in Germany, you can easil expect to pay 50-60k€. Foodle allows culinary artists to pursue their dreams without taking any risks."
                imageUrl="/pan.png"
              />
              <FeatureComponent
                title="Make money right away"
                body="75% of your profits go directly to you. We invest the rest straight back into maintenance as well as marketing our wonderful cooks."
                imageUrl="/pan.png"
              />
              <FeatureComponent
                title="Delivery apps supported"
                body="We will promote and sell your dishes on all major delivery apps (Wolt, Uber Eats, Lieferando, etc) so that your food creations can reach a wider audience."
                imageUrl="/pan.png"
              />
              <FeatureComponent
                title="Build your authentic menus"
                body="Our chefs have the absolute freedom to invent and develop their signature dishes. Foodle is all about empowering and enabling culinary creators."
                imageUrl="/pan.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialSection;
