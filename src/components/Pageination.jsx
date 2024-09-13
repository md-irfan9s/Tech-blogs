import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pageination() {
    const {page, handlePageChange, totalPages} = useContext(AppContext)
    return (
        <div className="w-full border fixed bottom-0 bg-white">
            <div className="w-full flex p-4 justify-between gap-x-4 mx-auto
            sm:w-9/12">

            <div className="flex gap-x-4">
                {  page > 1 && 
                    (<button onClick={ () => handlePageChange(page-1)}
                    className="border bg-blue-600 text-white px-2 py-1 rounded
                     hover:bg-blue-700 transition-all duration-200"
                    >
                        Previous
                    </button>)
                }
                {  page < totalPages && 
                    (<button onClick={ () => handlePageChange(page+1)}
                    className="border bg-blue-600 text-white px-2 py-1 rounded
                    hover:bg-blue-700 transition-all duration-200"
                    >
                        Next
                    </button>)
                }
            </div>

                <p className="border bg-blue-700 text-white px-4 py-1 rounded
                sm:px-2">Page {page} of {totalPages}</p>

                </div>
                
        </div>
    )


}

export default Pageination