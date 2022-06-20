import { ChangeEvent, MutableRefObject, useEffect, useRef, useState } from 'react';
import { FindUserQuery, FindUserResult, User, useUpdateUserMutation } from '../../codegen';
import { UploaderImg } from '../Create/wizard/Step4';
import styles from '../../pages/account/Account.module.scss';
import ProfileButton, { UploaderImage } from './ProfileButton';
import { Token } from '../../utils/forgeJWT';
import { urlSafeEncode } from '@aws-amplify/core';
interface ProfileFormProps {
  session: Token['user'];
  jwt: string;
  user: FindUserQuery | undefined;
  isMountedRef: MutableRefObject<boolean>;
}

const ProfileForm = (props: ProfileFormProps) => {
  const { mutate, data } = useUpdateUserMutation({
    endpoint: process.env.NEXT_PUBLIC_SERVER_URL + 'graphql',
    fetchParams: {
      headers: {
        'Content-Type': 'application/json',
        jwt: props.jwt,
      },
    },
  });

  const checkExists = (image: UploaderImage | null | undefined) => {
    return image ? true : false;
  };
  const submit = () => {
    const dobChecked = !isNaN(Date.parse(dob ? dob : '')) ? dob + 'T00:00:00Z' : null;
    const zipChecked = zip && zip !== '' ? parseInt(zip) : null;
    mutate({
      id: props.session.id,
      fullName: fullName,
      zip: zipChecked,
      description: description,
      dob: dobChecked,
      passportS3Id: passport ? passport.s3Id : null,
      solvencyS3Id: solvency ? solvency.s3Id : null,
      licenseS3Id: license ? license.s3Id : null,
    });
    console.log({ data });
  };

  const user = props.user?.findUser.User;

  const [passport, setPassport] = useState<UploaderImage | null>();
  const [solvency, setSolvency] = useState<UploaderImage | null>();
  const [license, setLicense] = useState<UploaderImage | null>();
  const [dob, setDob] = useState<string>(user ? user.dob : '');
  const [fullName, setFullName] = useState<string>(user ? user.fullName : '');
  const [zip, setZip] = useState<string>(user && user.zip ? user.zip?.toString() : '');
  const [description, setDescription] = useState<string>(user && user.description ? user?.description : '');

  const text = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    return e?.target?.value ? e?.target?.value : '';
  };

  return (
    <>
      <h3 className="header-secondary bold">My Profile</h3>
      <p className="body-text grey-text mt-one">
        This is your personal information, autofilled during booking requests for you to customize.
      </p>
      <form className="mt-three" action="">
        <section>
          <label className="body-text bold-medium">First and last name</label>
          <br />
          <input
            onChange={(e) => setFullName(text(e))}
            maxLength={50}
            value={fullName}
            className="profile-form mt-one"
            type="text"
            placeholder={user && user?.fullName ? user?.fullName : 'Jane Doe'}
          />
        </section>

        <section>
          <label className="body-text bold-medium">Date of Birth</label>
          <br />
          <input
            onChange={(e) => {
              setDob(text(e));
            }}
            value={dob}
            maxLength={50}
            className="profile-form"
            type="text"
            placeholder={user && user.dob ? user.dob : '2000-12-24'}
          />
        </section>
        <section>
          <label className="body-text bold-medium">Zip Code</label>
          <br />
          <input
            onChange={(e) => setZip(text(e))}
            maxLength={50}
            value={zip}
            className="profile-form mt-one"
            type="text"
            placeholder={user && user.zip ? user?.zip?.toString() : '13407'}
          />
        </section>
        <section>
          <label className="body-text  bold-medium">Please tell us about yourself</label>
          <br />
          <textarea
            onChange={(e) => setDescription(text(e))}
            className={styles['description-input'] + ' profile-form mt-one'}
            placeholder={user && user.description ? user.description : 'Please tell us about yourself'}
            cols={60}
            value={description}
            rows={20}
            style={{ height: 200 }}
            maxLength={200}
          />
        </section>
        <footer className={styles['account__document-grid'] + ' flex-space-between'}>
          <h2 className="mt-one-half body-text">Passport</h2>
          <h2 className="mt-one-half body-text">License</h2>
          <h2 className="mt-one-half body-text">Solvency</h2>
          <ProfileButton
            imageSetter={(image: UploaderImage | null) => setPassport(image)}
            alreadyUploaded={checkExists(passport)}
            image={passport}
          />
          <ProfileButton
            imageSetter={(image: UploaderImage | null) => setLicense(image)}
            alreadyUploaded={checkExists(license)}
            image={license}
          />
          <ProfileButton
            imageSetter={(image: UploaderImage | null) => setSolvency(image)}
            alreadyUploaded={checkExists(solvency)}
            image={solvency}
          />
        </footer>
      </form>
      <button onClick={() => submit()} className={'primary-btn-small save-btn'}>
        Save
      </button>
    </>
  );
};

export default ProfileForm;
