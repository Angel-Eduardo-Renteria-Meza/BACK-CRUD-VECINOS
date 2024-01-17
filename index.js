const express = require("express")
const cors = require("cors")
const initDB = require("./initDB")
const taskRoutes = require("./routes/task")


const app = express()

initDB()

//middlewares
app.use(express.json())
app.use(cors())

//rutas
app.use("/vecinos", taskRoutes)

const PORT = 3000 


app.listen(PORT, () =>{
    console.log("Tu servidor esta en el puerto 3000");
})