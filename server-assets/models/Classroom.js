let mongoose = require('mongoose')
let Teacher = require('./Teacher')
let Student = require('./Student')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let classroom = new Schema({
  room: { type: Number, required: true },
  school: { type: ObjectId, ref: 'School', virtual: true }
})

classroom.pre('remove', next => {
  Promise.all([Teacher.remove({ classroom: this._id }), Student.remove({ classroom: this._id })])
    .then(() => next())
    .catch(err => next(err))
})

module.exports = mongoose.model('Classroom', classroom)