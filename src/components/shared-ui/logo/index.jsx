import React from 'react';
import styles from './styles.css';
import logoImg from '../../../images/logo.png';

const Logo = () => (
  <div className={styles.logo}>
    <img className={styles.img} src={logoImg} alt="logo" />
    <p className={styles.p}>HeSpo</p>
  </div>
);
export default Logo;
