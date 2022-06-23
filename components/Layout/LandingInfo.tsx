import { NextComponentType, NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "../../styles/pages/Home.module.scss";
import Tab from "./Tab";

interface LandingInfoProps {
  leftText: string;
  rightText: string;
  containerStyle: string;
}

const LandingInfo = (props: LandingInfoProps) => {
  return (
    <div className={styles[props.containerStyle]}>
      <div className={styles["landing-info__wrapper"]}>
        <div className={styles["landing-info__left"] + " header-secondary"}>
          {props.leftText}
        </div>
        <div className={styles["landing-info__right"] + " body-text"}>
          {props.rightText}
        </div>
      </div>
    </div>
  );
};
export default LandingInfo;
