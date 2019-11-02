/* eslint-disable react/no-danger */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image';
import pageStyles from './modules/page.module.scss'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
// eslint-disable-next-line arrow-body-style
const Blog = props => {
  return (
    <Layout>
      <div className={pageStyles.heading}>
      <h3 className={pageStyles.page_title}>
        {props.data.markdownRemark.frontmatter.title}
      </h3>
      
      <p className={pageStyles.page_date}>
        {props.data.markdownRemark.frontmatter.date}
      </p>
      </div>
      <div
        className={pageStyles.page_container}
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </Layout>
  )
}

export default Blog
