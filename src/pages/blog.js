import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from '../templates/modules/post.module.scss'
import Layout from '../components/layout'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1 className={blogStyles.qodob}>Qodobbada</h1>
      <ul className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            
            <li className={blogStyles.post}>
              <Link
                to={`/blog/${edge.node.fields.slug}`}
                className={blogStyles.content_wrapper}
              >
                <div className={blogStyles.content_inner}>
                  <h3 className={blogStyles.post_title}>
                    {edge.node.frontmatter.title}
                  </h3>
                  <p>
                    <span className={blogStyles.date}>
                      {edge.node.frontmatter.date}
                    </span>
                  </p>

                </div>
              </Link>
            </li>
            
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogPage
