//Config de Express.
import express from 'express'
import config from './config'
import morgan from 'morgan'
import cors from 'cors'
import VideosRoutes from '../src/routes/videos.routes'
const app= express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(VideosRoutes)

app.set('port', config.PORT ) //setea el puerto , y del otro lado hay que obtenerlo.
export default app
