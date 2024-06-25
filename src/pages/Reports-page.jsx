import "../Home.css"
import React from "react"
import NavigationBar from "../components/NavigationBar"
import ReportForm from "../components/Report-form"


function Reports() {
    return(
        <div>
        <NavigationBar/>
        <h1 className='title'>Word on the Street is...</h1>
        <div className="form-container">
       <ReportForm/>
        </div>
       </div>
    )
}
export default Reports