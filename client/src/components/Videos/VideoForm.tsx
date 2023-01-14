import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Video } from "./Video";
import * as videoService from "./VideoService";
import { toast } from "react-toastify";

interface Params {
  id?: string;
}
type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type submit = FormEvent<HTMLFormElement>;

const VideoForm = () => {
  const params = useParams();
  const navigate = useNavigate();

  const initialState = {
    title: "",
    url: "",
    description: "",
  };
  const [video, setVideo] = useState<Video>(initialState);

  const handleInputChange = (e: InputChange) =>
    setVideo({ ...video, [e.target.name]: e.target.value });

  const handleSubmit = async (e: submit) => {
    e.preventDefault();
    if (!params.id) {
      const res = await videoService.createVideo(video);
      toast.success("Nuevo video Agregado con Exito😎");
      setVideo(initialState);
    } else {
      await videoService.updateVideo(params.id, video);
    }
    navigate("/");
  };

  const getVideo = async (id: string) => {
    const res = await videoService.getVideoById(id);
    const { title, description, url } = res.data;
    setVideo({ title, description, url });
  };

  useEffect(() => {
    if (params.id) getVideo(params.id);
  }, [params.id]);

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
                  value={video.title}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.url}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Escribe una descripción "
                  onChange={handleInputChange}
                  value={video.description}
                ></textarea>
              </div>

              {params.id ? (
                <button className="btn btn-info">Actualizar Video</button>
              ) : (
                <button className="btn btn-outline-success">Crear Video</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
