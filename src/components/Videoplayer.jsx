import React, { useEffect } from "react";
import video from "../video/senatorkennedy.mov"
const VideoPlayer = () => {

    const videoRef = useRef(null);

    useEffect(() => { //the current property of the Referenced object is returned by useRef , and giving an action
        if(videoRef.current){
            videoRef.current.play() 
        }
        return() => {//pause when component unmounts
            if(videoRef.current){
                videoRef.current.pause();
            }
        }
    }, []); //empty array ensures this only plays when requested
    return(
        <div className="video-container">
            <video className="video" ref={videoRef} controls> <source src={video} type="video/mov"/> </video>
        </div>
    )
}

export default VideoPlayer