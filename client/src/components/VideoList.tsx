import axios from 'axios'
import React, { useEffect } from 'react'
const VideoList = () => {

  const videoLoad = async ()=>{
   const videos = await axios.get('http://localhost:3000/videos')
   console.log(videos.data);
    return videos
  }
  
  useEffect(()=>{
    videoLoad()

  },[])

  return (
    <div>
        Hola desde VideoList
    </div>
  )
}

export default VideoList
