require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

const app = express();
mongoose.connect(MONGO_URL);

app.listen(3002, ()=> {
    console.log("Server is running on port 3002");
});