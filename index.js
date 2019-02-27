const express = require('express')
const bp = require('body-parser')
let server = express()
let port = 3000

require('./server-assets/db/gearhost-config')

//MIDDLEWEAR
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))

//ROUTES
let schoolRoutes = require('./server-assets/routes/school-routes')
let classroomRoutes = require('./server-assets/routes/classroom-routes')
let teacherRoutes = require('./server-assets/routes/teacher-routes')
let studentRoutes = require('./server-assets/routes/student-routes')

server.use('/api/schools', schoolRoutes)
server.use('/api/classrooms', classroomRoutes)
server.use('/api/teachers', teacherRoutes)
server.use('/api/students', studentRoutes)

//DEFAULT
server.use('*', (req, res, next) => {
  res.status(404).send('No Routes Matching that Request')
})

//START SERVER
server.listen(port, () => {
  console.log('Server Running On Port: ', port)
})