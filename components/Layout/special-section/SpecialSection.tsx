import styles from './SpecialSection.module.scss';
import Image from 'next/image';
import FeatureComponent from './FeatureComponent';
import { useIntl } from 'react-intl';
import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';

type SpecialSectionProps = {
  title:string,
}
function SpecialSection(props:SpecialSectionProps) {
  const intl = useIntl();
  const specialMainTitle = intl.formatMessage({ id: 'page.home.special.mainTitle' });
  const specialTitle1 = intl.formatMessage({ id: 'page.home.special.title.1' });
  const specialTitle2 = intl.formatMessage({ id: 'page.home.special.title.2' });
  const specialTitle3 = intl.formatMessage({ id: 'page.home.special.title.3' });
  const specialTitle4 = intl.formatMessage({ id: 'page.home.special.title.4' });
  const specialText1 = intl.formatMessage({ id: 'page.home.special.text.1' });
  const specialText2 = intl.formatMessage({ id: 'page.home.special.text.2' });
  const specialText3 = intl.formatMessage({ id: 'page.home.special.text.3' });
  const specialText4 = intl.formatMessage({ id: 'page.home.special.text.4' });
  return (
    <>
      <div>
        <div className={styles['specialSection']}>
          <div className={styles['specialSection__flex']}>
            <h3 className={styles['specialSection__header'] + ' header-tertiary'}><b>{props.title}</b></h3>

            <div className={styles['specialSectionGrid']}>
              <FeatureComponent title={specialTitle1} body={specialText1} imageUrl="/palm.svg" />
              <FeatureComponent title={specialTitle2} body={specialText2} imageUrl="/bike.svg" />
              <FeatureComponent title={specialTitle3} body={specialText3} imageUrl="/pan.svg" />
              <FeatureComponent title={specialTitle4} body={specialText4} imageUrl="/dollarsign.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialSection;
