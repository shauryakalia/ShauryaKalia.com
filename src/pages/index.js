import React, {useEffect, useState} from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"


export default ({ data }) => {

  const {
    allStrapiProjects: {nodes: projects},
    allStrapiBlogs: {nodes: blogs}
  } = data

  return <Layout>
    <Helmet>
        {/* <script src={withPrefix('vwo.js')} type="text/javascript" /> */}
        {/* <script src={withPrefix('hotjar.js')} type="text/javascript"></script> */}
    </Helmet>
      <Hero />
      {/* <Services /> */}
      <Jobs />
      <Projects projects={projects} title="freelance / personal projects" showLink/>
      <Blogs blogs={blogs} title="blogs" showLink />
  </Layout>
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        id
        github
        description
        title
        url
        coverImage {
          localFile{
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        stack {
          id
          text
        }
      }
    }
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        category
        date(formatString: "do MMM, YYYY")
        description
        id
        slug
        title
        image {
          localFile{
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
