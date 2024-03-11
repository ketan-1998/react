import { createContext } from "react";
import React, { useState, } from "react";
import { baseUrl } from "../baseUrl";
export const BlogContext = createContext();

export function BlogContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [posts, setPosts] = useState([]);
  const [themeMod, setThemeMod] = useState("light");

  async function fetchBlogData(page = 1, tag = null, category = null) {
    let url = `${baseUrl}?page=${page}`;
    console.log(url);
    setLoading(true);
    if (tag) url += `&tag=${tag}`;
    if (category) url += `&category=${category}`;
    try {
      const result = await (await fetch(url)).json();
      setPage(result.page);
      setPosts(result.posts);
      setTotalPages(result.totalPages);
    } catch (e) {
      console.log("error in  fetching blogs data", e);
      setPage(1);
      setPosts([])
    }
    setLoading(false);
  }
  const pageHandler = (page) => {
    setPage(page);
    fetchBlogData(page);
  };
  const value = {
    loading,
    setLoading,
    setThemeMod,
    themeMod,
    page,
    totalPages,
    pageHandler,
    setPage,
    posts,
    setPosts,
    fetchBlogData,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}
