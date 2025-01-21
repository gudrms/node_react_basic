const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://vndanwl:1q2w3e4r!@boilerplate.tl2rt.mongodb.net/',{

}).then(()=> console.log("MongoDB Connected.."))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send("hello worel2222d"))

app.listen(port, ()=> console.log(`express app listening on port ${port}`))