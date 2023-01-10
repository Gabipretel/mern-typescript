import React from "react";
import { Video } from "./Video";
import ReactPlayer from "react-player";
interface Props {
  video: Video;
}

const VideoItem = ({ video }: Props) => {
  return (
    <div className="col-md-4">
      <div className="card card-body">
        <div className="d-flex justify-content-between">
          <h3>{video.title}</h3>
          <span className="text-danger">X</span>
        </div>
        <p>{video.description}</p>
        <div className=" d-flex justify-content-center embed-responsive embed-responsive-16by9">
          <ReactPlayer url={video.url} />
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
