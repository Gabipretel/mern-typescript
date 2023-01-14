import React, { useEffect, useState } from 'react'
import {Video} from './Video'
import VideoItem from './VideoItem'
import * as videoService from './VideoService'


const VideoList = () => {

  const [videos,setVideos]= useState<Video[]>([]) 

  const videoLoad = async ()=>{
    const videos= await videoService.getVideos()
    
    const formatedVideos = videos.data.map(video=>{
      return {
        ...video,
        createdAt: video.createdAt? new Date(video.createdAt): new Date(),
        updatedAt: video.updatedAt? new Date(video.updatedAt): new Date()
      }
    })
    .sort((a,b)=> b.createdAt.getTime()-a.createdAt.getTime())

    setVideos(formatedVideos)
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
