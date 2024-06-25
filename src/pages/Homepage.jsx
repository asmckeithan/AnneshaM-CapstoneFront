import "../Home.css"
import React from "react"
import NavigationBar from "../components/NavigationBar"
import video from '../video/senatorkennedy.mov'


function HomePage() {
    return(
        <div>
     
       <div class="parent">
        <div class="nav">  
        <NavigationBar/> 
        <h1 className="title">Word on the Street...</h1>
        <p className="intro">Join us in helping others by reporting what you see here.<br/>You can remain anonymous and report any suspicious activity HERE. <br/>We are the latest news in your local area</p>
        </div>
        
        <div class="left-side"> Left Side

        </div>
        <div class="middle-section"> 
            
        </div>
        <div class="right-side"> Right Column</div>
        <div class="footer"> footer</div>
        </div>     
          
        </div>
        
);
    
}
export default HomePage