const express = require('express')



// import routes

const authRoutes = require('./src/routes/auth')

const app = express()

app.set('port', process.env.PORT || 3000);

app.use(express.json())

app.use('/auth', authRoutes)

app.listen(app.get('port'))