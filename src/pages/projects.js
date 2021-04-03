import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

const ProjectsPage = ({
  data:{allStrapiProjects:{nodes:projects}}
}) => {
  return (
    <Layout>
    <section className="proejcts-page">
      <Projects projects={projects} title="projects" />
    </section>
    </Layout>)
}

export const query = graphql`
  {
    allStrapiProjects{
      nodes {
        id
        github
        description
        title
        url
        coverImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          text
        }
      }
    }
  }
`

export default ProjectsPage
