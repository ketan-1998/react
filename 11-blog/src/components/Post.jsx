import React, { useContext } from "react";
import { BlogsContext } from "../context/BlogsContext";

const Post = ({ id, author, category, content, date, img, tags, title }) => {
  const { mod } = useContext(BlogsContext);
  return (
    <div className="space-y-2">
      <div>
        <p
          className={`text-xl font-semibold ${
            mod === "light" ? "text-slate-950" : "text-slate-300"
          }`}
        >
          {title}
        </p>
        <p
          className={`${
            mod === "light" ? "text-cyan-900" : "text-slate-500"
          } text-sm`}
        >
          by{" "}
          <span
            className={`${
              mod === "light" ? "text-cyan-950" : "text-slate-400"
            } underline italic font-semibold`}
          >
            {" "}
            {author}
          </span>{" "}
          on{" "}
          <span
            className={`${
              mod === "light" ? "text-cyan-950" : "text-slate-400"
            } underline italic font-semibold`}
          >
            {" "}
            {category}
          </span>
        </p>
        <p
          className={`${
            mod === "light" ? "text-cyan-900" : "text-slate-400"
          } text-sm`}
        >
          posted on{" "}
          <span
            className={`${
              mod === "light" ? "text-cyan-950" : "text-slate-400"
            } underline italic font-semibold`}
          >
            {" "}
            {date}
          </span>
        </p>
      </div>
      <div>
        <p className={`${mod==='light'?'text-slate-900':'text-slate-200'} text-lg capitalize font-sans`}>{content}</p>
        <p className="space-x-2">
          {tags.map((tag, index) => (
            <AllTag tag={tag} key={index} />
          ))}
        </p>
      </div>
    </div>
  );
};

const AllTag = ({ tag, index }) => {
  return (
    <span className="text-red-700 font-semibold text-sm underline">
      <span className="text-stone-900">#</span>
      {tag}{" "}
    </span>
  );
};

export default Post;
