let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let student = new Schema({
  name: { type: String, required: true },
  teacher: { type: ObjectId, ref: 'Teacher', required: true },
  classroom: { type: ObjectId, ref: 'Classroom', required: true },
  school: { type: ObjectId, ref: 'School', required: true }
})

module.exports = mongoose.model('Student', student)