import "../Home.css"
import React from "react"
import NavigationBar from "../components/NavigationBar"



function HomePage() {
    return(
        <div>
     
       <div class="parent">
        <div class="nav">  
        <NavigationBar/> 
        <h1 className="title">Word on the Street is...</h1>
        <p className="intro">Join us in helping others by reporting what you see here.<br/>You can remain anonymous and report any suspicious activity HERE. <br/>We are the latest news in your local area</p>
        </div>
        
        <div class="left-side"> 
        <div className="location">
            <iframe src="https://gifer.com/embed/fxtV" width="100%" height="100%" allowFullScreen></iframe></div><p><a href="https://gifer.com">via GIFER</a></p>
        </div>
{/* ==================================================================== */}
        <div class="middle-section"> 
        
        
        </div>

        <div class="right-side"> Right Column</div>
        <div class="footer"> 
        <table>
    <caption>Table 1</caption>
    <thead>
        <tr>
            <th>Support</th>
            <th>Header 2</th>
            <th>Header 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
        </div>
        </div>
        </div>
);
}   

export default HomePage