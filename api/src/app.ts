//Config de Express.
import express from 'express'
import config from './config'
const app= express()
app.set('port', config.PORT ) //setea el puerto , y del otro lado hay que obtenerlo.
export default app
