const express = require("express");
const app = express();
const port = 3000;
//const axios = require("axios");
const imgfolder  = require("./sharp-logic");


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res, next) => {
  res.send("Just a test");
  next();
});

app.get("/data", (req, res) => {
  //res.type('application/json')
  //newData(([key, value]) => `${key}: ${value}`)
  console.log(imgfolder)
  let picname = req.query.picname
  console.log(`imgfolder.fjord.${picname}`)


  res.sendFile(imgfolder)
  // for(let i = 0; i < imgfolder; i++){
  //   //if(req.query.)
  //   let filename = imgfolder[i] 
  //   //console.log(filename)
  //   return filename
  // }
  // res.render('data', {
  //   if(filename[key] === )
  // })

});

app.listen(port, () => {
  console.log(`Server listening on localhost${port}`);
});
