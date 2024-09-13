import React, { useContext, useEffect } from "react"
// import Header from "./components/Header"
// import Blogs from "./components/Blogs"
// import Pageination from "./components/Pageination"
import Home from "./pages/Home"
import BlogPage from "./pages/BlogPage"
import CategoryPage from "./pages/CategoryPage"
import TagPage from "./pages/TagPage"
import { AppContext } from "./context/AppContext"
import "./App.css"
import { Route,Routes, useLocation, useSearchParams } from "react-router-dom"

export default function App() {
  
  const {fetchBlogsPosts} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
      const page = searchParams.get("page") ?? 1;

      if(location.pathname.includes("tags")) {
        const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
        fetchBlogsPosts(Number(page), tag)
      }

      else if(location.pathname.includes("categories")) {
        const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
        fetchBlogsPosts(Number(page), null, category);
      }
      else{
        fetchBlogsPosts(Number(page))
      }

  }, [location.pathname, location.search])
  return (
    
      <Routes>

        <Route path="/" element= {<Home/>}/>
        <Route path="/blog/:blogId" element= {<BlogPage/>}/>
        <Route path="/tags/:tag" element= {<TagPage/>}/>
        <Route path="/categories/:category" element= {<CategoryPage/>}/>

      </Routes>
  )
}
