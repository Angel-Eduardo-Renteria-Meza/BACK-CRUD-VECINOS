const mongoose = require("mongoose")


module.exports = initDB = () => {
mongoose.connect("")
.then(console.log("base de datos conectada"))
.catch(err => console.log(err))
}
