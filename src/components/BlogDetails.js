import { useHistory, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetchData(
    "http://localhost:8000/blogs/" + id
  );
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && (
        <div>
          <h1>LOADING ⌚</h1>
        </div>
      )}
      {error && (
        <div>
          <h1>{error}</h1>
        </div>
      )}
      {blog && (
        <article>
          <h1 style={{ fontSize: "2rem" }}>{blog.title}</h1>
          <h4 className="blog__body">{blog.body}</h4>
          <p className="blogAuthor">Written by {blog.author}</p>
          <button className="deleteButton" onClick={handleClick}>
            Delete Blog
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
