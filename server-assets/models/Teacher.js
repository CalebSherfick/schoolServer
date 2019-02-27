let mongoose = require('mongoose')
let Student = require('./Student')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let teacher = new Schema({
  name: { type: String, required: true },
  classroom: { type: ObjectId, ref: 'Classroom', virtual: true }
})

teacher.pre('remove', next => {
  Promise.all([Student.remove({ teacher: this._id })])
    .then(() => next())
    .catch(err => next(err))
})

module.exports = mongoose.model('Teacher', teacher)