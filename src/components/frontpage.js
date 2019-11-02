import React from 'react'
import frontStyles from './modules/front.module.scss'
import Header from './header'
import Footer from './footer'



const Frontpage = props => (
  <div className={frontStyles.wrapper}>
    <Header />
    <div className={frontStyles.innerWrapper}>{props.children}</div>   
   <Footer />
  </div>
)

export default Frontpage
