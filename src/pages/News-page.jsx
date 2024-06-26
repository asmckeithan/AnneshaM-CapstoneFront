
import React from "react"
import NavigationBar from "../components/NavigationBar"
import NewsList from "../components/Blog-list"
import DeleteArticle from "../components/Delete-blog"



function News() {
    
    return(
        <div>
            <div className="around">
                <NavigationBar/> 
                <h1 className="title">Word on the Street is...</h1>
                <NewsList/>
                <DeleteArticle/>
            </div>
        </div>
    )
}
export default News