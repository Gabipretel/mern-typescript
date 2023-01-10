import React, { useEffect, useState } from 'react'
import {Video} from './Video'
import VideoItem from './VideoItem'
import * as videoService from './VideoService'


const VideoList = () => {

  const [videos,setVideos]= useState<Video[]>([]) 

  const videoLoad = async ()=>{
    const videos= await videoService.getVideos()
    setVideos(videos.data)
    // console.log(videos.data);
  }
  
  useEffect(()=>{
    videoLoad()
  },[])

  return (
    <div className='row'>
        
        {
         videos && videos.map((video)=>{
            return <VideoItem video={video} key={video._id}/>
         })
        }
    </div>
  )
}

export default VideoList
