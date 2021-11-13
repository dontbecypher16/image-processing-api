const express = require("express")
const app = express()
const port = 3000
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
  res.type('image/jpeg')
    imgFile( filename, width, height)//.pipe(res)
    //console.log(imgFile)
})



app.listen(port, () => {
  console.log(`Server listening on localhost:${port}`)
})
