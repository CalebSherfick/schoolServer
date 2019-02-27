let mongoose = require('mongoose')
const connectionStr = 'mongodb://cbschoolserver:Ab1V7p~sF3M-@den1.mongo1.gear.host:27001/cbschoolserver'
let connection = mongoose.connection

mongoose.connect(connectionStr, {
  useNewUrlParser: true
})

connection.on('error', err => {
  console.log('Database Error: ', err)
})

connection.once('open', () => {
  console.log('Successfully Connected to Database')
})