const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const axios = require("axios");
const newImages = require("../build/sharp-logic");

// app.use(function (req, res, next) {
//     res.setHeader(
//       'Content-Security-Policy-Report-Only',
//       "default-src 'self'; font-src 'self'; img-src 'self' localhost:3000; script-src 'self'; style-src 'self'; frame-src 'self'"
//     );
//     next();
//   });

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/data", cors());

app.get("/", (req, res, next) => {
  res.send("Just a test");
  next();
});

app.get("/data", (req, res) => {
  //res.type('application/json')
  //newData(([key, value]) => `${key}: ${value}`)
  res.json(`${newImages}`);
});

app.listen(port, () => {
  console.log(`Server listening on localhost${port}`);
});
