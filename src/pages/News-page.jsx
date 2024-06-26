
import React from "react"
import NavigationBar from "../components/NavigationBar"
import NewsList from "../components/Blog-list"
import DeleteArticle from "../components/Delete-blog"



function News() {
    
    return(
        <div>
            <div className="around">
                <NavigationBar/> 
                <h1 className="title">Word on the Street is...</h1><br />
                <NewsList/><br />
                <h1>----------------------------------------------------------------------Remove Articles Here -------------------------------------------------------------------------------</h1>

                <DeleteArticle/>
            </div>
        </div>
    )
}
export default News