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
  const constructionTitle = intl.formatMessage({ id: 'component.layout.constructionPopup.title' });
  const constructionDescription = intl.formatMessage({ id: 'component.layout.constructionPopup.description' });
  const constructionSignUp = intl.formatMessage({ id: 'component.layout.constructionPopup.signup' });
  const constructionReturn = intl.formatMessage({ id: 'component.layout.constructionPopup.return' });
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
        {constructionTitle}
        <br />
      </h1>
      <p className="smallest-text">{constructionDescription}</p>
      {props.fullPage ? (
        <Link href={'/'}>
          <a className="primary-btn-small body-text pb-1" onClick={props.close}>
            {constructionSignUp}
          </a>
        </Link>
      ) : (
        <p className={'primary-btn-small body-text pb-1 '} onClick={props.close}>
          {constructionReturn}
        </p>
      )}
    </div>
  );
};
export default ConstructionPopup;
