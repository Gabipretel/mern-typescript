//Conexión con Mongo y Funcion async autoinvocada.

import mongoose from "mongoose";
import config from "./config";

(async () => {
  try {
    // const mongooseOptions= {
    //     useUnifiedTopology:true,
    //     useNewUrlParser: true,
    // }
    const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`);
    console.log("db esta conectada a:", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
