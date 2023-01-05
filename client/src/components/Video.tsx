import React from 'react'
//Ver como pasar una interfaz a una funcion..

const Video = ({title,url,description}) => {
  return (
    <div>
        <h1>Titulo</h1>
        <h2>{title}</h2>
        <h2>Descripción</h2>
        <h3>{description}</h3>
        <h2>Link al video:</h2>
        <h3>{url}</h3>
    </div>
  )
}

export default Video
