let Teachers = require('../models/Teacher')
let router = require('express').Router()

//GET ALL
router.get('', (req, res, next) => {
  Teachers.find({})
    .then(teachers => res.send(teachers))
    .catch(err => res.status(400).send(err))
})

//GET ONE BY ID
router.get('/:id', (req, res, next) => {
  Teachers.findById(req.params.id)
    .then(teacher => res.send(teacher))
    .catch(err => res.status(400).send(err))
})

//ADD SCHOOL
router.post('', (req, res, next) => {
  Teachers.create(req.body)
    .then(teacher => res.send(teacher))
    .catch(err => res.status(400).send(err))
})

//EDIT SCHOOL
router.put('/:id', (req, res, next) => {
  Teachers.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(teacher => res.send(teacher))
    .catch(err => res.status(400).send(err))
})

//DELETE SCHOOL
router.delete('/:id', (req, res, next) => {
  Teachers.findByIdAndDelete(req.params.id)
    .then(() => res.send(`Teacher @${req.params.id} has been Deleted`))
    .catch(err => res.status(400).send(err))
})

module.exports = router