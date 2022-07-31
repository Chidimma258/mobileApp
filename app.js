const express = require('express')
require('dotenv').config()
const serveStatic = require('serve-static')
const path = require('path')

const app = express()
const port = process.env.PORT || 2000

app.use('/',serveStatic(path.join(__dirname,'')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})