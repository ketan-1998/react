import { createContext,} from "react";
import { useState } from "react";
import { baseUrl } from "../baseUrl";
export const BlogsContext = createContext();

export default function BlogsContextProvider({ children }) {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mod, setMode] = useState("light");

  async function fetchData(page = 1) {
    const url = `${baseUrl}?page=${page}`;
    setLoading(true);
    try {
      const data = await fetch(url);
      const result = await data.json();
      setTotalPage(result.totalPages);
      setPosts(result.posts);
    } catch (e) {
      console.log("error hai bro ");
      console.log(e)
    }
    setLoading(false);
  }
  function changeMode(newMod) {
    setMode(newMod);
  }
  function pageHandle(page){
    fetchData(page)
  }
  const value = {
    page,
    totalPage,
    posts,
    loading,
    setPage,
    setLoading,
    setTotalPage,
    setPosts,
    fetchData,
    changeMode,
    mod,
    pageHandle
  };
  return (
    <BlogsContext.Provider value={value}>{children}</BlogsContext.Provider>
  );
}
