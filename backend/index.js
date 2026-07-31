require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.send.PORT || 3002;
const uri=process.env.MONGO_URL;

const app = express();

// mongoose.connect(process.env.MONGO_URL)
//   .then(() => console.log("DB connected"))
//   .catch(err => console.error(err));

app.listen(3002, ()=>{
    console.log("App started!");
    mongoose.connect(uri);
    console.log("DB connected");
});
