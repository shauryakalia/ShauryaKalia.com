import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import herovideomp4 from '../assets/herovideomp4.mp4'
// import herovideoogg from '../assets/herovideoogg.ogg'

const query = graphql`
  {
    file(relativePath : {eq: "hero-img.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: {
        fluid
      }
    },
  } = useStaticQuery(query);
  
  return <div className="section section-center">
      <div className="herovid">
        <div className="overlay">
          <header className="hero">
          <article className="hero-info">
            <div>
              <div className="underline"></div>
              <h1>Shaurya Kalia</h1>
              <h4>A Fullstack Developer and</h4>
              <h4>Hip Hop Dancer</h4>
              <h4>who travels and makes videos</h4>
              <Link to="/contact" className="btn">
                Get in touch
              </Link>
              <SocialLinks />
            </div>
          </article>
          {/* <Image fluid={fluid} className="hero-img" /> */}
        </header>
        </div>
        <div className="centerdiv">
          <video className="hero__vid" autoPlay loop muted>
          <source src={herovideomp4} type="video/mp4" />
          {/* <source src={herovideoogg} type="video/ogg" /> */}
        </video>
        </div>
      </div>
    </div>
}

export default Hero
