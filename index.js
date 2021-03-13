const express = require('express')
const CONFIG = require('./config')

// import routes

const authRoutes = require('./src/routes/auth')
const repRoutes = require('./src/routes/repository')
const usersRoutes = require('./src/routes/users')
const logsRoutes = require('./src/routes/logHistory')
const app = express()

app.set('port', process.env.PORT || 3000);

app.use(express.json())

app.use('/auth', authRoutes)

app.use('/repos', repRoutes)
app.use('/users', usersRoutes)
app.use('/logs', logsRoutes)

app.listen(app.get('port'), () => console.log(' Server on '))

