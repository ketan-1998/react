import { useContext, useEffect } from "react";
import { BlogsContext } from "./context/BlogsContext";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Blog from "./components/Blog";

function App() {
  const { mod, loading, fetchData } = useContext(BlogsContext);
  useEffect(() => {
    fetchData(1);
  }, []);
  return (
    <div
      className={`${
        mod === "light" ? "bg-stone-100" : "bg-black"
      }  select-none min-h-screen relative flex flex-col`}
    >
      <Header />
      {loading ? <Loading /> : <Blog />}
      <Pagination />
    </div>
  );
}

export default App;
