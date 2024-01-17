


const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    tarea: String,
    fecha: String
  });


  module.exports =  mongoose.model("task_EduardoRenteria", taskSchema, "task_EduardoRenteria")