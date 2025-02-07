const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');

const {User}  = require("./models/User");

// apllication/x-www-fork-urlencoded
app.use(bodyParser.urlencoded({extend:true}));

// application/json
app.use(bodyParser.json());



const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://vndanwl:1q2w3e4r!@boilerplate.tl2rt.mongodb.net/',{

}).then(()=> console.log("MongoDB Connected.."))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send("hello worel2222d"))
//
// app.post('/register', (req, res) => {
//
//   const user = new User(req.body)
//
//   user.save((err, userinfo) => {
//     if(err) return res.json({success:false})
//     return res.status(200).json({
//       success:true
//     })
//   })
// })

app.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(port, ()=> console.log(`express app listening on port ${port}`))