const mongoose = require("mongoose")


module.exports = initDB = () => {
mongoose.connect("mongodb://PruebaTecnica:Prueba123@198.199.66.16:27017/prueba_tecnica")
.then(console.log("base de datos conectada"))
.catch(err => console.log(err))
}