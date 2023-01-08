import React from 'react'
import {Video} from './Video'
//Ver como pasar una interfaz a una funcion..
interface Props{
  video:Video
}

const VideoItem = ({video}: Props) => {
  return (
    <div>
        <h1>Titulo</h1>
        <h2>{video.title}</h2>
        <h2>Descripción</h2>
        <h3>{video.description}</h3>
        <h2>Link al video:</h2>
        <h3>{video.url}</h3>
        <h3>{video._id}</h3>
    </div>
  )
}

export default VideoItem
