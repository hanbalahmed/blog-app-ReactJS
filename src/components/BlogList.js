import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>

      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h1 className="blogTitle">{blog.title}</h1>
            <p className="blogAuthor">Written By {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
