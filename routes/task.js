const express = require("express")
const taskSchema = require("../models/task")
const router = express.Router()


router.post("/create", (req, res) => {
    taskSchema.create(req.body)
    .then((data)=>{
        res.json(data)
    })
    .catch(err => res.json(err))
})

router.get("/", (req, res) => {
    taskSchema.find()
    .then((data)=>{
        res.json(data)
    })
    .catch(err => res.json(err))
})

router.get("/:id", (req, res) => {
    const id = req.params.id

    taskSchema.findById({_id: id})
    .then((data)=>{
        res.json(data)
    })
    .catch(err => res.json(err))
})

router.put("/update/:id", (req, res) => {
    const id = req.params.id
    
    const tarea = req.body.tarea
    const fecha = req.params.fecha

    taskSchema.findByIdAndUpdate({_id: id},{tarea: tarea, fecha: fecha })
    .then((data)=>{
        res.json(data)
    })
    .catch(err => res.json(err))
})

router.delete("/del/:id", (req, res) => {
    const id = req.params.id

    taskSchema.findByIdAndDelete({_id: id})
    .then((data)=>{
        res.json(data)
    })
    .catch(err => res.json(err))
})

module.exports = router