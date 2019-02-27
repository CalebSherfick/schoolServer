let mongoose = require('mongoose')
let Schema = mongoose.Schema

let student = new Schema({
  name: { type: String, required: true }
})

module.exports = mongoose.model('Student', student)