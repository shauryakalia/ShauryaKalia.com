import React, {useState, useEffect} from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"

const CATEGORIES = [ 'all', 'tech', 'travel', 'abstract', 'books'];

export const Blogs = ({blogs, title, showLink, showCategories}) => {
  const [category, setCategory] = useState(null);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [ value, setValue ] = useState(0);

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
