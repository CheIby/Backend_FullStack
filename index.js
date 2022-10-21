const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const eventRoute = require('./routes/eventRoute')
const registerRoute = require('./routes/registerRoute')
const authRoute = require('./routes/authRoute')

mongoose.connect(process.env.DATABASE)
.then(()=>console.log("Connect DB Success"))
.catch(()=>console.log("Fucking Fail Connect"))

app.use(cors())
app.use(express.json())
app.use('/event',eventRoute)
app.use('/register',registerRoute)
app.use('/auth' ,authRoute)

app.listen(process.env.PORT || 7000,() =>{
    console.log("Backend running")
})