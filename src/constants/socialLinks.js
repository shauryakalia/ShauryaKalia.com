import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaYoutubeSquare
} from "react-icons/fa"

const data = [
  
  {
    id: 1,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/shaurya.kalia",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/shauryakalia/",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com/shauryakalia",
  },
  {
    id: 4,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/shauryakalia",
  },
  {
    id: 5,
    icon: <FaYoutubeSquare className="social-icon"></FaYoutubeSquare>,
    url: "https://www.youtube.com/channel/UC3NKb6NKDYzqmjHH1S-vaUg",
  }
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
