import React, { useEffect } from "react";

const VideoPlayer = () => {

    const videoRef = useRef(null);

    useEffect(() => { //the current property of the Referenced object is returned by useRef , and giving an action
        if(videoRef.current){
            videoRef.current.play() 
        }
    })
}