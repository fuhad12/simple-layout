import React from 'react'
import classes from './Header.module.css'
import HeaderLogo from '../../Assets/airbnb.png'

const Header = () => {
  return (
    <header>
    <div className={classes.container}>
      <img src={HeaderLogo} alt="LOGO" />
    </div>
    </header>
  )
}

export default Header