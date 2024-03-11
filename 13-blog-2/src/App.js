import React, { useEffect } from "react";
import { useContext } from "react";
import { BlogContext } from "./context/BlogContext";
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import TagPage from "./page/TagPage";
import BlogPage from "./page/BlogPage";
import CategoryPage from "./page/CategoryPage";
const App = () => {
  const { themeMod } = useContext(BlogContext);

  useEffect(()=>{
    
  },[])

  return (
    <div
      className={`${
        themeMod === "light" ? "bg-[#d9d9d9]" : "bg-[#262626]"
      } min-h-screen`}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tag/:tag" element={<TagPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="Blogpage/:blogpage" element={<BlogPage />} />
      </Routes>
    </div>
  );
};

export default App;
