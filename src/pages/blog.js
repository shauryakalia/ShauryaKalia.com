import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs }
  }
}) => {
  return <Layout>
    <section className="blog-page">
      <Blogs  blogs={blogs} title="blogs" />
    </section>
  </Layout> 
}

export const query = graphql`
  {
    allStrapiBlogs(sort: {fields: date, order: DESC}) {
      nodes {
        category
        date(formatString: "do MMM, YYYY")
        description
        id
        slug
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Blog
