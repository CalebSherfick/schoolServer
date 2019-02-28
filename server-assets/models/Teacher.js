let mongoose = require('mongoose')
let Student = require('./Student')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let teacher = new Schema({
  name: { type: String, required: true },
  classroom: { type: ObjectId, ref: 'Classroom', required: true },
  school: { type: ObjectId, ref: 'School', required: true }
})

teacher.pre('remove', next => {
  Student.remove({ teacher: this._id })
    .then(() => next())
    .catch(err => next(err))
})

module.exports = mongoose.model('Teacher', teacher)