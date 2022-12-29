// Definir las rutas GET,POST,PUT,DELETE
//Usadas en el cliente
import { Router } from "express";
// import { getVideos,getVideo,deleteVideos,createVideo,updateVideo } from "./videos.controller";
import * as videoCtrol from './videos.controller'
const router= Router()

router.get('/videos',videoCtrol.getVideos)
router.get('/videos/:id',videoCtrol.getVideo)
router.post('/videos',videoCtrol.createVideo)
router.delete('/videos/:id',videoCtrol.deleteVideos)
router.put('/videos/:id',videoCtrol.updateVideo)


export default router