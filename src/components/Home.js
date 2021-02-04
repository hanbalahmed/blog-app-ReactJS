import React from "react";
import useFetchData from "../hooks/useFetchData";
import BlogList from "./BlogList";

const Home = () => {
  const { data: blogs, isPending, error } = useFetchData(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="home">
      {error && (
        <div>
          <h1>{error}</h1>
        </div>
      )}
      {isPending && (
        <div>
          <h1>
            LOADING <span>⌚</span>
          </h1>
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
