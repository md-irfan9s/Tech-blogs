import { NavLink } from "react-router-dom";
import { FaLink } from "react-icons/fa";

function BlogDetails ({post}) {


    return (
        <div className ="mt-[50px] w-[90%] flex flex-col items-center justify-center mx-auto gap-4
        border border-zinc-700 hover:border-blue-800 hover:scale-105  transition-all duration-200
        hover:shadow-2xl rounded pt-4 pb-4
        ">
            <NavLink to={`/blog/${post.id}`} >
            <div className="flex justify-center items-center gap-x-3">
                <FaLink/>
                <span className=" text-center text-lg font-bold hover:underline">{post.title} </span>
            </div>
                
            </NavLink>

            <p>
                By 
                <span className="italic"> {post.author} </span>
                on {" "}
                <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                    <span className="underline font-bold">{post.category}</span>
                </NavLink>
            </p>
            <p className="text-gray-700 text-sm">Posted on {post.date}</p>

            <p className="max-w-[95%] text-center"

            >{post.content}</p>

            <div className="flex flex-wrap gap-x-4 justify-center items-center">
                {post.tags.map( (tag,index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                        <span className="text-xs  text-blue-700 underline cursor-pointer
                        hover:text-blue-600 "
                        >{`#${tag}`}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default BlogDetails;