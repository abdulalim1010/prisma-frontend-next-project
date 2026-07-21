import React from 'react'
import { GetBlogs } from '../utils/getBlogs'

const BlogPage = async () => {

  const blogs = await GetBlogs()

  return (
    <div>
      <h1>This is blog page</h1>

      {
        blogs.slice(0, 10).map((blog:any) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
          </div>
        ))
      }

    </div>
  )
}

export default BlogPage