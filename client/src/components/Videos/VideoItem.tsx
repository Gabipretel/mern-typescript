import React from "react";
import { Video } from "./Video";
import ReactPlayer from "react-player";
import './VideoItem.css'
import {useNavigate} from 'react-router-dom'

// const navigate= useNavigate();
interface Props {
  video: Video;
}


const VideoItem = ({ video }: Props) => {
  return (
    <div className="col-md-4">
      <div className="card card-body video-card" style={{cursor:'pointer'}}>
        <div className="d-flex justify-content-between">
          <h3>{video.title}</h3>
          <span className="text-danger">X</span>
        </div>
        <p>{video.description}</p>
        <div className=" d-flex justify-content-center embed-responsive embed-responsive-16by9">
          <ReactPlayer url={video.url} />
        </div>
        {/* <button type="button" className="btn btn-primary" onClick={()=> navigate(`/update/${video._id}`)}>Editar</button> */}
      </div>
   
    </div>
  );
};

export default VideoItem;
