import { useIntl } from 'react-intl';
import styles from './TrustNumbers.module.scss';
function TrustNumbers() {

  const intl = useIntl();

  const trustNumber1 = intl.formatMessage({ id: 'page.home.hero.trustNumber.1' });
  const trustNumber2 = intl.formatMessage({ id: 'page.home.hero.trustNumber.2' });
  const trustNumber3 = intl.formatMessage({ id: 'page.home.hero.trustNumber.3' });
  return (
    <div className="flex-center">
            <div className={styles['trustNumbers']}>
              {['0€', '+15', '0'].map((number, index) => {
                let trustNumber = [trustNumber1, trustNumber2, trustNumber3][index];
                return (
                  <div key= {index} className={styles['trustNumbers__container'+(index===2? "--last-child":"")]}>
                    <p className={styles['trustNumbers__number']}>{number}</p>
                    <div className="flex-center">
                      <p className={styles['trustNumbers__text'+(index===2? "--last-child":"")] + ' body-text'}>{trustNumber}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
  );
}
export default TrustNumbers;

