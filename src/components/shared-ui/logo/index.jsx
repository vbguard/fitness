import React from 'react'
import './styles.css'
import logoImg from '../../../assets/images/logo.png'

const Logo = () => (
  <div className="logo">
    <img alt="logo"
      className="img"
      src={logoImg}
    />
    <p className="p">HeSpo</p>
  </div>
)
export default Logo
