import React from "react";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import { Article } from "../../compnents";
import "./blog.css";
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="sep 23, 2023"
            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="sep 23, 2023"
            title="Lorem ipsum dolor, sit amet consectetur ."
          />
          <Article
            imgUrl={blog03}
            date="sep 23, 2023"
            title="Lorem ipsum dolor, sit amet consectetur ."
          />
          <Article
            imgUrl={blog04}
            date="sep 23, 2023"
            title="Lorem ipsum dolor, sit amet consectetur ."
          />
          <Article
            imgUrl={blog05}
            date="sep 23, 2023"
            title="Lorem ipsum dolor, sit amet consectetur ."
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
