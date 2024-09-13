import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pageination from "../components/Pageination";
import { IoMdArrowBack } from "react-icons/io";


function TagPage() {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    return (
        <div>
            <Header />

            <div className="mt-[8rem] text-start w-[90%]  mx-auto flex justify-start
            items-center gap-2">
                <button className="flex justify-center items-center gap-1
                     border bg-blue-600 text-white px-2 py-1 rounded
                     hover:bg-blue-700 transition-all duration-200"
                onClick={() => navigation(-1)}
                >
                    <IoMdArrowBack/>
                    Back
                </button>
                <h2 className="text-xl font-bold underline">
                    Blogs Tagged <span>#{tag}</span>
                </h2>
            </div>
            
            <Blogs/>
            <Pageination/>

        </div>


    )

}

export default TagPage;