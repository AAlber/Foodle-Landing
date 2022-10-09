import React from 'react';
import styles from './Button.module.scss';
export enum Types {
  primary = 'primary',
  primaryLight = 'primaryLight',
  secondary = 'secondary',
  tertiary = 'tertiary',
  quarternary = 'quarternary',
}
export enum Sizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export type ButtonProps = {
  type: Types;
  size: Sizes;
  text: string;
};
const Button = (props: ButtonProps) => {
  return <button className={styles[props.type + '-' + props.size]}>{props.text}</button>;
};
export default Button;
