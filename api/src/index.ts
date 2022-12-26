import app from "./app"
import './db'


app.listen(app.get('port'),()=>{
    console.log(`El servidor esta escuchando en el puerto ${app.get('port')}`)
})
