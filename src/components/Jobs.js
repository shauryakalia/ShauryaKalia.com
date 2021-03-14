import React from "react"
import Title from "./Title"
import { FaAlignRight, FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

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
    }
  }
}
`;

const Jobs = () => {
  const data = useStaticQuery(query);
  const { 
    allStrapiExperiences: {nodes: Experiences }, 
  } = data;
  const [ value, setValue ] = React.useState(0);
  const { organization, date, role, description  } = Experiences[value];

  return <section className="section jobs">
    <Title title="Experience" />
    <div className="jobs-center">
      <div className="btn-container">
        {Experiences.map((experience, index) => {
            return <button 
              key={experience.strapiId} 
              onClick={() => {setValue(index)}}
              className={`job-btn ${index === value && `active-btn`}`}>
                {experience.organization.substr(0, experience.organization.indexOf(" "))}
              </button>
        })}
      </div>
      <article className="job-info">
        <h3>{role}</h3>
        <h4>{organization}</h4>
        <p className="job-date">{date}</p>
        {
          description.map((item) => {
             return <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{item.text}</p>
             </div>
          })
        }
      </article>
    </div>
    <Link to="/about" className="btn center-btn">More Info</Link>
  </section>
}

export default Jobs
