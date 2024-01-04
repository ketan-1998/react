import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useState } from "react";
import { toast } from "react-toastify";

const Card = ({
  image,
  id,
  title,
  description,
  likedCourses,
  setLikedCourses,
}) => {
  const likedHandler = () => {
    if (likedCourses.includes(id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== id));
      toast.warning("unlike");
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([id]);
      } else {
        setLikedCourses((prev) => [...prev, id]);
      }
      toast.success("like");
    }
    console.log(likedCourses)
  };
  return (
    <div className="w-[250px] bg-slate-900 rounded overflow-hidden select-none pb-5">
      <div className="relative">
        <img src={image.url} alt={image.alt} />
        <div className="bg-white w-[40px] h-[40px] rounded-full grid place-content-center absolute -bottom-5 right-4">
          <button onClick={likedHandler}>
            {likedCourses.includes(id) ? (
              <FcLike fontSize="1.7rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.7rem" />
            )}
          </button>
        </div>
      </div>
      <div className="mx-2 mt-5 space-y-2">
        <p className="text-slate-300 font-mono text-[15px]">{title}</p>
        <p className="text-slate-400">{ `${description.substr(0, 100)}...`}</p>
      </div>
    </div>
  );
};

export default Card;
