import React, { useContext } from "react";
import { BlogsContext } from "../context/BlogsContext";
import Post from "./Post";

const Blog = () => {
  const { mod,posts } = useContext(BlogsContext);
  console.log(posts)
  return (
    <div className={`w-10/12 mx-auto grow ${mod === "light" ? "bg-slate-500" : "bg-slate-700"} p-4 space-y-5 py-[60px]`}>
      {
        posts.map((post)=>(<Post {...post} key={post.id} />))
      }
    </div>
  );
};

export default Blog;
