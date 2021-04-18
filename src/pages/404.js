import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return <main className="error-page">
    <div className="error-container">
      <h1>oop's it's a dead end</h1>
      <Link to="/" className="btn">Take me back to Home</Link>
    </div>
  </main>
}

export default Error
