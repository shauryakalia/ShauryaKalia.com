import React, {useEffect, useState} from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import { Disqus } from 'gatsby-plugin-disqus'
import axios from "axios";

const ComponentName = ({ data }) => {
  const { content, slug } = data.blog
  // let [hits, setHits] = useState(0);

  // useEffect(() => {
  //   axios("/api/get-blog-analytics").then(result => {
  //     if (result.status !== 200) {
  //       console.error("Error loading analytics");
  //       console.error(result);
  //     }
  //     let correspondingBlogAnalytics;
  //     for(var i=0; i<result.data?.blogAnalytics?.length; i++) {
  //       if(result.data.blogAnalytics[i].slug === slug) {
  //         correspondingBlogAnalytics = result.data.blogAnalytics[i];
  //       }
  //     }
  //     // result.data?.blogAnalytics?.map(analytics => {
  //     //   if(analytics.slug === slug) {
  //     //     correspondingBlogAnalytics = analytics;
  //     //   }
  //     // });
  //     setHits(correspondingBlogAnalytics?.hits+1);
  //     axios.post("/api/update-blog-analytics", {
  //       id: correspondingBlogAnalytics._id, 
  //       slug: correspondingBlogAnalytics.slug, 
  //       hits: correspondingBlogAnalytics.hits+1
  //     }).then(result => {
  //       if (result.status !== 200) {
  //         console.error("Error loading analytics");
  //         console.error(result);
  //       }
  //     });
  //   });
  // }, []);

  // const disqusConfig = {
  //   url: typeof window !== 'undefined' ? window.location.href: 'https://shauryakalia.com',
  //   identifier:  typeof window !== 'undefined' ? window.location.pathName: `blog/${data.blog}`,
  //   title: typeof window !== 'undefined' ? window.location.pathName: `blog/${data.blog}`,
  // }
  return <Layout>
    <section className="blog-template">
      <div className="section-center">
        <article className="blog-content">
          <ReactMarkdown class="mkdwn" source={content} />
          {/* <Disqus
            config={disqusConfig}
          /> */}
        </article>
        {/* <div className="about-stack">
          <span>
            Views : {hits}
          </span>
        </div> */}
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
      content,
      slug

    }
  }
`

export default ComponentName
