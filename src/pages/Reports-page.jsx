import "../Home.css"
import React from "react"
import NavigationBar from "../components/NavigationBar"


function Reports() {
    return(
        <div>
        <NavigationBar/>
        <h1 className='title'>Word on the Street</h1>
        <div className="form-container">
        <form action="submit">

        Title:    <input type="text" placeholder="Title"/>
        </form>
        </div>
       </div>
    )
}
export default Reports