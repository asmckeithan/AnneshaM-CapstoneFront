
import React from "react"
import NavigationBar from "../components/NavigationBar"
import NewsList from "../components/Blog-list"
import DeleteArticle from "../components/Delete-blog"


function News() {
    
    return(
        <div>
            <div className="around">
                <NavigationBar/> 
            
                <NewsList/>
                <DeleteArticle/>
            </div>
        </div>
    )
}
export default News