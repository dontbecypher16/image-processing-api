const express = require("express");
const app = express();
const port = 3000;
const axios = require('axios')
const testing = require('../build/sharp-logic')

app.use(express.static('images'))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.get("/", (req, res) => {
  res.send("Just a test");
});

app.get("/data", (req, res) => {
  res.json(testing);
});



app.listen(port, () => {
  console.log(`Server listening on localhost${port}`);
});
