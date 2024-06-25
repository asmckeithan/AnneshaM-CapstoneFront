import "../Home.css"
import React from "react"
import NavigationBar from "../components/NavigationBar"
import NewsApi from "../components/NewsAPI"
import NewsList from "../components/Blog-list"


function News() {
    return(
        <div>
        <NavigationBar/>
        <h1 className='title'>Word on the Street</h1>
        <div className="form-container">
        <NewsList/>
        </div>
       </div>
    )
}
export default News