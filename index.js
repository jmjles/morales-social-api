require('dotenv').config()
const express = require('express')
const app = express()
const Port = process.env.PORT

const middleware = [express.json({extended:true})]

const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

app.use(...middleware)

app.use('/auth',authRoute)
app.use('/post',postRoute)

app.listen(Port,()=> console.log(`Server is running on port: ${Port}`))