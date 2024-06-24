import "../Home.css"
import React from "react"
import NavigationBar from "../components/NavigationBar"
import video from '../video/senatorkennedy.mov'


function HomePage() {
    return(
        <div>
        <NavigationBar/>
        <h1 className='title'>Word on the Street</h1><br />
    
        <video className="video" src={video} type="video/mp4"></video>
        
       </div>
    )
}
export default HomePage