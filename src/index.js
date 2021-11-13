const express = require("express")
const app = express()
const port = 3000
const axios = require("axios")
const imgFile  = require("./sharp-logic")


app.use(express.static(__dirname + '/public/images'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
  const widthStr = req.query.width
  const heightStr = req.query.height
  const filename = req.query.filename

  let width, height
  if (widthStr) {
    width = parseInt(widthStr)
  }
  if (heightStr) {
    height = parseInt(heightStr)
  }
  res.type('image/jpg')
    imgFile( filename, width, height).pipe(res)
    //console.log(imgFile)
})


// axios.get('/pics?imgfolder')
//   .then(res => {
//     console.log(res.data);
//   });

// app.get("/data", (req, res) => {
//   //res.type('application/json')
//   //newData(([key, value]) => `${key}: ${value}`)
//   console.log(imgfolder)
//   let picname = req.query.picname
//   console.log(`imgfolder.${picname}`)
//   console.log([picname])


//   res.send(picname)
//   // for(let i = 0; i < imgfolder; i++){
//   //   //if(req.query.)
//   //   let filename = imgfolder[i] 
//   //   //console.log(filename)
//   //   return filename
//   // }
//   // res.render('data', {
//   //   if(filename[key] === )
//   // })

// })

app.listen(port, () => {
  console.log(`Server listening on localhost:${port}`)
})
