import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import Spinner from "../components/Spinner";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import { IoMdArrowBack } from "react-icons/io";

function BlogPage() {

    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const[relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log(url)
        try{
            const response = await fetch(url);
            const data = await response.json();

            console.log(data);
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error) {
            console.log("Something went wrong , please check your response");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false)
    }

    useEffect( () => {
        console.log("Blog ID : ", blogId)
        if(blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname])

    return (
        <div>
            <Header/>
            <div>
            <div className="mt-[8rem] text-start w-[90%]  mx-auto">
                <button onClick={ () => navigation(-1)} 
                    className="flex justify-center items-center gap-1
                     border bg-blue-600 text-white px-2 py-1 rounded
                     hover:bg-blue-700 transition-all duration-200"
                    >
                        <IoMdArrowBack/>
                    Back
                </button>
            </div>
            {
                loading ? (<Spinner />) : 
                blog ? 
                (<div>
                    <BlogDetails post = {blog}/>
                    <h2 className="text-2xl font-bold text-center mt-4 underline">Related Blogs</h2>

                    {
                    relatedblogs.map( (post) => (
                            <div key={post.id}>
                                    <BlogDetails post = {post}/>
                            </div>
                        ))
                    }
                    </div>) :

                (
                    <p> No data Found </p>

                )
            }
            </div>

        </div>
    )

}

export default BlogPage;