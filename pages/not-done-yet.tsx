import React from 'react';
import Navbar from '../components/Layout/Navbar';
import { GetServerSidePropsContext, NextPage } from 'next';
import ConstructionPopup from '../components/Layout/ConstructionPopup';
import useWindowDimensions from '../hooks/useWindowDimensions';

const NotDoneYet: NextPage = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div>
      <Navbar />
      <ConstructionPopup screenWidth={width!} fullPage={true} />
    </div>
  );
};

export default NotDoneYet;
