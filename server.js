// let express=require('express')
// let express=require('path')
// let app=express()
// let bodyparser=require('body-parser')

// app.use(express.static(__dirname))
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'messageapp.html'));
// });
// app.use(bodyparser.json())
// app.use(bodyparser.urlencoded({extended:false}))
// let mydata=[  ]

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); // Allowed methods
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });



// app.get('/messages',(req,res)=>
// {
//   res.json(mydata)
// })

// app.post('/messages',(req,res)=>
// {
//   mydata.push(req.body)
//   console.log(req.body);
  
//   res.sendStatus(200)
// })

// const PORT = process.env.PORT || 5500;
// let server = app.listen(PORT, () => {
//   console.log(`Server running at ${PORT}`);
// });


const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();

app.use(express.static(__dirname));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

let mydata = [];

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); // Allowed methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'messageapp.html'));
});

app.get('/messages', (req, res) => {
  res.json(mydata);
});

app.post('/messages', (req, res) => {
  mydata.push(req.body);
  console.log(req.body);
  res.sendStatus(200);
});

let server = app.listen(5500, () => {
  console.log(`Server running at ${server.address().port}`);
});
