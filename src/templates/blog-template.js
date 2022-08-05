import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import { Disqus } from 'gatsby-plugin-disqus';

const ComponentName = ({ data }) => {
  const { content } = data.blog
  const disqusConfig = {
    url: typeof window !== 'undefined' ? window.location.href: 'https://shauryakalia.com',
    identifier:  typeof window !== 'undefined' ? window.location.pathName: `blog/${data.blog}`,
    title: typeof window !== 'undefined' ? window.location.pathName: `blog/${data.blog}`,
  }
  return <Layout>
    <section className="blog-template">
      <div className="section-center">
        <article className="blog-content">
          <ReactMarkdown class="mkdwn" source={content} />
          {/* <Disqus
            config={disqusConfig}
          /> */}
        </article>
        <Link to="/blog" className="btn center-btn">
          blogs
        </Link>
      </div>
    </section>
  </Layout>
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content

    }
  }
`

export default ComponentName
