import React from "react";
import Pageination from "../components/Pageination";
import Header from "../components/Header";
import Blogs from "../components/Blogs";

function Home() {

        return (

            <div>
                <Header />

                <div>
                    <Blogs/>
                    <Pageination/>
                </div>

            </div>

        )


}

export default Home;