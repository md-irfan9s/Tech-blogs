import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();     // create a context api

export default function AppContextProvider({children}) {    // set provider of context api 
    
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState({});
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    async function fetchBlogsPosts(page = 1, tag = null, category) {
        // set Loader 
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag) {
            url += `&tag=${tag}`;
        }
        if(category) {
            url += `&category=${category}`
        }
        try{
            // now, we have to calls APIs
            const result = await fetch(url);
            const data = await result.json();
            // console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error) {
            console.log("Error in Fetchin data");
            setPage(1);
            setPosts([]);
            setTotalPages(null)
        }

        setLoading(false)
    }

    function handlePageChange(page) {

        navigate({search : `?page=${page}`})
        setPage(page);
        // fetchBlogsPosts(page)
    }


    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page, 
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogsPosts,
        handlePageChange,
    }

    return <AppContext.Provider value={value}>
            {children}
    </AppContext.Provider>
}


