let mongoose = require('mongoose')
let Classroom = require('./Classroom')
let Teacher = require('./Teacher')
let Student = require('./Student')
let Schema = mongoose.Schema


let school = new Schema({
  name: { type: String, required: true },
  classroom: { type: Schema.Types.ObjectId, ref: 'Classroom', virtual: true }
})

school.pre('remove', next => {
  Promise.all([Classroom.remove({ school: this._id }), Teacher.remove({ school: this._id }), Student.remove({ school: this._id })])
    .then(() => next())
    .catch(err => next(err))
})

module.exports = mongoose.model('School', school)