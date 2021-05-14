import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"

const About = ({data}) => {
  const {allStrapiAbout: {nodes: About }} = data;
  const {image,title,text,stack} = About[0];
  return <Layout>
      <section className="about-page">
      <div className="section-center about-center">
        <Image fluid={image.childImageSharp.fluid} className="about-img"/>
        <article className="about-text">
          <Title title={title} />
          {text.map(item => {
                return <p key={item.id}>{item.text}</p>
              })}
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
        text {
          id
          text
        }
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
