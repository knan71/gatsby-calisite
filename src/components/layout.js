/* eslint-disable react/prop-types */
import React from 'react'
import Header from './header'
import Footer from './footer'
import layoutStyles from './modules/layout.module.scss'

const Layout = props => (
  <div className={layoutStyles.container}>
    <Header />
    <div className={layoutStyles.content}>
      {
        // eslint-disable-next-line react/destructuring-assignment
        props.children
      }
    </div>
    <Footer />
  </div>
)

export default Layout
