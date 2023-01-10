import React, { useState } from "react";
import { Video } from "./Video";
import * as videoService from './VideoService'

const VideoForm = () => {
  type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  
  const [video,setVideo] = useState<Video>({
    title:'',
    url:'',
    description:''
  })

  const handleInputChange = (e: InputChange) =>
    setVideo({ ...video, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const res= await videoService.createVideo(video)
    console.log(res);

  }

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card my-auto">
          <div className="card-body">
            <h3>NuevoVideo</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Escribe un titulo para este video"
                  className="form-control"
                  autoFocus
                  onChange={handleInputChange}
                  //  value={video.title}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  onChange={handleInputChange}
                  // value={video.url}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Escribe una descripción "
                  onChange={handleInputChange}
                //  value={video.description}
                ></textarea>
              </div>

              {/* {params.id ? (
                <button className="btn btn-info">Update</button>
              ) : (
                <button className="btn btn-primary">Create</button>
              )} */}
              <button type="button" className="btn btn-outline-success">Crear Video</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
