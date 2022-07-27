import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

export type ConstructionPopupProps = {
  close?: () => void;
  fullPage?: boolean;
  screenWidth: number;
};
const ConstructionPopup = (props: ConstructionPopupProps) => {
  const intl = useIntl();
  const construction = intl.formatMessage({ id: 'component.layout.constructionPopup.construction' });
  const feature = intl.formatMessage({ id: 'component.footer.feature' });
  const pricing = intl.formatMessage({ id: 'component.footer.pricing' });
  return (
    <div
      className="construction-popup"
      style={{
        width: props.fullPage ? '100%' : '80%',
        height: props.fullPage ? '100%' : '70%',
        position: props.fullPage ? 'fixed' : 'inherit',
        top: props.fullPage ? 0 : '15%',
        left: props.fullPage ? 0 : '10%',
        display: 'flex',
        zIndex: 1000,

        opacity: 1,
        justifyContent: props.fullPage ? 'center' : 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',
        padding: props.fullPage ? 0 : '30px 20px 30px 20px',
        border: 'none !important',
        background: '#00695c',
        gap: '1rem',
      }}
    >
      <Image src={'/construction.png'} width={50} height={50} />
      <h1 className="semi-bold-text header-tertiary white-text">
        Foodle is still under construction
        <br />
      </h1>
      <p className="smallest-text">
        However, we are already beginning to match up cooks and bakers with licensed kitchens. So simply go up and and
        enter your email to join.
      </p>
      {props.fullPage ? (
        <Link href={'/'}>
          <a className="primary-btn-small body-text pb-1" onClick={props.close}>
            {/* <p className="primary-btn-small body-text pb-1" onClick={props.close}>
              {' '} */}
            Return To Sign Up
            {/* </p> */}
          </a>
        </Link>
      ) : (
        <p className={'primary-btn-small body-text pb-1 '} onClick={props.close}>
          {' '}
          Return To Posts
        </p>
      )}
    </div>
  );
};
export default ConstructionPopup;
