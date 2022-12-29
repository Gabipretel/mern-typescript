//Funciones permiten manipular los videos en la Db. CRUD
import { RequestHandler } from "express"
import Video from "./Video"

export const getVideos: RequestHandler = async (req,res)=>{
    try {
        const videos= await Video.find() // busca todo lo que hay.
        return res.json(videos)
        
    } catch (error) {
        res.json(error)
    }
}

export const getVideo: RequestHandler = async (req,res)=>{
    try {
        const videoById= await Video.findById(req.params.id)
        if(videoById){
            return res.json(videoById)
        }
        res.status(204).json()
        
    } catch (error) {
        res.json(error)
    }
}

export const createVideo: RequestHandler = async (req,res)=>{
    try {
        const videoFound= await Video.findOne({url:req.body.url})
        if(videoFound){
            return res.status(301).json({message: 'La Url ya existe'})
        }
        const video = new Video(req.body) //Crea el nuevo video en formato {}
        const savedVideo= await video.save() // lo guarda en la db
        res.json(savedVideo) // envia el video creadoen json
        
    } catch (error) {
        res.json(error)
    }
}

export const deleteVideos: RequestHandler = async (req,res)=>{
    try {
        const videoById= await Video.findByIdAndDelete(req.params.id)
        if(videoById){
            return res.json(videoById)
        }
        res.status(204).json()
        
    } catch (error) {
        res.json(error)
    }
}

export const updateVideo: RequestHandler = async (req,res)=>{
    try {
        const videoUpdated= await Video.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(videoUpdated){
            return res.json(videoUpdated)
        }
        res.status(204).json()
        
    } catch (error) {
        res.json(error)
    }
}

