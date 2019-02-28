let Classrooms = require('../models/Classroom')
let router = require('express').Router()

//GET ALL
router.get('', (req, res, next) => {
  Classrooms.find({}).populate('school')
    .then(classrooms => res.send(classrooms))
    .catch(err => res.status(400).send(err))
})

//GET ONE BY ID
router.get('/:id', (req, res, next) => {
  Classrooms.findById(req.params.id).populate('school')
    .then(classroom => res.send(classroom))
    .catch(err => res.status(400).send(err))
})

//ADD SCHOOL
router.post('', (req, res, next) => {
  Classrooms.create(req.body)
    .then(classroom => res.send(classroom))
    .catch(err => res.status(400).send(err))
})

//EDIT SCHOOL
router.put('/:id', (req, res, next) => {
  Classrooms.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(classroom => res.send(classroom))
    .catch(err => res.status(400).send(err))
})

//DELETE SCHOOL
router.delete('/:id', (req, res, next) => {
  Classrooms.remove({ _id: req.params.id })
    .then(() => res.send(`Classroom @${req.params.id} has been Deleted`))
    .catch(err => res.status(400).send(err))
})

module.exports = router