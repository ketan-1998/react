import React from "react";
import HeaderCom from "../components/HeaderCom";
import BLogsCom from "../components/BLogsCom";
import PaginationCom from "../components/PaginationCom";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
const HomePage = () => {
  const { fetchBlogData } = useContext(BlogContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    let page = searchParams.get("page");
    if (location.pathname.includes("tag")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      console.log(tag)
      fetchBlogData(Number(page), tag);
    } else if (location.pathname.includes("category")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      console.log(category)
      fetchBlogData(Number(page), null, category);
    } else {
      fetchBlogData(Number(page), null, null);
    }
  }, [location.pathname,location.search]);
  return (
    <div className=" min-h-screen flex">
      <HeaderCom />
      <BLogsCom />
      <PaginationCom />
    </div>
  );
};

export default HomePage;
