import "../Home.css"
import React from "react"
import NavigationBar from "../components/NavigationBar"
import SignupForm from "../components/Signup-form";
import Phonecall from "../images/Phonecall.jpg"
import statement from "../images/statement.jpg"
import news from "../images/news.jpg"

console.log(Phonecall)

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
            <SignupForm/><br />
            <img src={news} alt="news" className="image3" />
        </div>

        <div class="right-side"> 
           <img src={Phonecall} alt="Phonecall" className="image1" /><br />
           <img src={statement} alt="statement" className="image2" />
            </div>
        <div class="footer"> 
        <table className="ref-table">
    <caption>References</caption>
    <thead>
        <tr>
            <th>Support</th>
            <th>Our Communities</th>
            <th>Careers</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>About</td>
            <td>Community</td>
            <td>Developers</td>
        </tr>
        <tr>
            <td>Contact</td>
            <td>Chat</td>
            <td>Beta</td>
        </tr>
        <tr>
            <td>Help</td>
            <td>Admins</td>
            <td>Internships</td>
        </tr>
       
    </tbody>
</table>
<div>
<p className="disclaimer">Disclaimer: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minima neque consequuntur, dolores obcaecati voluptatibus tempora minus modi deserunt mollitia? Corporis suscipit voluptatibus maiores deleniti magni laudantium dignissimos sequi est?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae libero vitae. Qui accusantium eaque officia delectus repellendus, consequatur excepturi omnis quibusdam laudantium, doloribus dolorem illum est nesciunt velit magni?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, quis laborum maiores nulla accusamus eaque expedita, nemo, fugiat tenetur repellat eligendi. Recusandae reprehenderit quia temporibus voluptates libero delectus, quaerat iure?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo voluptate, incidunt dicta dolor sit, facilis sint ea itaque autem ut aspernatur, molestias adipisci? Ipsum nulla saepe numquam impedit, autem minima.</p>
</div>
        </div>
        </div>
        </div>
        
);
}   

export default HomePage