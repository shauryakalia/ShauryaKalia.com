import React, {useState, useEffect} from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import axios from 'axios'

const CATEGORIES = [ 'all', 'tech', 'travel', 'abstract', 'books'];

export const Blogs = ({blogs, title, showLink, showCategories}) => {
  const [category, setCategory] = useState(null);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [ value, setValue ] = useState(0);
  // let [blogAnalytics, setBlogAnalytics] = useState();
  // let [blogSlugs, setBlogSlugs] = useState();

  // useEffect(() => {
  //   axios("/api/get-blog-analytics").then(result => {
  //     if (result.status !== 200) {
  //       console.error("Error loading analytics");
  //       console.error(result);
  //     }
  //     setBlogAnalytics(result.data.blogAnalytics);
  //     let slugs = result?.data?.blogAnalytics?.map(analytic => analytic.slug);
  //     setBlogSlugs(slugs);
  //   });
  // }, []);

  // useEffect(() => {
  //   if (blogAnalytics?.length) {
  //     blogs.forEach(blog => {
  //       if (blogSlugs?.includes(blog.slug)) {
  //         let correspondingBlogAnalytics;
  //         blogAnalytics.map(analytics => {
  //           if(analytics.slug === blog.slug) {
  //             correspondingBlogAnalytics = analytics;
  //           }
  //         });
  //         blog.hits = correspondingBlogAnalytics.hits;
  //         blog.analyticsID = correspondingBlogAnalytics._id;
  //       } else if (blogSlugs) {
  //         axios.post("/api/create-blog-analytics", {slug: blog.slug, hits: 0}).then(result => {
  //           if (result.status !== 200) {
  //             console.error("Error loading analytics");
  //             console.error(result);
  //           }
  //           blog.hits = 0;
  //         });
  //       }
  //     });
  //   }
  // }, [blogAnalytics, blogSlugs, blogs]);

  useEffect(() => {
    if(category === 'all') {
      setFilteredBlogs(blogs)
    } else if (category) {
      let newFilter = blogs.filter( blog => blog.category === category);
      setFilteredBlogs(newFilter);
    }
  }, [category]);

  return <section className="section">
     <Title title={title} />
    {showCategories &&
      <div>
        <nav className="section-center">
        {
          CATEGORIES.map((category, index) => {
            return <button key={category} onClick={() => {setCategory(category);setValue(index)}} className={`job-btn ${index === value && `active-btn`}`}>
              { category }
              </button> 
          })
        }
        </nav>
      </div>
    }
     <div className="section-center blogs-center">
       {
         filteredBlogs.map((blog) => {
           return <Blog key={blog.id} {...blog}/>
         })
       }
     </div>
     {
       showLink &&  <Link to="/blog" className="btn center-btn">Read More</Link>
     }
  </section>
}
export default Blogs
