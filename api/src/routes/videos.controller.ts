//Funciones permiten manipular los videos en la Db. CRUD
import { RequestHandler } from "express"

export const getVideos: RequestHandler = (req,res)=>{
    res.json('obteniendo videos')
}

export const getVideo: RequestHandler = (req,res)=>{
    res.json('obteniendo video')
}

export const createVideo: RequestHandler = (req,res)=>{
    res.json('creando videos')
}

export const deleteVideos: RequestHandler = (req,res)=>{
    res.json('eliminando videos')
}

export const updateVideo: RequestHandler = (req,res)=>{
    res.json('eliminando videos')
}

