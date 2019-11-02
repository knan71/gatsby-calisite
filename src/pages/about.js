/* eslint-disable arrow-body-style */
import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import aboutStyles from './modules/about.module.scss'

const AboutPage = () => {
  return (
    <Layout>
      <h1 className={aboutStyles.title}>بسم الله الرحمان الرحيم</h1>
        <div className={aboutStyles.me}>
        <p>
      Hi, my name is Ali Mohammed and I create websites that have priority over design, <br/>
      functionality. I love to create ideas and then put them on paper until they become reality.<br/>
      Feel free to email me.
      </p>
        </div>       
    <p className={aboutStyles.p}>
      Ma dooneysaa inaad ila shaqeyso? <Link className={aboutStyles.link} to="/contact">Ila soo xiriir. </Link>
      </p>    
    </Layout>
  )
}

export default AboutPage
