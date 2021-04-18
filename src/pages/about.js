import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"

const About = ({data}) => {
  const {allStrapiAbout: {nodes: About }} = data;
  const {image,title,info,stack} = About[0];
  return <Layout>
      <section className="about-page">
      <div className="section-center about-center">
        <Image fluid={image.childImageSharp.fluid} className="about-img"/>
        <article className="about-text">
          <Title title={title} />
          <p>{info}</p>
          <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.text}</span>
              })}
          </div>
        </article>
      </div>
    </section>
  </Layout>
}

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        title
        stack {
          id
          text
        }
        info
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
export default About
