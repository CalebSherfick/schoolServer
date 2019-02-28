let mongoose = require('mongoose')
let Classroom = require('./Classroom')
let Teacher = require('./Teacher')
let Student = require('./Student')
let Schema = mongoose.Schema


let school = new Schema({
  name: { type: String, required: true }
})

school.pre('remove', next => {
  console.log("something")
  Promise.all([Classroom.remove({ school: this._id }), Teacher.remove({ school: this._id }), Student.remove({ school: this._id })])
    .then(() => {
      console.log("something")
      next()
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
})

module.exports = mongoose.model('School', school)