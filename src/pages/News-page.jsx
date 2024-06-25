
import React from "react"
import NavigationBar from "../components/NavigationBar"
import NewsList from "../components/Blog-list"
import DeleteArticle from "../components/Delete-blog"


function News() {
    
    return(
        <div>
        <NavigationBar/> 
            <div className="around">
                <h1>GFG News App</h1>
                <NewsList/>
                <DeleteArticle/>
            </div>
        </div>
    )
}
export default News