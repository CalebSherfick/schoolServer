let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let student = new Schema({
  name: { type: String, required: true },
  teacher: { type: ObjectId, ref: 'Teacher', virtual: true }
})

module.exports = mongoose.model('Student', student)