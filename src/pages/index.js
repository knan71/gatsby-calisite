import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Frontpage from '../components/frontpage'
import indexStyles from './modules/index.module.scss'
import '../styles/index.scss'
import Icon1 from '../assets/hand-point-right.svg'
import Img from "gatsby-image"
import imgStyles from '../styles/img.module.scss'

const IndexPage = () => {
  
  const data = useStaticQuery(graphql`
  
    query {
      file(relativePath: { eq: "images/djibouti.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
      site {
        siteMetadata {
          title
        }        
      }
    }
  `)
  return (
  <Frontpage>   
      <div className={imgStyles.imageWrapper}>
      <Img className={imgStyles.image} fluid={data.file.childImageSharp.fluid}
        alt="webdev" 
        />
        </div>    
        <h1 className={indexStyles.theName}>{data.site.siteMetadata.title}</h1>
      <h3 className={indexStyles.welcome}>
        Asaalamu Caleykum <br /> ku soo dhawoow
        websaydhkayga cusub ee Cali.
      </h3>
      <p className={indexStyles.paraIndex}>
        Hadaad u baahan tahay web soo-saare<span>        <Icon1 
        width="20px"
        fill="#fab980"
        padding="0 1rem"
        /></span>
        {' '}

        <Link to="/contact"> 
         <span> ila soo xiriir. </span></Link>
      </p>
    </Frontpage>
  )
}

export default IndexPage
