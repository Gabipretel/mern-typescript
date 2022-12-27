// Definir las rutas GET,POST,PUT,DELETE
//Usadas en el cliente
import { Router } from "express";
// import { getVideos,getVideo,deleteVideos,createVideo,updateVideo } from "./videos.controller";
import * as videoCtrol from './videos.controller'
const router= Router()

router.get('/videos',videoCtrol.getVideos)

export default router