const path = require('path');
const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')))
app.use('/openai',require('./routes/openaiRoutes'))
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost://${port}`)
}) 