import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";
// import Card from "./Card";
import { TbFaceIdError } from "react-icons/tb";

function Blogs() {
    // Consuming the data
    const { posts, loading } = useContext(AppContext);

    // Rendering the component
    return (
        <div className="mt-[50px] mb-[100px] w-full grid grid-cols-1 justify-items-center
        lg:grid-cols-2
        ">
            {
                loading ? (  // If Loading is true, render Spinner
                    <Spinner />
                ) : 
                
                (
                    Array.isArray(posts) && posts.length === 0 ? ( // Check if posts is an array
                        <div className="w-screen h-[50vh] flex justify-center mx-auto">
                            <p className="flex justify-center items-center gap-x-4
                            text-2xl font-bold">Not Blogs Found 
                            <TbFaceIdError size={40}/>
                            </p>
                            
                        </div>
                    ) : (
                        Array.isArray(posts) && posts.map((post) => ( // Ensure posts is an array before mapping
                            <BlogDetails key = {post.id} post = {post}/>
                        ))
                    )
                )
            }
        </div>
    );
}

export default Blogs;
