import React from 'react'
import styles from './styles.css'
import logoImg from '../../../assets/images/logo.png'

const Logo = () => (
  <div className={styles.logo}>
    <img alt="logo"
      className={styles.img}
      src={logoImg}
    />
    <p className={styles.p}>HeSpo</p>
  </div>
)
export default Logo
