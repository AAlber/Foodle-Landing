import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import styles from './Navbar.module.scss';
import Tab from './Tab';

const Navbar = () => {
  const intl = useIntl();
  const why = intl.formatMessage({ id: 'component.navbar.why' });
  const joinFoodle = intl.formatMessage({ id: 'component.navbar.join' });
  const what = intl.formatMessage({ id: 'component.navbar.what' });

  const router = useRouter()
  const isInterviewPage= router.pathname === '/interviews';
  return (
    <nav className={isInterviewPage ?  'flex-center '+ styles['navbar']: styles['navbar']}>
      <div className={styles['navbar__logo'] }>
        <Link href="/" passHref>
          <div className="flex-center">
            <p>
              <Image loading='lazy' src="/foodle_logo.svg" width={45} height={27} alt="Foodle Logo" />
            </p>
            <h2 className="logo-text green-text">Foodle</h2>
          </div>
        </Link>
      </div>
      {
        isInterviewPage? <></>: 
        <div className={styles['navbar__menu']}>
        <Tab href="/" iconSrc={'/world-icon.svg'} title="EN" burger={false} />
        <Tab href="#join-foodle" title={joinFoodle} />
        <Tab href="#special-section" title={what} />
        <Tab href="#trust-factors" title={why} />
        {/* <Tab href="#contact" title={contact} /> */}
        <Tab href="#faq" title="F.A.Q." />
      </div>
              
      }
      
    </nav>
  );
};
export default Navbar;
