const express = require("express")
const cors = require("cors")
const initDB = require("./initDB")


const app = express()

initDB()

//middlewares
app.use(express.json())
app.use(cors())

//rutas


const PORT = 3000 


app.listen(PORT, () =>{
    console.log("Tu servidor esta en el puerto 3000");
})