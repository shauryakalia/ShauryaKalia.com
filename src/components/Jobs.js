import React from "react"
import Title from "./Title"
import { FaAlignRight, FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import Image from "gatsby-image"

import ReactMarkdown from "react-markdown"

const query = graphql`
{
  allStrapiExperiences(sort: {fields: strapiId, order: DESC}) {
    nodes {
      organization
      date
      role
      description {
        id
        text
      }
      strapiId
      logo {
        id
        localFile {
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
`;

const Jobs = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiExperiences: { nodes: Experiences },
  } = data;
  const [value, setValue] = React.useState(0);
  const { organization, date, role, description, logo } = Experiences[value];

  return <section className="section jobs">
    <Title title="Experience" />
    <div className="jobs-center">
      <div className="btn-container">
        {Experiences.map((experience, index) => {
          return <button
            key={experience.strapiId}
            onClick={() => { setValue(index) }}
            className={`job-btn ${index === value && `active-btn`}`}>
            {experience.organization.substr(0, experience.organization.indexOf(" "))}
          </button>
        })}
      </div>
      <article className="job-info">
        <h3>{role}</h3>
        <h4>{organization}</h4>
        <Image fluid={logo.localFile.childImageSharp?.fluid} className="job-img" />
        <p className="job-date">{date}</p>
        {
          description.map((item) => {
            return <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <ReactMarkdown className="mkdwn" source={item.text} />
            </div>
          })
        }
      </article>
    </div>
    <Link to="/about" className="btn center-btn">More Info</Link>
  </section>
}

export default Jobs
