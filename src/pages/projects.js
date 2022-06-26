import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

const ProjectsPage = ({
  data: { allStrapiProjects: { nodes: projects } }
}) => {
  return (
    <Layout>
      <section className="proejcts-page">
        <Projects projects={projects} title="freelance / Personal projects" />
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
          localFile {
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
  }
`

export default ProjectsPage
