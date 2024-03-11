import React from "react";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";

const PostCom = ({ id, author, category, content, date, tags, title }) => {
  const { themeMod } = useContext(BlogContext);
  return (
    <div className="pb-5">
      <Link to={`/Blogpage/${id}`}><h2
        className={`text-2xl font-semibold capitalize ${
          themeMod === "light" ? "text-blue-500" : "text-[#bfbfbf]  p-1 mb-2"
        }`}
      >
        {title}
      </h2></Link>
      <div className="mb-2">
        <div>
          by{" "}
          <span
            className={`${
              themeMod === "light" ? "text-cyan-700" : "text-cyan-500"
            }`}
          >
            {author}
          </span>{" "}
          on{" "}
        <Link to={`/category/${category}`}>  <span
            className={`${
              themeMod === "light" ? "text-cyan-700" : "text-cyan-500"
            }`}
          >
            {category}
          </span></Link>
        </div>
        <div>
          posted on <span className="underline text-emerald-200"> {date}</span>
        </div>
      </div>
      <div className="mb-1">{content}</div>
      <div className="pb-3 space-x-3">
        {tags.map((tag, index) => {
          return <MyTag tag={tag} key={index} />;
        })}
      </div>
      <hr className="w-10/12 mx-auto" />
    </div>
  );
};

export default PostCom;

function MyTag({ tag }) {
  return (
    <span>
      <Link to={`/tag/${tag}`} >
      <span className="text-green-500">#</span>
      <span className="text-blue-400">{tag}</span>
      </Link>
    
    </span>
  );
}
