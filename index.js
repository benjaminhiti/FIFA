const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');

const playerRoute= require('./routes/players');


const app = express();
app.use(express.json());

app.use('/players', playerRoute);


mongoose.connect(process.env.MONGO_URI).then((connection) => {
  console.log('connected to database')
}).catch((error) => {
  console.log(`unable to connect to database: ${error.message}`)
})

app.listen(process.env.PORT, () => {
    console.log(`server currently running on ${process.env.PORT}`);
  });
