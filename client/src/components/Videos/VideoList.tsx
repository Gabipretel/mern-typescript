import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Video} from './Video'
import Videos from './Videos'



const VideoList = () => {

  const [videos,setVideos]= useState<Video[]>([]) 

  const videoLoad = async ()=>{
   const videos = await axios.get('http://localhost:3000/videos')
    console.log(videos.data);
    setVideos(videos.data)
  }
  
  useEffect(()=>{
    videoLoad()

  },[])

  return (
    <div>
          Lista de Videos:
        {
          videos && videos.map(video=>
            <Videos
            key={video._id} 
            title={video.title}
            description={video.description} 
            url={video.url}/>)
        }
    </div>
  )
}

export default VideoList
