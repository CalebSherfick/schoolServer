let Students = require('../models/Student')
let router = require('express').Router()

//GET ALL
router.get('', (req, res, next) => {
  Students.find({})
    .then(students => res.send(students))
    .catch(err => res.status(400).send(err))
})

//GET ONE BY ID
router.get('/:id', (req, res, next) => {
  Students.findById(req.params.id)
    .then(student => res.send(student))
    .catch(err => res.status(400).send(err))
})

//ADD SCHOOL
router.post('', (req, res, next) => {
  Students.create(req.body)
    .then(student => res.send(student))
    .catch(err => res.status(400).send(err))
})

//EDIT SCHOOL
router.put('/:id', (req, res, next) => {
  Students.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(student => res.send(student))
    .catch(err => res.status(400).send(err))
})

//DELETE SCHOOL
router.delete('/:id', (req, res, next) => {
  Students.findByIdAndDelete(req.params.id)
    .then(() => res.send(`Student @${req.params.id} has been Deleted`))
    .catch(err => res.status(400).send(err))
})

module.exports = router