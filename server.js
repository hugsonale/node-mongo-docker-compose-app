const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect("mongodb://mongo:27017/mydb")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Node.js + MongoDB Containerized App");
});

app.listen(port, () => console.log(`Server running on port ${port}`));