import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './modules/footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerInner}>
        <p>
           © {new Date().getFullYear()}. Crafted by{' '}
          <span className={footerStyles.myname}>
            {data.site.siteMetadata.author}
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
