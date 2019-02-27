let Schools = require('../models/School')
let router = require('express').Router()

//GET ALL
router.get('', (req, res, next) => {
  Schools.find({})
    .then(schools => res.send(schools))
    .catch(err => res.status(400).send(err))
})

//GET ONE BY ID
router.get('/:id', (req, res, next) => {
  Schools.findById(req.params.id)
    .then(school => res.send(school))
    .catch(err => res.status(400).send(err))
})

//ADD SCHOOL
router.post('', (req, res, next) => {
  Schools.create(req.body)
    .then(school => res.send(school))
    .catch(err => res.status(400).send(err))
})

//EDIT SCHOOL
router.put('/:id', (req, res, next) => {
  Schools.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(school => res.send(school))
    .catch(err => res.status(400).send(err))
})

//DELETE SCHOOL
router.delete('/:id', (req, res, next) => {
  Schools.findByIdAndDelete(req.params.id)
    .then(() => res.send(`School @${req.params.id} has been Deleted`))
    .catch(err => res.status(400).send(err))
})

module.exports = router