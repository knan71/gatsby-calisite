import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './modules/header.module.scss'

import caliLogo from '../images/logo/logo.svg'

const Header = () => (
  <header className={headerStyles.header}>
    <nav className={headerStyles.nav}>
    <Link className={headerStyles.logo} to="/">
      <img src={caliLogo} alt="calidjib logo"/>
    </Link>
      <ul className={headerStyles.navList}>
        <li className={headerStyles.listItem}>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/"
          >
            home
          </Link>
        </li>
        <li className={headerStyles.listItem}>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/about"
          >
            me
          </Link>
        </li>
        <li className={headerStyles.listItem}>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/blog"
          >
            blog
          </Link>
        </li>
        <li className={headerStyles.listItem}>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/contact"
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
