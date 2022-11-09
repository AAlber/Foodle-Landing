import { useIntl } from 'react-intl';
import styles from './TrustNumbers.module.scss';
function TrustNumbers() {

  const intl = useIntl();

  const trustNumber1 = intl.formatMessage({ id: 'page.home.hero.trustNumber.1' });
  const trustNumber2 = intl.formatMessage({ id: 'page.home.hero.trustNumber.2' });
  const trustNumber3 = intl.formatMessage({ id: 'page.home.hero.trustNumber.3' });
  const trustNumbers = [trustNumber1,trustNumber2,trustNumber3]
  return (
    <div className="flex-center">
            <div className={styles['stats']}>
              {['0€', '+15', '0'].map((number, index) => {
                return (
                  <div key= {index} className={styles['stat']}>
                    <p className={styles['stat__amount']}>{number}</p>
                    <div className="flex-center">
                      <p className={styles['stat__text'] + ' body-text'}>{trustNumbers[index]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
  );
}
export default TrustNumbers;

